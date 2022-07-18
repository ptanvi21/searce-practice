'use strict';

const dialogflow = require('dialogflow');
const config = require('./config');
const express = require('express');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const uuid = require('uuid');

// verify request came from facebook
// app.use(bodyParser.json({
//     verify: verifyRequestSignature
// }));

app.set("port", process.env.PORT || 6000);

//serve static files in the public directory
app.use(express.static('public'));

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// Process application/json
app.use(bodyParser.json());

const credentials = {
    client_email: config.GOOGLE_CLIENT_EMAIL,
    private_key: config.GOOGLE_PRIVATE_KEY,
};

const sessionClient = new dialogflow.SessionsClient(
    {
        projectId: config.GOOGLE_PROJECT_ID,
        credentials
    }
);


const sessionIds = new Map();

// Index route
app.get("/", function (req, res) {
    res.send("Hello world, I am a chat bot");
  });
   
  // for Facebook verification
  app.get("/webhook/", function (req, res) {
    console.log("request");
    if (
      req.query["hub.mode"] === "subscribe" &&
      req.query["hub.verify_token"] === config.FB_VERIFY_TOKEN
    ) {
      res.status(200).send(req.query["hub.challenge"]);
    } else {
      console.error("Failed validation. Make sure the validation tokens match.");
      res.sendStatus(403);
    }
  });

  const isDefined = (obj) => {
    if (typeof obj == "undefined") {
      return false;
    }
    if (!obj) {
      return false;
    }
    return obj != null;
  }

  /*
 * Call the Send API. The message data goes in the body. If successful, we'll 
 * get the message id in a response 
 *
 */
const callSendAPI = async (messageData) => {
 
    const url = "https://graph.facebook.com/v3.0/me/messages?access_token=" + config.FB_PAGE_TOKEN;
      await axios.post(url, messageData)
        .then(function (response) {
          if (response.status == 200) {
            var recipientId = response.data.recipient_id;
            var messageId = response.data.message_id;
            if (messageId) {
              console.log(
                "Successfully sent message with id %s to recipient %s",
                messageId,
                recipientId
              );
            } else {
              console.log(
                "Successfully called Send API for recipient %s",
                recipientId
              );
            }
          }
        })
        .catch(function (error) {
          console.log(error.response.headers);
        });
    }

  /*
 * Turn typing indicator on
 *
 */
const sendTypingOn = (recipientId) => {
    var messageData = {
      recipient: {
        id: recipientId
      },
      sender_action: "typing_on"
    };
    callSendAPI(messageData);
  }

  function sendToApiAi(sender, text) {
    sendTypingOn(sender);
    let apiaiRequest = apiAiService.textRequest(text, {
      sessionId: sessionIds.get(sender)
    });
   
    apiaiRequest.on("response", response => {
      if (isDefined(response.result)) {
        handleApiAiResponse(sender, response);
      }
    });
   
    apiaiRequest.on("error", error => console.error(error));
    apiaiRequest.end();
  }

  function receivedMessage(event) {
    var senderID = event.sender.id;
    var recipientID = event.recipient.id;
    var timeOfMessage = event.timestamp;
    var message = event.message;
   
    if (!sessionIds.has(senderID)) {
      sessionIds.set(senderID, uuid.v1());
    }
   
    var messageId = message.mid;
    var appId = message.app_id;
    var metadata = message.metadata;
   
    // You may get a text or attachment but not both
    var messageText = message.text;
    var messageAttachments = message.attachments;

    console.log(messageText)
   
    if (messageText) {
      //send message to api.ai
      sendToApiAi(senderID, messageText);
    } else if (messageAttachments) {
      handleMessageAttachments(messageAttachments, senderID);
    }
  }

  /*
 * All callbacks for Messenger are POST-ed. They will be sent to the same
 * webhook. Be sure to subscribe your app to your page to receive callbacks
 * for your page. 
 * https://developers.facebook.com/docs/messenger-platform/product-overview/setup#subscribe_app
 *
 */
app.post("/webhook/", function (req, res) {
    var data = req.body;
    // Make sure this is a page subscription
    if (data.object == "page") {
      // Iterate over each entry
      // There may be multiple if batched
      data.entry.forEach(function (pageEntry) {
        var pageID = pageEntry.id;
        var timeOfEvent = pageEntry.time;
   
        // Iterate over each messaging event
        pageEntry.messaging.forEach(function (messagingEvent) {
          if (messagingEvent.message) {
            receivedMessage(messagingEvent);
          } else {
            console.log("Webhook received unknown messagingEvent: ",messagingEvent);
          }
        });
      });
      // Assume all went well.
      // You must send back a 200, within 20 seconds
      res.sendStatus(200);
    }
  });

  
  
   
  // Spin up the server
  app.listen(app.get("port"), function () {
    console.log("Bot Started on port", app.get("port"));
  });

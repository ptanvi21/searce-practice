const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
const axios = require('axios');
const fetch = require('node-fetch');

const port = 8001

app.use(bodyParser.urlencoded({
    extended: false,
}))

const sessionId = uuid.v4();

// app.get('/', (req, res) => {
//   res.send("<h1>Weather Bot</h1>");
// });

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pass to next layer of middleware
    next();
  });

app.post('/chatbot', (req,res) => {
    //return promise 
    console.log("MSG: ",req.body.MSG);
    runSample(req.body.MSG)
      .then(data => {
        res.send({Reply: data});
      })
      .catch((error) => {
        console.log(error);
        res.send({
          error: "Error occured"
        })
      })
  })

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
 async function runSample(projectId) {
    // A unique identifier for the given session
    const sessionId = uuid.v4();
  
    // Create a new session
    const sessionClient = new dialogflow.SessionsClient({
        keyFilename: "config.json",
    });
    const sessionPath = sessionClient.projectAgentSessionPath(
      projectId,
      sessionId
    );
    // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: 'hello',
        // The language used by the client (en-US)
        languageCode: 'en-US',
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
  } else {
    console.log('  No intent matched.');
  }
  return result.fulfillmentText;
}

app.listen(port, () => {
  console.log('Listening on ', port)
})
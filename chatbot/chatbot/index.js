
const dialogflow = require('@google-cloud/dialogflow');
const {Translate} = require('@google-cloud/translate').v2;
require('dotenv').config();
const express = require('express');
const app = express();
var bodyParser = require('body-parser')

const PORT = process.env.PORT || 8000;


app.use(bodyParser.urlencoded({
    extended: false,
}))


app.get('/', (req,res) => {
    res.send("Hello!!");
})

// app.get('/', (req, res) => {

//     detectIntent('en','hello','abcd123')
//     .then((data) => {
//       res.send(data);
  
//     })
//     .catch((err) => console.log(err));
//   })

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pass to next layer of middleware
    next();
  });


const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
})



const detectLanguage = async (text) => {

    try {
        let response = await translate.detect(text);
        return response[0].language;
    } catch (error) {
        console.log(`Error at detectLanguage --> ${error}`);
        return 0;
    }
}

const translateText = async (text, targetLanguage) => {

    try {
        let [response] = await translate.translate(text, targetLanguage);
        return response;
    } catch (error) {
        console.log(`Error at translateText --> ${error}`);
        return 0;
    }
};

const PROJECTID = CREDENTIALS.project_id;

const CONFIGURATION = {
    credentials: {
        private_key: CREDENTIALS['private_key'],
        client_email: CREDENTIALS['client_email']
    }
}

const sessionClient = new dialogflow.SessionsClient(CONFIGURATION);

const detectIntent = async(languageCode, queryText, sessionId) => {
    let sessionPath = sessionClient.projectAgentSessionPath(PROJECTID, sessionId);
    let request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: queryText,
                languageCode: languageCode,
            },
        },
    };
    const responses = await sessionClient.detectIntent(request);
    // console.log(responses);
    const result = responses[0].queryResult;
    const text = result.fulfillmentText;
    console.log(text);

    detectLanguage(text)
    .then((res) => {
        console.log("LANGUAGE DETECTED: ",res);
    })
    .catch((err) => {
        console.log(error);
    });



    translateText(text, 'fr')
    .then((res) => {
        console.log("TRANSLATION: ", res);
    })
    .catch((err) => {
        console.log(err);
    });
    // return {
    //     // response: result.languageCode
    //     response: result.fulfillmentText
    // }
}

app.post('/dialogflow', async (req,res) => {
        detectIntent('en','hello','abcd123')
    .then((data) => {
      res.send(data);
  
    })
    .catch((err) => console.log(err));

})

app.listen(PORT, ()=> {
    console.log("Listening on port ", PORT);
})


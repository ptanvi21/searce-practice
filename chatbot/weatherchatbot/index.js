
const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
const axios = require('axios');
const fetch = require('node-fetch');


const port = 7001

app.use(bodyParser.urlencoded({
    extended: false,
}))

const sessionId = uuid.v4();

app.get('/', (req, res) => {
  res.send("<h1>Weather Bot</h1>");
});


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

function parseResponse(err, response, body) {
	if (err) {
		console.log('error:', err);
	}
}



function getWeather(city){
  // console.log(process.env.WEATHER_API_KEY)
  var url = "https://api.openweathermap.org/data/2.5/forecast?q="+ city+ WEATHER_API_KEY
  console.log(url);  
	
    return new  Promise((resolve, reject) => {
        axios.get(url).then(function (response) {
            
            let list = response.data.list;
            // console.log(list);
            // let date = new Date(list[0].dt * 1000);
            // console.log(date);
            
        // Curr Day
            // var time = list[0].dt_txt;
            // console.log(time);
            // var currDate = time.split(" ");
            // var result = "Weather in " + city + " is as follows:" + "\t";
            // result += list[0].weather[0].description + ", temperature " + (list[0].main.temp-273.15).toFixed(2) + " degree celsius on " + currDate[0].toString() ;
            // console.log(result);
            // resolve(result);

            for (var i = 0; i < list.length; i=i+8) { //looping through the array
                
                  var currDate = ' ';
                  var time = list[i].dt_txt;
                  console.log("Time:", time);
                  var nextdate = time.split(" ");
                  console.log("nextdate", nextdate[0])
                  if(currDate != nextdate){
                    currDate = nextdate;
                    console.log("currDate", currDate[0])
                    var currentDate = currDate[0].split(',');
                    console.log("currentDate", currentDate)
                  }
                  var temperature = list[i].main.temp;
                  var tempC = temperature - 273.15;
                  // console.log("temp:",tempC);
                  var weather = list[i].weather[0].description;
                  description = weather;
                  description = tempC.toFixed(2) + " degrees, " + description + " on  " + currentDate.toString();
                  
                  if(i==0){
                    var des0 = "Weather in "+ city + " for today and next 4 days is as follows: " + "\n" + description + ".\n";
                  }
                  else if(i==8){
                    var des1 = description + ".\n";
                  }
                  else if(i==16){
                    var des2 = description + ".\n";
                  }
                  else if(i==24){
                    var des3 = description + ".\n";
                  }
                  else if(i==32){
                    var des4 = description + ".\n";
                  }
                  result = des0 + des1 + des2 + des3 + des4;
                  // console.log("Result", result)
                  console.log(result)
                }
            resolve(result);
            
            reject("Invalid!!") //no date matched
        });
    })

}
/*const getWeather = city => 
    fetch(
        'https://api.openweathermap.org/data/2.5/forecast?q=' + city +'&appid=' + process.env.OPENWEATHER_API_KEY
    )
    
    .then(response => response.json())
    .then(data => {
        const kelvin = data.main.temp;
        const celsius = Math.round(kelvin - 273.15);
        console.log("Temp = " ,celsius);
        return celsius;
    })
    .catch(error => console.log(error));
*/
/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function runSample(msg,projectId = 'weatherbot-gpnc') {
  // A unique identifier for the given session
  // const sessionId = uuid.v4();

  // Create a new session
  const sessionClient = new dialogflow.SessionsClient({
      keyFilename: 'config.json',
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
        text: msg ||  'Weather in pune',
        // The language used by the client (en-US)
        languageCode: 'en-US',
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log('intent detected');
  const result = responses[0].queryResult;
  // console.log('Result ', result);
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
  } else {
    console.log('  No intent matched.');
  }

  if(result.intent.displayName ==='getWeather') {
      var city = result.parameters.fields['city'].stringValue;
      console.log("City: ",city);
      result.fulfillmentText =  getWeather(city)
        // .then(temperature => {
        //   res.send(
        //     {
        //       message: 'The weather in ' + city + ' is ' + temperature + '°C',
        //     }
        //   )
        // })
  }

  return result.fulfillmentText;
}

// runSample()

app.listen(port, () => {
  console.log('Listening on ', port)
})

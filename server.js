// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');

app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port,listening);

function listening(){
    console.log("The server is runing... ");
    console.log("The server is on PORT : ",port);
}

// GET Route
app.get('/getProjectData',getProjectData);

// POST Route
app.post('/postData',postfunction);

// Callback function to complete GET '/getProjectData'
function getProjectData(req,res){
    // console.log(projectData);
    res.send(projectData);
}

// Callback function to complete POST '/postData'
function postfunction(req,res){
    projectData.temprature = req.body.temprature;
    projectData.date = req.body.date;
    projectData.user_response = req.body.user_response;
    // console.log(projectData);
}
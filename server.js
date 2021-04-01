const port = 8000;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// app.use(express.static("client"));

const server = app.listen(port,listening);





function listening(){
    console.log("the server is runing");
    console.log("the server is on PORT : ",port);
}

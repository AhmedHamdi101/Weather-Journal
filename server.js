const port = 8000;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static("client"));

const server = app.listen(port,listening);

// app.get('/', function (req, res) {
//     res.send('hello world');
//   })




// const data = [];
// app.post('/',function(req , res){
    // console.log(req.body);
    // data.push(req.body);
//     res.send('POST received');
// })



function listening(){
    console.log("the server is runing");
    console.log("the server is on PORT : ",port);
}


const data = [];
app.post('/addMovie',postfunction);

function postfunction(req,res){
    data.push(req.body);
    console.log(data);
}
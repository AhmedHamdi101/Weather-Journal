/* Global Variables */

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = 'e9748bbaf1a3f5887659c83200e7e026';  
let tempData = {temprature:'' , date:'',user_response:''};
let zipCode;
let use_response;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

  function performAction(e){ 
    use_response = document.getElementById('feelings').value;
    zipCode =  document.getElementById('zip').value; 

/* Function to GET Web API Data*/
    data = getData(`${baseURL}${zipCode}&appid=${apiKey}`)
    //Chainned function
    .then(function(data){
      console.log("new data",data);
      tempData.temprature = data.main.temp;
      tempData.date = newDate;
      tempData.user_response = use_response;
      postData('/postData',tempData);
    })
    //Chainned function
    .then(async function(){
      let data = await getData('/getProjectData');
      console.log(data);
      document.getElementById('date').innerHTML = data.date;
      document.getElementById('temp').innerHTML = data.temprature;
      document.getElementById('content').innerHTML = data.user_response;
    })
  }


/* Function to POST data */
const postData = async (url = '' , data = {} ) =>{
    console.log(data);
    const response = await fetch (url , {
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try{
        const newData = await response.json();
        // console.log("Post Data = ",newData);
        return newData;
    }catch(error){
        console.log("ERROR : ",error);
    }
    
}

/* Function to GET Project Data */
const getData = async ( url = '')=> {
      const request = await fetch(url)
      try {
        const newData = await request.json();
        console.log("new data",newData);
        return newData;
      }catch(error) {
        console.log("ERROR : ", error);
      }
  }


//   const getWeatherData = async (baseURL, zip, key)=>{
//     const request = await fetch(`${baseURL}${zip}&appid=${key}`);
//     try{
//       const newData = await request.json();
//       console.log(newData);
//       return new
//     }catch(error){
//       console.log("ERROR : ",error);
//     }
    
// }




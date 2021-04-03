/* Global Variables */

let baseURL = '';
const apiKey = 'e9748bbaf1a3f5887659c83200e7e026';  
const zipCode =  document.getElementById('zip').value;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



/* Function to GET Web API Data*/
document.getElementById('generate').addEventListener('click', performAction);

  function performAction(e){  
    getWeatherData(baseURL,newAnimal, apiKey)
  }

  const getAnimalDemo = async (baseURL, zip, key)=>{
    const res = await fetch(baseURL+zip+key)
    
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
        console.log("Post Data = ",newData);
        return newData;
    }catch(error){
        console.log("ERROR : ",error);
    }
    
}

const getData = async ( url = '')=> {
      const request = await fetch(url)
      try {
        const newData = await request.json();
        console.log("new data",newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }






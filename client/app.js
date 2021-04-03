console.log("hey bitch");

const postData = async (url = '' , data = {} ) =>{
    //print data in console
    console.log(data);
    // respone is a wait function wa=here i am storing type of my 
    // server request type and data 
    const response = await fetch (url , {
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'content-Type': 'application/json',
        },
        // converting string data to json
        body: JSON.stringify(data),
    });

    // after the response is filled
    try{
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error){
        console.log("ERROR : ",error);
    }
    
}


postData('/addMovie',{Movie: "matrix",rate:"5"});
postData('/addMovie',{Movie: "get smart",rate:"10"});
//Fetch 

/* Para fazer requições, para consumir um XML, JSON, Api, era utilizada uma API do browser 
chamada XMLhtprequest --- Foi introdozida a API Fetch que trabalha usando promises*/

fetch('http://localhost:8080/data.json').then(responseStream => {
    responseStream.json().then(data => {
        console.log(data); 
    });
}); 
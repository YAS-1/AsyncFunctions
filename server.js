const express = require("express");

const callbackFetch = require("./callback");


const app = express();

const port = 3000;

app.listen(port, (req, res)=>{
    console.log(`Server is running on port ${port}\n`);

    // The callback method to fetch data
    callbackFetch((error, data) =>{
        if(error){
            console.log(error);
        }
        else{
            console.log('Using the callback method data in Sample1.json:',data);
        }
    })
});

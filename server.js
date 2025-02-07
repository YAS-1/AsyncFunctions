const express = require("express");

const callbackFetch = require("./callback");
const FetchPromise = require("./promises");


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
            console.log('Using the callback method data in Sample1.json:',data ,"\n");
        }
    });

    //Using the Promise method
    FetchPromise()
    .then((data) => {
        console.log('Using the Promise method data in Sample2.json:',data);
    });
});

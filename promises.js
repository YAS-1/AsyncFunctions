const fs = require("fs").promises;
const path = require("path");

const FetchPromise = () => {

    const FilePath = path.join(__dirname, "Sample1.json"); // Storing the the json file directory in the FilePath variable

    return fs.readFile(FilePath, "utf-8") // use the fs.readFile to read the file details

    .then((data) =>  {
        return JSON.parse(data);});  ///using the then key word to parse the JSON string
    
}


module.exports = FetchPromise;
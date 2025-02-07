
const fs = require("fs");
const path = require("path")


const callbackFetch = (callback) => {
    const FilePath = path.join(__dirname, "Sample1.json"); //The FilePath variable stores the directory to the json file

    fs.readFile(FilePath, 'utf-8', (error, data) => { // Using the fs.readFile to read the file in the FilePath directory
        if (error){
            return callback(error, null); // if there is an error reading the file it is passed to the callback and exited
        }

        try {
            const ParsedData = JSON.parse(data);
            return callback(null, ParsedData); // if the data is parsed successfully it is passed to the callback
        } catch (ParsedError) {
            callback(ParsedError, null); // if the parsing is unsuccessful the error is caught and passed to the callback
        }
    });
}

module.exports = callbackFetch;
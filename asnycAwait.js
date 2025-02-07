
const fs = require('fs').promises
const path = require('path')


// Creating an async function 
const FetchAsync = async () => {

    try {
        const FilePath = path.join(__dirname, "Sample1.json"); // store the FILE DIRECTORY

        const data = await fs.readFile(FilePath, "utf-8"); // read the file details

        const jsonData = JSON.parse(data); // parse the details to json format

        console.log("Data in Sample1.json using async/await:", jsonData);
    } catch (error) {
        console.log(error)
    }
}

module.exports = FetchAsync;
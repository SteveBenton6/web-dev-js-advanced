const fs = require("fs");

function readFile() {
  try {
    const fileData = fs.readFileSync("data.json"); //No data.json file
  } catch {
    console.log("A file handling error occured!");
  }
  console.log("Hello Node JS World!");
}

readFile();

const fs = require("fs");

// function readFile() {  //Synchronous Version
//   let fileData;

//   fileData = fs.readFileSync("data.txt");
//   console.log(fileData.toString());

//   console.log("Hello Async World!");
// }

function readFile() {
  //Asynchronous Version
  let fileData;

  fs.readFile("data.txt", function (error, fileData) {
    console.log("File parsing done!");
    console.log(fileData.toString());
  });

  console.log("Hello Async World!");
}

readFile();

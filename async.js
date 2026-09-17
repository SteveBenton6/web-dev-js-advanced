const fs = require("fs/promises");

// function readFile() {  //Synchronous Version
//   let fileData;

//   fileData = fs.readFileSync("data.txt");
//   console.log(fileData.toString());

//   console.log("Hello Async World!");
// }

// function readFile() {
//   //Asynchronous Version
//   let fileData;

//   fs.readFile("data.txt", function (error, fileData) {
//     if (error) {console.log(error)};
//     console.log("File parsing done!");
//     console.log(fileData.toString());
//     // start another async task that sends the data to a database
//   });

//   console.log("Hello Async World!");
// }

function readFile() {
  //Promises Version
  let fileData;

  fs.readFile("data.txt")
    .then(function (fileData) {
      console.log("File parsing done!");
      console.log(fileData.toString());
      // return anotherAsyncOperation
    })
    .then(function () {
      console.log("Hello 2nd Promise!!");
    })
    .catch(function (error) {
      console.log(error);
    });

  console.log("Hello Async World!");
}

readFile();

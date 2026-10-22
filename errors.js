const fs = require("fs");

function readFile() {
  try {
    const fileData = fs.readFileSync("data.json"); //No data.json file
  } catch {
    console.log("A file handling error occured!");
  }

  try {
    app.get("/", function (req, res) {
      res.render("index");
    });
  } catch (error) {
    console.log("A routing error occured!");
    console.log(`Error message feedback: ${error.message}`);
  }
  console.log("Hello Node JS World!");
}

readFile();

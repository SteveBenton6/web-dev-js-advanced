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
  } catch {
    console.log("A routing error occured!");
  }
  console.log("Hello Node JS World!");
}

readFile();

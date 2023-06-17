const express = require("express");
const app = express();
const mongo = require("./config/db");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

//- Using body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//- set view engine //(ejs)
app.set("view engine", "ejs");

//- Serving Static files
app.use(express.static("public"));

//- Add Path of Routes
app.use(require("./routes/index"));

//- Add DataBase
mongo();

app.listen(PORT, () => {
  console.log(`Server is running at port number ${PORT}`);
});

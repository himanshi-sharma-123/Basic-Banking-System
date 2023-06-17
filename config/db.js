const mongoose = require("mongoose");

const mongo = () => {
  mongoose
    .connect(
      "mongodb+srv://himanshish456<password>@cluster0.wroudbq.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Connection Sucessfull ...");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = mongo;

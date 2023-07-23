const mongoose = require("mongoose");
const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://amank23:molBAobNk7CHQdE7@devconnector.il55c.mongodb.net/"
    )
    .then(() => {
      console.log("Successfully Connected");
    })
    .catch(() => {
      console.log("Something went wrong");
    });
};

module.exports = connectToDb;

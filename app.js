const geoCode = require("./utils/geoCode");
const getData = require("./utils/getData");

require("dotenv").config();
userInput = process.argv[2];

geoCode(userInput, (error, data) => {
  if (!userInput) {
    return console.log("Please enter a location");
  }
  if (error) return console.log(error);
  console.log(data);
  getData(data.latitude, data.longitude, data.location, (error, data) => {
    if (error) return console.log(error);
    console.log(data);
  });
});

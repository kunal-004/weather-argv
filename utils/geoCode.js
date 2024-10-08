const axios = require("axios");

const geoCode = async (address, callback) => {
  const { data, error } = await axios.get(
<<<<<<< HEAD
=======
  
>>>>>>> b2eeddc0abdf3b2680b4a0efa952868ee1a15c91
    `${process.env.API_BASE_URL1}?access_key=${
      process.env.API_ACCESS_KEY_GEOCODE
    }&query=${address}&limit=1`
  );

  if (error) {
    callback("Unable to load data", undefined);
  } else if (data.data.length === 0) {
    callback("No data found, check your input", undefined);
  } else {
    return callback(undefined, {
      latitude: data.data[0].latitude,
      longitude: data.data[0].longitude,
      location: data.data[0].name,
    });
  }
};

module.exports = geoCode;

const { default: axios } = require("axios");

const getData = async (lat, lng, name, callback) => {
  const { data, error } = await axios.get(
    //has data property , destructure it

    `${process.env.API_BASE_URL2}/${process.env.API_ACCESS_KEY_WEATHER}/${lat},${lng}?units=si&lang=`
  );
  const currentData = data.currently;
  if (error) {
    callback(error, "unble to connect weather network", undefined);
  } else if (data.statusCode === 400) {
    callback("Invalid Location Specification", undefined);
  } else {
    callback(
      undefined, //no error
      `Weather Forecast of ${name}:\n${data.daily.data[0].summary}\nIt is currently ${currentData.temperature} degrees now.\nThere is ${currentData.precipProbability}% of rain.`
    );
  }
};

module.exports = getData;

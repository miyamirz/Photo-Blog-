const axios = require("axios");
const fetchData = async apiEndPoint => {
  try {
    let response = await axios.get(apiEndPoint);
    let json = response.data;
    return json;
  } catch (e) {
    console.log(e);
  }
};
module.exports = fetchData;

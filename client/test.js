const axios = require("axios");
console.clear();
console.log("--------------------");
console.log("");

async function createFetch() {
  let response = await axios.get(
    "https://newsdata.io/api/1/news?apikey=pub_180089098407af05742bc64588e14bd077ab6&category=environment&language=en"
  );
  console.log("response", response.data);
  return response;
}
createFetch();

/**
 * Data Api List :
 * https://global-warming.org/api/temperature-api
 * https://global-warming.org/api/co2-api
 * https://global-warming.org/api/methane-api
 * https://global-warming.org/api/nitrous-oxide-api
 * https://global-warming.org/api/arctic-api
 * https://global-warming.org/api/ocean-warming-api
 * -----------------------------------------------------
 * Articles Api :
 * https://newsdata.io/api/1/news?apikey=pub_180089098407af05742bc64588e14bd077ab6&category=environment&language=en
 */

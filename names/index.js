const names = require("../country/state/city/index.js");
const getFirstName = require("../utilities/utils/index.js");
function getPeopleInCity(names) {
  return getFirstName(names);
}
module.exports = getPeopleInCity;

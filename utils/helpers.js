const moment = require("moment");

module.exports = {
  
  addDays: (date) => {
    let dateCopy = moment(date);
    //console.log(dateCopy);
    dateCopy = moment(dateCopy).format("MMM Do YY");
    //console.log(dateCopy);
    return dateCopy;
  }
};

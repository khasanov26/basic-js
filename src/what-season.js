const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // let prov = String(date);
  // prov = prov.split(',');
  // let year  = prov[0];
  // let monthh = prov[1] - 1;
  // let day   = prov[2];
  
  // let dateasd = new Date(year, monthh, day);
  
  // if (dateasd.getFullYear() == year && dateasd.getMonth() == monthh && dateasd.getDate() == day) {
  //    console.log('корректна');
  // } else {
  //    console.log('некорректна');
  //    return 'Invalid date!';
  // }




  let neww = new Date(date);
  console.log(neww);
  let month = neww.getMonth();
  month = month + 1;
  if(month == 1 || month == 2 || month == 12) {
    return "winter";
  }else if (month == 3 || month == 4 || month == 5) {
    return "spring";
  }else if (month == 6 || month == 7 || month == 8) {
    return "summer";
  }else if (month == 9 || month == 10 || month == 11) {
    return "autumn";
  }else if (date === undefined) {
     return 'Unable to determine the time of year!';
  }
}

module.exports = {
  getSeason
};

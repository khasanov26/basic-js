const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = [];
    for (let i = 0; members!= null && i < members.length; i++) {
      if(typeof(members[i]) !== "string" ) {
         continue;
      }else {
         members[i] = members[i].toUpperCase().trim();
         result.push(members[i][0]);
         // console.log(result);
      }
   }
   result = result.sort();
   result = result.join('');
   console.log(result);
   return result;
}

module.exports = {
  createDreamTeam
};

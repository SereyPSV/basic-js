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
  let rez = [];
  if ( members === null || members === undefined || members.length === 0 ) { return false }
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  for (let i = 0; i < members.length; i += 1) {
    if (typeof members[i] === 'string') {
      members[i] = members[i].trim();
      rez[i] = members[i][0].toUpperCase();
    }
  }
  return rez.sort().join('');
}

module.exports = {
  createDreamTeam
};

const isSecondLevelDomain = require('../index');

const dotCom = 'site.com';
console.log(dotCom + ' => ' + isSecondLevelDomain(dotCom));

const coUk = 'site.co.uk';
console.log(coUk + ' => ' + isSecondLevelDomain(coUk));

const tooShort = '.net';
console.log(tooShort + ' => ' + isSecondLevelDomain(tooShort));

const aLongOne = 'a.b.c.co.nz';
console.log(aLongOne + ' => ' + isSecondLevelDomain(aLongOne));

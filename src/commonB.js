const name = 'commonB';
const nameFromA = require('./commonA');
console.log('nameB: ', name);
console.log('A: ', nameFromA);

// 重新指向错误写法
// exports = {
//
// }

exports.nameB = name;

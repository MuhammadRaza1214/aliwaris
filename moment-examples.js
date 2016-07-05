var moment = require('moment');
var now = moment();



console.log(now.format());

now.subract(1,'year');
console.log(now.format());

console.log(now.format('h:mma'));// 6:45 pm;



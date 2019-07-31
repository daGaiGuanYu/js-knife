const knife = require('../index.js');

let a = [1,2,3,4];
let result = 0;
a.foreach( item => result += item );
console.log(result);
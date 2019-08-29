const knife = require('../index.js');

knife.oneTimeData.put('name', 1);
knife.oneTimeData.put('name', 2);
console.log(knife.oneTimeData.get('name'));
console.log(knife.oneTimeData.get('name'));

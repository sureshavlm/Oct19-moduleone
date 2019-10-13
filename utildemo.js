var util = require('util');
var os = require('os');

console.log("OS Platform ", os.platform());

console.log("**********************");

var str = "Congratulations %s on your %dth birthday";
var message = util.format(str, "David", 11);
console.log(message);





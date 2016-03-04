var ARDUINO = require('./arduino');


var temperature = new ARDUINO('/dev/i2c-1', 0x08);

temperature.sense(function(data) {
	console.log("      Temperature = " + tempData);
});

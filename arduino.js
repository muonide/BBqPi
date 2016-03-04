var i2c = require('i2c');
var sleep = require('sleep');
var wire;


var ARDUINO = function(device, address) {
    this.device = device;
    this.address = address;
    this.wire = new i2c(this.device);
}

//read in the accelerometer data and issue callback
ARDUINO.prototype.sense = function(callback) {
    
    //process received data
    this.wire.read(this.address, 1, function(err, data) {
        
        //populate output object
        var tempData = new Object();
        
        tempData = data;
        //tempData = parseInt(data[0]) * 256 + parseInt(data[1]);
     
        
        //call callback
        callback(accelData);
    });
}


module.exports = ARDUINO;
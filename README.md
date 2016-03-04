# BBqPi

BBqPi is an experiment in culinary observations facilitated by the Raspberry Pi Zero.  The Zero acts as a web-enabled datalogger for an Arduino mini with multiple thermistor probes. 

The Arduino takes care of sample averaging for the two thermistors and communicates the results to the Zero by i2c.
My protocol here is to wire 8 bytes to the Zero consisting of two 32-bit floats representing the temperature in the desired unit system. (Celsius by default)


const arduinoService = require("./arduino.service");

exports.turnOn = () => arduinoService.sendCommand("/lights/on");
exports.turnOff = () => arduinoService.sendCommand("/lights/off");

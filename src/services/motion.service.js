const arduinoService = require("./arduino.service");

exports.getMotion = () => arduinoService.sendCommand("/motion");

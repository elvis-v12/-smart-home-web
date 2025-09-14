const arduinoService = require("./arduino.service");

exports.getTemperature = () => arduinoService.sendCommand("/temp");

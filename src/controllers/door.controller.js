const arduinoService = require("../services/arduino.service");

exports.open = async (req, res) => {
  const result = await arduinoService.sendCommand("/door/open");
  res.json({ message: "🚪 Puerta abierta", result });
};

exports.close = async (req, res) => {
  const result = await arduinoService.sendCommand("/door/close");
  res.json({ message: "🚪 Puerta cerrada", result });
};

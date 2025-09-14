const lightsService = require("../services/lights.service");
const { notify } = require("../utils/notifir");

exports.turnOn = async (req, res) => {
  const result = await lightsService.turnOn();
  const message = notify("success", "Luces encendidas", result.status || "ok");
  res.json(message);
};

exports.turnOff = async (req, res) => {
  const result = await lightsService.turnOff();
  const message = notify("success", "Luces apagadas", result.status || "ok");
  res.json(message);
};

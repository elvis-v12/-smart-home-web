const tempService = require("../services/temp.service");
const { notify } = require("../utils/notifir");

exports.getTemp = async (req, res) => {
  const result = await tempService.getTemperature();
  const message = notify("info", "Lectura de temperatura", result.temp || "N/A");
  res.json({ ...message, value: result.temp || "N/A" });
};

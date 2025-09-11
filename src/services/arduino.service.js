const fetch = require("node-fetch");
const ARDUINO_IP = process.env.ARDUINO_IP || "http://192.168.1.100";

exports.sendCommand = async (path) => {
  try {
    const res = await fetch(`${ARDUINO_IP}${path}`);
    return await res.json();
  } catch (err) {
    return { error: "No se pudo comunicar con Arduino" };
  }
};

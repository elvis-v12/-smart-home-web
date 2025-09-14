const motionService = require("../services/motion.service");
const { notify } = require("../utils/notifir");

exports.getMotion = async (req, res) => {
  const result = await motionService.getMotion();
  const estado = result.motion ? "Detectado 🚨" : "Sin movimiento ✅";
  const message = notify("warn", "Movimiento", estado);
  res.json({ ...message, motion: result.motion });
};

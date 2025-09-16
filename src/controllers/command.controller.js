const { SerialPort } = require("serialport");
const port = new SerialPort({ path: "COM5", baudRate: 9600 });
const { classifier } = require("../classifier");

exports.command = async (req, res) => {
    const { text } = req.body;
    const cmd = classifier.classify(text);
    port.write(cmd + "\n");
    res.json({ status: "ok", command: cmd });
};
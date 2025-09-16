const { BayesClassifier } = require("natural");

const classifier = new BayesClassifier();

train = () => {
    classifier.addDocument("prende la luz de la habitacion", "room.light.on");
    classifier.addDocument("enciende la luz del cuarto", "room.light.on");
    classifier.addDocument("ilumina la habitacion", "room.light.on");
    classifier.addDocument("apaga la luz de la habitacion", "room.light.off");
    classifier.addDocument("quita la luz del dormitorio", "room.light.off");
    classifier.addDocument("ya no quiero luz en la habitacion", "room.light.off");
    classifier.addDocument("abre la puerta principal", "unknown");
    classifier.addDocument("sube el volumen de la música", "unknown");

    classifier.train();
}

module.exports = {
    train,
    classifier
};

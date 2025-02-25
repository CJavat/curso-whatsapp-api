const whatsappModel = require("../shared/whatsappModels");
const whatsappService = require("../services/whatsapp.service");

function process(textUser, number) {
  textUser = textUser.toLowerCase();
  let models = [];

  if (textUser.includes("hola")) {
    const model = whatsappModel.messageText(
      "Hola, ¿en qué puedo ayudarte?",
      number
    );
    models.push(model);
  } else if (textUser.includes("gracias")) {
    const model = whatsappModel.messageText(
      "Gracias a ti por contactarnos, estamos para servirte",
      number
    );
    models.push(model);
  } else if (
    textUser.includes("adios") ||
    textUser.includes("adiós") ||
    textUser.includes("bye") ||
    textUser.includes("me voy")
  ) {
    const model = whatsappModel.messageText(
      "Adiós, muchas gracias por contactarnos.",
      number
    );
    models.push(model);
  } else {
    const model = whatsappModel.messageText(
      "No estoy entendiendo lo que dices.",
      number
    );
    models.push(model);
  }

  models.forEach((model) => {
    whatsappService.sendMessageWhatsApp(model);
  });
}

module.exports = {
  process,
};

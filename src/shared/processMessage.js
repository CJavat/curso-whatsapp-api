const whatsappModel = require("../shared/whatsappModels");
const whatsappService = require("../services/whatsapp.service");
const chatgptService = require("../services/chatgpt.service");

async function process(textUser, number) {
  textUser = textUser.toLowerCase();
  let models = [];

  //#region SinChatGPT
  // if (textUser.includes("hola")) {
  //   const model = whatsappModel.messageText(
  //     "Hola, ¿en qué puedo ayudarte?",
  //     number
  //   );
  //   models.push(model);
  //   const modelList = whatsappModel.messageList(number);
  //   models.push(modelList);
  // } else if (textUser.includes("gracias")) {
  //   const model = whatsappModel.messageText(
  //     "Gracias a ti por contactarnos, estamos para servirte",
  //     number
  //   );
  //   models.push(model);
  // } else if (textUser.includes("comprar")) {
  //   const model = whatsappModel.messageButtons(number);
  //   models.push(model);
  // } else if (textUser.includes("vender")) {
  //   const model = whatsappModel.messageText(
  //     "Registrate en el siguiente formulario: https://www.miweb.com/formulario",
  //     number
  //   );
  //   models.push(model);
  // } else if (textUser.includes("agencia")) {
  //   const model = whatsappModel.messageLocation(number);
  //   models.push(model);
  // } else if (textUser.includes("contacto")) {
  //   const model = whatsappModel.messageText(
  //     "*Centro De Contacto:*\n +52 33 1213 5312",
  //     number
  //   );
  //   models.push(model);
  // } else if (
  //   textUser.includes("adios") ||
  //   textUser.includes("adiós") ||
  //   textUser.includes("bye") ||
  //   textUser.includes("me voy")
  // ) {
  //   const model = whatsappModel.messageText(
  //     "Adiós, muchas gracias por contactarnos.",
  //     number
  //   );
  //   models.push(model);
  // } else {
  //   const model = whatsappModel.messageText(
  //     "No estoy entendiendo lo que dices.",
  //     number
  //   );
  //   models.push(model);
  // }
  //#endregion

  //#region ConChatGPT
  const resultChatGpt = await chatgptService.getMessageChatGPT(textUser);

  if (resultChatGpt !== null) {
    const model = whatsappModel.messageText(resultChatGpt, number);

    models.push(model);
  } else {
    const model = whatsappModel.messageText(
      "No estoy entendiendo lo que dices.",
      number
    );
    models.push(model);
  }
  //#endregion

  models.forEach((model) => {
    whatsappService.sendMessageWhatsApp(model);
  });
}

module.exports = {
  process,
};

// const whatsappService = require("../services/whatsapp.service");
// const samples = require("../shared/sampleModels");
const processMessage = require("../shared/processMessage");

const verifyToken = (req, res) => {
  try {
    const accessToken = "ASHCSTOSasdasdasddwASDASDAS";
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (challenge != null && token != null && token == accessToken) {
      res.send(challenge);
    } else {
      res.status(400).send();
    }
  } catch (error) {
    res.status(400).send();
  }
};

const reciveMessage = (req, res) => {
  try {
    const entry = req.body["entry"][0];
    const changes = entry["changes"][0];
    const value = changes["value"];
    const messageObject = value["messages"];

    if (typeof messageObject != "undefined") {
      const messages = messageObject[0];
      const text = GetTextUser(messages);
      // const number = messages.from;
      const number = "523312135312";

      // myConsole.log(messageObject);
      console.log({ messageObject });
      console.log({ text });
      console.log({ number });

      if (text != "") {
        processMessage.process(text, number);
      }

      // if (text == "text") {
      //   const data = samples.sampleText("Hola usuario", "523312135312");
      //   whatsappService.sendMessageWhatsApp(data);
      // } else if (text == "image") {
      //   const data = samples.sampleImage("523312135312");
      //   whatsappService.sendMessageWhatsApp(data);
      // } else if (text == "video") {
      //   const data = samples.sampleVideo("523312135312");
      //   whatsappService.sendMessageWhatsApp(data);
      // } else if (text == "audio") {
      //   const data = samples.sampleAudio("523312135312");
      //   whatsappService.sendMessageWhatsApp(data);
      // } else if (text == "document") {
      //   const data = samples.sampleDocument("523312135312");
      //   whatsappService.sendMessageWhatsApp(data);
      // } else if (text == "button") {
      //   const data = samples.sampleButtons("523312135312");
      //   whatsappService.sendMessageWhatsApp(data);
      // } else if (text == "list") {
      //   const data = samples.sampleList("523312135312");
      //   whatsappService.sendMessageWhatsApp(data);
      // } else if (text == "location") {
      //   const data = samples.sampleLocation("523312135312");
      //   whatsappService.sendMessageWhatsApp(data);
      // } else {
      //   const data = samples.sampleText("No entiendo", "523312135312");
      //   whatsappService.sendMessageWhatsApp(data);
      // }
    }

    res.send("EVENT_RECEIVED");
  } catch (error) {
    console.log(error);
    res.send("EVENT_RECEIVED"); // Devolver este valor para que no haya bucle
  }
};

function GetTextUser(message) {
  let text = "";
  const typeMessage = message["type"].toLowerCase();

  if (typeMessage == "text") {
    text = message["text"]["body"];
  } else if (typeMessage == "interactive") {
    const interactiveObject = message["interactive"];
    const typeInteractive = interactiveObject["type"];

    console.log(interactiveObject);

    if (typeInteractive == "button_reply") {
      text = interactiveObject["button_reply"]["title"];
    } else if (typeInteractive == "list_reply") {
      text = interactiveObject["list_reply"]["title"];
    } else {
      console.log("Sin mensaje");
    }
  } else {
    console.log("Sin mensaje");
  }

  return text;
}

module.exports = {
  verifyToken,
  reciveMessage,
};

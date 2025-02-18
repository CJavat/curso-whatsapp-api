// const fs = require("fs");
// const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));

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
    const messages = messageObject[0];
    const text = GetTextUser(messages);

    // myConsole.log(messageObject);
    console.log({ messageObject });
    console.log({ text });

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

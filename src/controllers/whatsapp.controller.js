const verifyToken = (req, res) => {
  try {
    const accessToken = "ASHCSTOSasdasdasddwASDASDAS";
    const token = req.query("hub.verify_token");
    const challenge = req.query("hub.challenge");

    if (challenge !== null && token !== null && token == accessToken) {
      res.send(challenge);
    } else {
      res.status(400).send();
    }
  } catch (error) {
    res.status(400).send();
  }
};

const reciveMessage = (req, res) => {
  res.send("hola recive");
};

module.exports = {
  verifyToken,
  reciveMessage,
};

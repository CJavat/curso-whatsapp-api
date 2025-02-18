const verifyToken = (req, res) => {
  res.send("hola verifytoken");
};

const reciveMessage = (req, res) => {
  res.send("hola recive");
};

module.exports = {
  verifyToken,
  reciveMessage,
};

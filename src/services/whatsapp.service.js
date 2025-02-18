const https = require("https");

function sendMessageWhatsApp(data) {
  const options = {
    host: "graph.facebook.com",
    path: "/v22.0/610527172134311/messages",
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer EAAYT7fWncmIBO1lINm5EBGXg5cDZCD5Fs7UMTCBhDCTGqvfFOCcC7nZA7XZAzZCpZBD8CCMp8ZA6FultpGAT2SBmMLyTBL6x2yB20MomNItmNFulxiFzcD2ZBR146GMVaXN6BZBrkoNugY8QiDhdlOGOeHdifwEyyDbCu8Md393FfIV6iUZCZAu9YZAMl7ZAQobho1T41QZDZD",
    },
  };

  const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.on("error", (error) => {
    console.error(`Error: ${error.message}`);
  });

  req.write(data);
  req.end();
}

module.exports = { sendMessageWhatsApp };

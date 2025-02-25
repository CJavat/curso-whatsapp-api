function messageText(textResponse, number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    text: {
      body: textResponse,
    },
    type: "text",
  });

  return data;
}

function messageList(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "interactive",
    interactive: {
      type: "list",
      body: {
        text: "Tengo estás opciones",
      },
      footer: {
        text: "Selecciona una de las opcione spara poder atenderte",
      },
      action: {
        button: "Ver Opciones",
        sections: [
          {
            title: "Compra y vende productos",
            rows: [
              {
                id: "main-comprar",
                title: "Comprar",
                description: "Encuentra y compra productos en línea",
              },
              {
                id: "main-vender",
                title: "Vender",
                description: "Vende tus productos",
              },
            ],
          },
          {
            title: "Centro de atención",
            rows: [
              {
                id: "main-agencia",
                title: "Agencia",
                description: "Visita nuestra agencia",
              },
              {
                id: "main-contacto",
                title: "Centro de contacto",
                description: "Te atenderá uno de nuestros agentes",
              },
            ],
          },
        ],
      },
    },
  });

  return data;
}

function messageButtons(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: "Selecciona uno de los productos",
      },
      action: {
        buttons: [
          {
            type: "reply",
            reply: {
              id: "option-laptop",
              title: "Laptop",
            },
          },
          {
            type: "reply",
            reply: {
              id: "option-computadora",
              title: "Computadora",
            },
          },
        ],
      },
    },
  });

  return data;
}

module.exports = {
  messageText,
  messageList,
  messageButtons,
};

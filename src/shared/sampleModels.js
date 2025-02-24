function sampleText(textResponse, number) {
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

function sampleImage(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "image",
    image: {
      link: "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/image_whatsapp.png",
    },
  });

  return data;
}

function sampleAudio(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "audio",
    audio: {
      link: "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3",
    },
  });

  return data;
}

function sampleVideo(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "video",
    video: {
      link: "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4",
    },
  });

  return data;
}

function sampleDocument(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "document",
    document: {
      link: "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf",
      caption: "Titulo del documento",
    },
  });

  return data;
}

function sampleButtons(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: "¿Confirmas tu registro?",
      },
      action: {
        buttons: [
          {
            type: "reply",
            reply: {
              id: "001",
              title: "Sí😊",
            },
          },
          {
            type: "reply",
            reply: {
              id: "002",
              title: "No😭",
            },
          },
        ],
      },
    },
  });

  return data;
}

function sampleList(number) {
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

function sampleLocation(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "location",
    location: {
      latitude: "20.65470712621329",
      longitude: "-103.35296001890289",
      name: "HORTOMALLAS®",
      address:
        "Cardenal 26-Interior 9, Rincón de La Agua Azul, 44467 Guadalajara, Jal.",
    },
  });

  return data;
}

module.exports = {
  sampleText,
  sampleImage,
  sampleAudio,
  sampleVideo,
  sampleDocument,
  sampleButtons,
  sampleList,
  sampleLocation,
};

const OpenAI = require("openai");

async function getMessageChatGPT(text) {
  try {
    // Inicializa el cliente de OpenAI
    const openai = new OpenAI({
      apiKey: process.env.CHATGPT_KEY, // Asegúrate de que esta variable esté configurada correctamente
    });

    // Envía la solicitud a la API
    const response = await openai.chat.completions.create({
      model: "gpt-4", // Usa "gpt-4" o "gpt-3.5-turbo"
      messages: [
        { role: "user", content: text }, // El mensaje del usuario
      ],
      max_tokens: 100, // Límite de tokens
    });

    // Verificar si la respuesta es válida y contiene opciones
    if (response.choices && response.choices.length > 0) {
      console.log(response.choices[0].message.content); // Muestra el texto generado por ChatGPT
      return response.choices[0].message.content.trim();
    } else {
      console.error("No se recibieron respuestas válidas de la API.");
      return null; // Si no hay resultados, devuelve null
    }
  } catch (error) {
    console.error("Error al interactuar con la API de OpenAI:", error);
    return null; // Si ocurre un error, devuelve null
  }
}

module.exports = {
  getMessageChatGPT,
};

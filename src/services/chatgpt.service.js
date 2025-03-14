const { Configuration, OpenAIApi } = require("openai");

async function getMessageChatGPT(text) {
  const configuration = new Configuration({
    apiKey: process.env.CHATGPT_SECRET,
  });

  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: text,
    maxTokens: 100,
  });

  if (response.status === 200 && response.data.choices.length > 0) {
    return response.data.choices[0].text.trim();
  }

  return null;
}

module.exports = {
  getMessageChatGPT,
};

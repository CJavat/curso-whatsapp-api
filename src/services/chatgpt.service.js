const { Configuration, OpenAIApi } = require("openai");

async function getMessageChatGPT(text) {
  const configuration = new Configuration({
    apiKey:
      "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",
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

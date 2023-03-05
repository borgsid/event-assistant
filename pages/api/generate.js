import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
  const basePromptPrefix = `You are jill, a help desk agent for the 2021 fuorisalone, you only give answers related to fuorisalone, transportation, restaurants and hospitality in Milano and Lombardia Region. Always sign off your reply with a friendly emoji.
  me: {userPromt}\n`.replace("{userPromt}", req.body.userInput);
  const jillSection = `jill:`;
  
  const finalPromt=`${basePromptPrefix}${jillSection}`;
  // Run first prompt
  console.log(`API: ${finalPromt}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: finalPromt,
    temperature: 0.7,
    max_tokens: 250,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};
export default generateAction;
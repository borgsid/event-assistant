import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const configurationCurie = new Configuration({
  apiKey: process.env.OPENAI_API_KEY_Curie,
});

const openai = new OpenAIApi(configuration);
const openaiCurie = new OpenAIApi(configurationCurie);
const tg_dict={
  'Furniture': 'Fu',
  'Kitchen': 'Ki',
  'Exteriors': 'Ex',
  'Installations': 'In',
  'Sustainability': 'Su',
  'Art': 'Ar',
  'Lighting': 'Li',
  'Product Design': 'Pr',
  'Architecture': 'Ar',
  'Graphic Design': 'Gr',
  'Party': 'Pa',
  'Selected': 'Se',
  'Mention': 'Me',
  'Bathroom': 'Ba',
  'Special materials': 'Sp',
  'Technology': 'Te'
}
const generateAction = async (req, res) => {
  const basePromptPrefix = `:${req.body.userInput} ->`;
  const curieRespose = await openaiCurie.createCompletion({
    model: 'curie:ft-personal-2023-03-07-19-29-49',
    prompt: `${basePromptPrefix} ->` ,
    temperature: 0,
    max_tokens: 1000,
    top_p: 1,
    frequency_penalty: 2,
    presence_penalty: 1,
  });
  const finalPromt=`${basePromptPrefix}`;
  console.log(`API: ${finalPromt}`)

  res.status(200).json({ output: curieRespose.data.choices.pop() });
};
export default generateAction;
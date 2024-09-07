import type { PlasmoMessaging } from '@plasmohq/messaging';

const handler: PlasmoMessaging.MessageHandler = async (_req, res) => {
  console.log('request');
  const swapiResponse = await fetch('https://swapi.dev/api/people/1');
  const responseBody = await swapiResponse.json();

  res.send(responseBody);
};

export default handler;

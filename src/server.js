import { create } from 'venom-bot';
import { stages, getStage } from './stages.js';

create({
    session: 'store',
    multidevice: true,
    headless: false,
  })
  .then((client) => start(client))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


function start(client) {
    client.onMessage((message) => {
      // console.log(message, "mensagem")
      if (!message.isGroupMsg ) {
          const currentStage = getStage({ from: message.from });
          const messageResponse = stages[currentStage].stage.exec({
            from: message.from,
            message: message.body,
            client,
            data: message
          });
  
          if (messageResponse) {
            client.sendText(message.from, messageResponse).then((res) => {
              console.log(res, ' Message sent.');
            }).catch(error => console.error('Error when sending message', error));
          }
      }
    });
};
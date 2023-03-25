import { menu } from '../menu.js';
import { storage } from '../storage.js';
import { neighborhoods } from './neighborhoods.js';

export const stageOne = {
  exec({ from, message, client }) {
    if (message === '1') {
      let msg = '🚨  CARDÁPIO  🚨\n\n';

      Object.keys(menu).map((value) => {
        const element = menu[value];
        if (value === '1') {
          msg += `1️⃣ - _${element.description}_ Valor: R$: ${element.price},00 \n`;
        } else if (value === '2') {
          msg += `2️⃣ - _${element.description}_ Valor: R$: ${element.price},00 \n`;
        } else if (value === '3') {
          msg += `3️⃣ - _${element.description}_ Valor: R$: ${element.price},00 \n`;
        } else if (value === '4') {
          msg += `4️⃣ - _${element.description}_ Valor: R$: ${element.price},00 \n`;
        } else if (value === '5') {
          msg += `5️⃣ - _${element.description}_ Valor: R$: ${element.price},00 \n`;
        } else if (value === '6') {
          msg += `6️⃣ - _${element.description}_ Valor: R$: ${element.price},00 \n`;
        } else if (value === '7') {
          msg += `7️⃣ - _${element.description}_ Valor: R$: ${element.price},00 \n`;
        } else if (value === '8') {
          msg += `8️⃣ - _${element.description}_ Valor: R$: ${element.price},00 \n`;
        } else if (value === '9') {
          msg += `9️⃣ - _${element.description}_ Valor: R$: ${element.price},00 \n`;
        } else if (value === '10') {
          msg += `🔟 - _${element.description}_ Valor: R$: ${element.price},00 \n`;
        } else if (value === '11') {
          msg += `1️⃣1️⃣ - _${element.description}_ Valor: R$: ${element.price},00 \n`;
        } else if (value === '12') {
          msg += `1️⃣2️⃣ - _${element.description}_ Valor: R$: ${element.price},00 \n`;
        }
      });

      msg +=
        '\nDigite o número correspondente à coalhada que deseja pedir. Caso queira voltar para as opções iniciais, digite 0.\n\n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️\n*Digite OPÇÃO referente ao produto ao qual deseja pedir:*';
      storage[from].stage = 2;

      return msg;
    } else if (message === '2') {
      return (
        '\n-----------------------------------\n1️⃣ - ```FAZER PEDIDO``` \n0️⃣ - ```FALAR COM ATENDENTE```\n\n' +
        '\n-----------------------------------\n1️⃣ - ```FAZER PEDIDO``` \n0️⃣ - ```FALAR COM ATENDENTE``` '
      );
    } else if (message === '0') {
      client.markUnseenMessage(from);

      storage[from].stage = 5;

      return '🔃 Encaminhando você para um atendente. \n⏳ *Aguarde um instante*.';
    }

    return '❌ *Digite uma opção válida, por favor.* \n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️';
  },
};

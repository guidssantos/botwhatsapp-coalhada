import { menu } from '../menu.js';
import { storage } from '../storage.js';

export const stageTwo = {
  exec({ from, message }) {
    const order =
      '\n-----------------------------------\n#️⃣ - ```FINALIZAR pedido``` \n*️⃣ - ```CANCELAR pedido```';
    if (message === '*') {
      storage[from].stage = 0;
      storage[from].itens = [];

      return '🔴 Pedido *CANCELADO* com sucesso. \n\n ```Volte Sempre!```';
    } else if (message === '#') {
      storage[from].stage = 4;

       let desserts = '';
    const itens = storage[from].itens;
    const soma = itens.reduce((acumulado, valorAtual) => acumulado?.price + valorAtual?.price);
    itens.map((item, index) => {

      if (index == itens.length - 1) {
        desserts += item?.description + '.';
      } else {
        desserts += item?.description + ', ';
      }
    });
    const total = storage[from].itens.length;


    return(
      `🗒️ *RESUMO DO PEDIDO*: \n\n🧁 Sabores: *${desserts}*  \n💰 Valor das coalhadas: *${
       itens.length == 1 ? itens[0].price : soma
      },00 reais*. \n` +
        '🔊 Agora, digite o numero correspondente a forma de pagamento \n 1 - PIX 2 - Cartão de Credito'
    );

    } else if (message === "0"){
      storage[from].stage = 0;
      storage[from].itens = [];

      return (
        `Você voltou para o inicio do atendimento.`
      )
    } else {
      if (!menu[message]) {
        return `❌ *Código inválido, digite novamente!* \n\n ${order}`;
      }
    }

    storage[from].itens.push(menu[message]);

    let desserts = '';
    const itens = storage[from].itens;
    itens.map((item, index) => {
      if (index == itens.length - 1) {
        desserts += item.description + '.';
      } else {
        desserts += item.description + ', ';
      }
    });

    return (
      `✅ *${menu[message].description}* adicionado com sucesso! \n\n` +
      `Digite outra opção: 
${desserts}
      \n` +
      order
    );
  },
};

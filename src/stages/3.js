import { storage } from '../storage.js';

export const stageThree = {
  async exec({ from, message, client }) {

    if (message === '*') {
      storage[from].stage = 0;
      return 'Pedido *CANCELADO* com sucesso. \n Volte Sempre!';
    }

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

    // return(
    //   `🗒️ *RESUMO DO PEDIDO*: \n\n🧁 Sabores: *${desserts}*  \n💰 Valor dos bolos: *${
    //     soma
    //   },00 reais*. \n` +
    //     '🔊 Agora, informe a forma de pagamento e se vai precisar de troco, por gentileza.'
    // );

    if (message !== '*'){
    storage[from].stage = 4;
    }

    return '✅ *Prontinho, pedido feito!* \n\nAgora, se você ainda não sabe o valor da taxa de entrega para sua região, vou te passar para um atendente para que ele verique o valor da *taxa de entrega*. \n\n⏳ *Aguarde um instante*.';
  },
};

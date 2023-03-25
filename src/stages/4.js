import { storage } from '../storage.js';

export const stageFour = {
  exec({ from, message }) {
    const phone = from.split('@');

    let desserts = '';
    const itens = storage[from].itens;
    const soma = itens.reduce((acumulado, valorAtual) => acumulado.price + valorAtual.price);
    itens.map((item, index) => {
      if (index == itens.length - 1) {
        desserts += item.description + '.';
      } else {
        desserts += item.description + ', ';
      }
    });

   console.log(message, "MENSAGEM BRABA")

   let payment = ''

   if(message == 1){
    storage[from].stage = 0;
    storage[from].itens = [];

    payment = "Pix"
   } else if (message == 2){
    storage[from].stage = 0;
    storage[from].itens = [];

    payment = 'Cartão de credito'
   }else if (message !== 1 || message !== 2) {
        return `❌ *Código inválido, digite novamente!*`
      }


    

    return `🔔 *NOVO PEDIDO* 🔔: 
    📞 Cliente: +${
      phone[0]
    } 
    🧁 Sabores: *${desserts}* 
    💰 Valor das coalhadas: *${
      itens.length == 1 ? itens[0].price : soma
    },00 reais*. 
    🛑 Detalhes: *${payment}*`;
  },
};

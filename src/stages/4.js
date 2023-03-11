import { storage } from '../storage.js';

export const stageFour = {
  exec({ from, message }) {
    const address = storage[from].address;
    const phone = from.split('@');

    storage[from].stage = 5;
    let desserts = '';
    const itens = storage[from].itens;
    itens.map((item, index) => {
      if (index == itens.length - 1) {
        desserts += item.description + '.';
      } else {
        desserts += item.description + ', ';
      }
    });
    const total = storage[from].itens.length;

    return `🔔 *NOVO PEDIDO* 🔔: 
    📞 Cliente: +${
      phone[0]
    } 
    🧁 Sabores: *${desserts}* 
    📍 Endereço: *${address}* 
    🚚 Taxa de entrega: *a confirmar*. 
    💰 Valor das coalhadas: *${
      total * 6
    },00 reais*. 
    ⏳ Tempo de entrega: *50 minutos*. 
    🛑 Detalhes: *${message}*`;
  },
};

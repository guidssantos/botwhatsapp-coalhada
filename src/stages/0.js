import { storage } from '../storage.js';

  
export const initialStage = {
  exec({ from, message, data, client }) {
  let now = new Date();
  let hours = now.getHours();

   if (hours >= 18 && hours < 24) {
    let time = "Boa noite";
  } else if (hours >= 12 && hours < 18) {
    let time = "Boa tarde";
  } else if (hours >= 0 && hours < 12) {
    let time = "Bom dia";
  }

    storage[from].stage = 1;
    console.log(client, "teste")
    console.log(data.chatId, "data")
    return message === "oi" && 
      `👋 Olá! Bem-vindo(a) à Coalhadas da Nutri! Como posso ajudá-lo hoje? Por favor, escolha uma das opções abaixo: 🙋‍♂️ 
    1️⃣ - Cardápio
    2️⃣ - Realizar pedidos
    Digite o número correspondente à sua escolha para continuar.`
    
  },
};

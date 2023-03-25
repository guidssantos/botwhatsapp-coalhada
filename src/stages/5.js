/**
 * The client is connection ended here. In 60 seconds, it'll closed.
 */

import { storage } from '../storage.js';


export const finalStage = {
  exec({ from }) {
    setTimeout(() => {
      storage[from].stage = 0;
    },'60000')
      storage[from].itens = [];
      
    return
  },
};

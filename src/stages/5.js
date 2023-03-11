/**
 * The client is connection ended here. In 60 seconds, it'll closed.
 */
export const finalStage = {
  exec({ from, client }) {
      storage[from].stage = 0;
      storage[from].itens = [];
    return
  },
};

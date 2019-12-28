const transbank = require('transbank-sdk-node');

export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$tbk', { value: transbank });
  },
};

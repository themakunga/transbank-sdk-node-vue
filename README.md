Transbank nodejs Vue plugin
---


How to add to your project:


**NPM**
```bash
npm install transbank-sdk-node-vue
```

**YARN**

```bash
yarn add transbank-sdk-node-vue
```

In your `main.js` file *usually in the src folder* add the next lines

```javascript
import transbank from 'transbank-sdk-node-vue';

Vue.use(transbank);
```


How tho use:

now you can simply use the global scope `this.$tbk` to call the plugin.

**example:**
```javascript
const result = this.$tbk.webpayPlus.transaction.create(requestObject, optionsObject);
```


If you are having problems to methods works in dev environments you just need to add the proxy attribute to your optionsObject, also is mandatory to proxy the connection to transbank server

**example**
```javascript
const optionsObject = {
  commerceCode: '597055555532',
  apiKey: '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C',
  test: true,
  proxy: '/tbk',
};
```

*vue.config.js*
```javascript
module.exports = {
  devServer: {
    proxy: {
      '/tbk': {
        target: 'https://webpay3gint.transbank.cl/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/tbk': '',
        },
      },
    },
  },
};
```


for the rest of docs please refer to the [unofficial documentation](https://github.com/themakunga/transbank-sdk-node/tree/master/docs)

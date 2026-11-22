## Transbank nodejs Vue plugin

![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white)

_Soon there will be a nuxt version_

How to add to your project:

**NPM**

```bash
npm install transbank-sdk-node-vue
```

**YARN**

```bash
yarn add transbank-sdk-node-vue
```

In your `main.js` file _usually in the src folder_ add the next lines

```javascript
import transbank from "transbank-sdk-node-vue";

Vue.use(transbank);
```

How tho use:

now you can simply use the global scope `this.$tbk` to call the plugin.

**example:**

```javascript
const result = this.$tbk.webpayPlus.transaction.create(
  requestObject,
  optionsObject,
);
```

If you are having problems to methods works in dev environments you just need to add the proxy attribute to your optionsObject, also is mandatory to proxy the connection to transbank server

**example**

```javascript
const optionsObject = {
  commerceCode: "597055555532",
  apiKey: "YOUR_INTEGRATION_API_KEY",
  test: true,
  proxy: "/tbk",
};
```

_vue.config.js_

```javascript
module.exports = {
  devServer: {
    proxy: {
      "/tbk": {
        target: "https://webpay3gint.transbank.cl/",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/tbk": "",
        },
      },
    },
  },
};
```

for the rest of docs please refer to the [unofficial documentation](https://github.com/themakunga/transbank-sdk-nodejs#readme)

## Repository reference

| Path                           | Purpose                      |
| ------------------------------ | ---------------------------- |
| [`index.js`](index.js)         | Project reference            |
| [`package.json`](package.json) | Package metadata and scripts |

The default branch is `master`. Use the tracked manifests and scripts above
when preparing changes; keep local credentials and generated files out of commits.

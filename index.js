const { resolve } = require('path');

module.exports = (opts) => ({
    define() {
        return {
            PLUGIN_CONFIG: opts.plugin,
            BBTALK_CONFIG: opts.bbtalk,
        };
    },
    name: 'vuepress-plugin-bbtalk',
    enhanceAppFiles: resolve(__dirname, './src/enhanceApp.js'),
});

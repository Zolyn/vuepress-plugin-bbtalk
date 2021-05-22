const { resolve } = require('path');

module.exports = (opts) => ({
    define() {
        return {
            ZOLYN_BBTALK_PLUGIN_CONFIG: opts.plugin || {},
            ZOLYN_BBTALK_MAIN_CONFIG: opts.bbtalk,
        };
    },
    name: 'vuepress-plugin-bbtalk',
    enhanceAppFiles: resolve(__dirname, './src/enhanceApp.js'),
});

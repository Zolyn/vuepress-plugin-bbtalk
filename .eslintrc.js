module.exports = {
    extends: ['alloy', 'alloy/vue'],
    env: {},
    globals: {
        bbtalk: true,
        ZOLYN_BBTALK_PLUGIN_CONFIG: true,
        ZOLYN_BBTALK_MAIN_CONFIG: true,
    },
    rules: {
        'vue/component-tags-order': [
            'error',
            {
                order: [['template', 'script'], 'style'],
            },
        ],
    },
};

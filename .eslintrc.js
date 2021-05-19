module.exports = {
    extends: ['alloy', 'alloy/vue'],
    env: {},
    globals: {
        bbtalk: true,
        PLUGIN_CONFIG: true,
        BBTALK_CONFIG: true,
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

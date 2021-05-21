<template>
    <div id="vuepress-plugin-bbtalk"></div>
</template>

<script>
const bbtalkVersion = '0.1.6';

export default {
    data() {
        return {
            pNode: PLUGIN_CONFIG.parentNode || '.theme-content',
            bbtalkConfig: BBTALK_CONFIG,
        };
    },
    mounted() {
        this.$nextTick(() => {
            const bbtalkScript = document.createElement('script');
            bbtalkScript.src = `https://cdn.jsdelivr.net/npm/bbtalk@${bbtalkVersion}/dist/bbtalk.min.js`;
            document.body.appendChild(bbtalkScript);
            this.initBBTalk();
        });
    },
    methods: {
        initBBTalk() {
            const bbtalkContainer = document.createElement('div');
            const el = this.bbtalkConfig.el;
            bbtalkContainer.id = el.slice(1, el.length);
            document.querySelector(this.pNode).appendChild(bbtalkContainer);
            this.$nextTick(() => {
                bbtalk.init({ ...this.bbtalkConfig });
            });
        },
    },
};
</script>

<style scoped></style>

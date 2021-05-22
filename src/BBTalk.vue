<template>
    <div id="vuepress-plugin-bbtalk" :status="status"></div>
</template>

<script>
const bbtalkVersion = '0.1.6';

export default {
    data() {
        return {
            status: 'initializing',
            pNode: ZOLYN_BBTALK_PLUGIN_CONFIG.parentNode || '.theme-content',
            shouldDebug: ZOLYN_BBTALK_PLUGIN_CONFIG.debug || false,
            bbtalkConfig: ZOLYN_BBTALK_MAIN_CONFIG,
        };
    },
    mounted() {
        this.$nextTick(() => {
            const bbtalkScript = document.createElement('script');
            bbtalkScript.src = `https://cdn.jsdelivr.net/npm/bbtalk@${bbtalkVersion}/dist/bbtalk.js`;
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
            const intervalID = setInterval(() => {
                if (bbtalk) {
                    clearInterval(intervalID);
                    bbtalk.init({ ...this.bbtalkConfig });
                    this.status = 'initialized';
                    if (this.shouldDebug) {
                        console.log('DEBUG: BBTalk initialized.');
                    }
                }
            }, 1000);
        },
    },
};
</script>

<style scoped></style>

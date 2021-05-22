import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app, $config }, inject) => {
    Vue.use(VueGtag, {
        config: { id: $config.gtagId },
        bootstrap: true,
        appName: 'youtube-clone',
        enabled: true,
        pageTrackerScreenviewEnabled: true
    }, app.router)
}

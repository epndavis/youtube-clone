import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }, inject) => {
    const config = <%= JSON.stringify(options, null, 2) %>

    Vue.use(VueGtag, {
        config,
        bootstrap: true,
        appName: 'youtube-clone',
        enabled: true,
        pageTrackerScreenviewEnabled: true
    }, app.router)
}

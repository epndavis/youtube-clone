const { resolve } = require('path')

function analyticsModule(moduleOptions) {
    const options = {
        ...this.options['g-tag'],
        ...this.options.gTag,
        ...moduleOptions
    }

    this.addPlugin({
        src: resolve(__dirname, '../plugins/analytics.js'),
        fileName: 'google-analytics.js',
        options,
        mode: 'client'
    })
}

module.exports = analyticsModule

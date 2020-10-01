import Vue from 'vue'

function pad (number, size) {
    let s = String(number)
    while (s.length < (size || 2)) {
        s = '0' + s
    }

    return s
}

Vue.filter('formatTime', (durationInSeconds) => {
    if (typeof durationInSeconds === 'undefined' || durationInSeconds == null) {
        durationInSeconds = 0
    }

    const durationInMinutes = Math.floor(durationInSeconds) / 60
    const per = durationInMinutes % 1

    return `${Math.floor(durationInMinutes)}:${pad(Math.round(per * 60), 2)}`
})

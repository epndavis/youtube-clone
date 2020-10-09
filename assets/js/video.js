import { mergeWith } from 'lodash'

export default class Video {
    constructor ($el, defaults = {}) {
        this.defaults = mergeWith({
            volume: $el.volume,
            currentTime: $el.currentTime,
            onPlay () {}
        }, defaults, function (oldValue, newValue) {
            if (newValue === null) {
                return oldValue
            }
        })

        this.$el = $el
        this.loaded = $el.duration > 0
        this.currentTime = $el.currentTime = this.defaults.currentTime
        this.duration = $el.duration
        this.paused = this.$el.paused
        this.ended = false
        this.buffered = 0
        this.muted = this.$el.muted
        this.volume = this.$el.volume = +this.defaults.volume

        const self = this

        this.onLoadedMetaData = function () {
            self.loaded = true
            self.duration = this.duration
            self.play()
        }

        this.onProgress = function () {
            if (this.buffered.length > 0) {
                self.buffered = this.buffered.end(0)
            } else {
                self.buffered = 0
            }
        }

        this.onTimeUpdate = function () {
            self.currentTime = this.currentTime
        }

        this.onPause = function () {
            self.paused = true
            self.defaults.onPlaybackChange(self)
        }

        this.onEnded = function () {
            self.ended = true
            self.defaults.onPlaybackChange(self)
        }

        this.onVolumeChange = function () {
            self.muted = this.muted
            self.volume = this.volume
        }

        this.$el.addEventListener('loadedmetadata', this.onLoadedMetaData)
        this.$el.addEventListener('progress', this.onProgress)
        this.$el.addEventListener('timeupdate', this.onTimeUpdate)
        this.$el.addEventListener('pause', this.onPause)
        this.$el.addEventListener('ended', this.onEnded)
        this.$el.addEventListener('volumechange', this.onVolumeChange)
    }

    play () {
        return this.$el.play().then(() => {
            this.paused = false
            this.ended = false

            this.defaults.onPlaybackChange(this)
        })
    }

    pause () {
        return this.$el.pause()
    }

    toggle () {
        if (this.paused) {
            return this.play()
        }

        return this.pause()
    }

    replay () {
        return this.jumpTo(0).play()
    }

    fullscreen () {
        const vid = this.$el
        if (vid.requestFullscreen) {
            vid.requestFullscreen()
        } else if (vid.mozRequestFullScreen) {
            vid.mozRequestFullScreen()
        } else if (vid.webkitRequestFullscreen) {
            vid.webkitRequestFullscreen()
        } else if (vid.msRequestFullscreen) {
            vid.msRequestFullscreen()
        }

        return vid
    }

    pictureInPicture () {
        return this.$el.requestPictureInPicture()
    }

    jumpTo (time) {
        this.$el.currentTime = time

        if (time < this.duration) {
            this.ended = false
        }

        return this
    }

    destroy () {
        this.$el.removeEventListener('loadedmetadata', this.onLoadedMetaData)
        this.$el.removeEventListener('progress', this.onProgress)
        this.$el.removeEventListener('timeupdate', this.onTimeUpdate)
        this.$el.removeEventListener('pause', this.onPause)
        this.$el.removeEventListener('ended', this.onEnded)
        this.$el.removeEventListener('volumechange', this.onVolumeChange)
    }
}

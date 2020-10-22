<template>
    <div class="relative bg-black" :class="{ 'mb-5': !inTheater, 'cursor-none': !showControls }" @mousemove="timeControls">
        <video id="video_player" class="m-auto" :src="video.src" controlsList="nodownload" style="max-height: 80vh" />

        <div v-if="loaded" class="absolute inset-0">
            <div class="transition-opacity duration-100 bg-gradient-to-t w-full absolute bottom-0 from-black top-1/2" :class="[ !showControls ? 'opacity-0': 'opacity-100' ]" />

            <div class="absolute inset-0 flex justify-center items-center" @click="toggleInterfacePlay()">
                <div v-show="playInterface" class="rounded-full h-16 w-16 text-white bg-gray-900 bg-opacity-50 player-btn">
                    <svg v-if="!player.paused && !player.ended" class="h-full w-full fill-current" viewBox="0 0 36 36">
                        <path d="M12 26l6.5-4v-8L12 10zm6.5-4l6.5-4-6.5-4z" />
                    </svg>

                    <svg v-else class="h-full w-full fill-current" viewBox="0 0 36 36">
                        <path d="M12 26h4V10h-4zm9 0h4V10h-4z" />
                    </svg>
                </div>
            </div>

            <div class="transition-opacity duration-100 text-white absolute bottom-0 w-full px-3 flex flex-wrap" :class="[ !showControls ? 'opacity-0': 'opacity-100' ]">
                <div
                    ref="player-slider"
                    class="w-full relative group cursor-pointer pt-3 pb-2 -mb-2 z-10"
                    @mousemove="setSeeking"
                    @mouseover="setSeeking"
                    @mouseout="endSeeking"
                    @mousedown="draggingTime"
                >
                    <div class="w-full bg-gray-600 h-1 transform scale-y-50 group-hover:scale-y-100 bg-opacity-75" :class="{ 'scale-y-100': dragging }">
                        <progress-bar :scale="buffered" class="bg-gray-400 absolute bg-opacity-50" />

                        <progress-bar :scale="seeking" class="bg-gray-300 absolute bg-opacity-50" />

                        <progress-bar :scale="progress" class="bg-red-600 absolute" />

                        <div
                            class="absolute h-3 w-3 group-hover:block bg-red-600 rounded-full -ml-1 -mt-1"
                            :style="{ left: `${progress * 100}%` }"
                            :class="{ 'hidden': !dragging }"
                        />
                    </div>
                </div>

                <div class="w-full h-10">
                    <div class="h-full left-control float-left flex items-center">
                        <button class="h-full w-10" @click="togglePlay()">
                            <svg v-show="player.paused && !player.ended" class="h-full w-full fill-current" viewBox="0 0 36 36">
                                <path d="M12 26l6.5-4v-8L12 10zm6.5-4l6.5-4-6.5-4z" />
                            </svg>

                            <svg v-show="!player.paused && !player.ended" class="h-full w-full fill-current" viewBox="0 0 36 36">
                                <path d="M12 26h4V10h-4zm9 0h4V10h-4z" />
                            </svg>

                            <svg v-show="player.ended" class="h-full w-full fill-current" viewBox="0 0 36 36">
                                <path d="M18 11V7l-5 5 5 5v-4c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6h-2c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8z" />
                            </svg>
                        </button>

                        <router-link v-if="next" :to="next" class="h-full w-10">
                            <svg class="h-full w-full fill-current" viewBox="0 0 36 36">
                                <path d="M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z" />
                            </svg>
                        </router-link>

                        <div class="h-full flex items-center group">
                            <button class="h-full w-10" @click="toggleMute()">
                                <svg class="w-full h-full fill-current" viewBox="0 0 36 36">
                                    <path d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z" />

                                    <path v-show="player.muted || volume > 0.5 || volume == 0" d="M19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z" />

                                    <path v-show="player.muted || volume == 0" d="M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z" />
                                </svg>
                            </button>

                            <div ref="volume-slider" class="w-12 mr-4 py-2 relative cursor-pointer hidden group-hover:block" @mousedown="volumeChange">
                                <div class="w-full h-1 bg-gray-500">
                                    <progress-bar :scale="volume" class="bg-white" />

                                    <div class="absolute h-3 w-3 bg-white rounded-full -ml-1 -mt-2" :style="{ left: `${volume * 100}%` }" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <span class="text-sm">{{ currentTime | formatTime }} / {{ video.duration | formatTime }}</span>
                        </div>
                    </div>

                    <div class="h-full right-control float-right">
                        <button class="h-full w-10" @click="toggleTheater()">
                            <svg class="h-full w-full fill-current" viewBox="0 0 36 36">
                                <path v-show="!inTheater" d="m 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z" fill-rule="evenodd" />

                                <path v-show="inTheater" d="m 26,13 0,10 -16,0 0,-10 z m -14,2 12,0 0,6 -12,0 0,-6 z" fill-rule="evenodd" />
                            </svg>
                        </button>

                        <button class="h-full w-10">
                            <svg class="w-full h-full fill-current" viewBox="0 0 36 36">
                                <path d="M10 10 L16 10 L16 12 L12 12 L12 16 L10 16z M26 10 L26 16 L24 16 L24 12 L20 12 L20 10z M10 26 L10 20 L12 20 L12 24 L16 24 L16 26z M26 26 L26 20 L24 20 L24 24 L20 24 L20 26z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Video from '@/assets/js/video'
import { mousePosition } from '@/assets/js/mouse'
import { clamp } from 'lodash'

export default {
    props: {
        video: {
            type: Object,
            required: true
        },

        next: {
            type: Object,
            default: null
        },

        time: {
            type: Number,
            default: 0
        },

        inTheater: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            player: {},
            playing: false,
            seeking: 0,
            dragging: false,
            volumeDragging: false,
            showControls: true,
            controlTimer: null,
            playInterface: false
        }
    },

    computed: {
        loaded () {
            return this.player.loaded
        },

        currentTime: {
            get () {
                return this.player.currentTime
            },

            set (val) {
                this.player.jumpTo(val)
            }
        },

        progress () {
            return clamp(this.currentTime / this.player.duration, 0, 1)
        },

        buffered () {
            return clamp(this.player.buffered / this.player.duration, 0, 1)
        },

        volume: {
            get () {
                return this.player.volume
            },

            set (val) {
                val = clamp(val, 0, 1)

                localStorage.setItem('volume', val)
                this.player.$el.volume = val
            }
        }
    },

    mounted () {
        this.player = new Video(document.getElementById('video_player'), {
            volume: localStorage.getItem('volume'),
            currentTime: this.time,
            onPlaybackChange: () => {
                this.timeControls()
            }
        })

        if (this.player) {
            this.applyListeners()
        }
    },

    beforeDestroy () {
        this.player.destroy()

        clearTimeout(this.controlTimer)

        this.destroyListeners()
    },

    methods: {
        togglePlay () {
            this.player.toggle()
        },

        toggleInterfacePlay () {
            this.playInterface = true
            setTimeout(() => {
                this.playInterface = false
            }, 500)
            this.togglePlay()
        },

        toggleMute () {
            this.player.$el.muted = !this.player.$el.muted
        },

        setSeeking (context) {
            this.seeking = mousePosition(context.target, context)
        },

        endSeeking () {
            this.seeking = 0
        },

        draggingTime (context) {
            this.dragging = true
            this.player.pause()
            this.currentTime = mousePosition(context.target, context) * this.player.duration
        },

        volumeChange (context) {
            this.volumeDragging = true
            this.volume = mousePosition(context.target, context)
        },

        toggleTheater () {
            this.$emit('changetheater', !this.inTheater)
        },

        timeControls () {
            clearTimeout(this.controlTimer)

            this.showControls = true

            this.controlTimer = setTimeout(() => {
                this.setControlDisplay()
            }, 2500)
        },

        setControlDisplay () {
            this.showControls = this.player.paused || this.dragging || this.volumeDragging || this.player.ended
        },

        applyListeners () {
            document.addEventListener('mousemove', this.mousemove)
            document.addEventListener('mouseup', this.mouseup)
            document.addEventListener('keydown', this.keydown)
        },

        destroyListeners () {
            document.removeEventListener('mousemove', this.mousemove)
            document.removeEventListener('mouseup', this.mouseup)
            document.removeEventListener('keydown', this.keydown)
        },

        mousemove (e) {
            if (this.dragging) {
                e.preventDefault()
                this.currentTime = mousePosition(this.$refs['player-slider'], e) * this.player.duration
            }

            if (this.volumeDragging) {
                e.preventDefault()
                this.volume = mousePosition(this.$refs['volume-slider'], e)
            }
        },

        mouseup (e) {
            if (this.dragging) {
                this.dragging = false
                this.player.play()
            }

            this.volumeDragging = false
        },

        keydown (e) {
            if (event.target.matches('input')) {
                return
            }

            // (space)
            if (e.keyCode === 32) {
                e.preventDefault()
                this.toggleInterfacePlay()
            }

            // m
            if (e.keyCode === 77) {
                this.toggleMute()
            }

            // n
            if (e.keyCode === 78 && e.shiftKey) {
                this.$router.push(this.next)
            }

            // t
            if (e.keyCode === 84) {
                this.toggleTheater()
            }
        }
    }
}
</script>

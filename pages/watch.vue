<template>
    <div>
        <div ref="theater-container" class="w-full" />

        <div class="container flex flex-wrap">
            <div class="w-full lg:w-2/3 xl:w-5/7 lg:pr-6 mb-4 pt-5">
                <div ref="player-container">
                    <div id="player">
                        <lazy-player
                            :video="video"
                            :next="{ name: 'watch', query: { v: next.id }}"
                            :time="getTime()"
                            :in-theater="theaterMode"
                            :in-fullscreen="fullscreenMode"
                            @changetheater="updateTheater"
                            @changeFullscreen="updateFullscreen"
                        />
                    </div>
                </div>

                <div class="border-b">
                    <div class="w-full border-b mb-4">
                        <h1 class="text-xl mb-2">
                            {{ video.title }}
                        </h1>

                        <div class="flex flex-wrap items-baseline text-gray-700 justify-between">
                            <div class="mr-3 mb-3 sm:mb-0">
                                <p>
                                    <span class="inline-block sm:hidden">{{ video.view_count_shorthand }}</span>
                                    <span class="hidden sm:inline-block">{{ video.view_count }}</span> views
                                    <span class="hidden sm:inline-block"><span class="text-md">&bull;</span> 18 Feb 2020</span>
                                </p>
                            </div>

                            <div class="flex mb-3">
                                <div class="relative mr-3">
                                    <button class="px-1 sm:px-2 py-1 mr-1 uppercase">
                                        <svg class="h-6 w-6 fill-current inline-block" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                        </svg>

                                        <span>45k</span>
                                    </button>

                                    <button class="px-1 sm:px-2 py-1 uppercase">
                                        <svg class="h-6 w-6 fill-current inline-block" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                                        </svg>

                                        <span>1k</span>
                                    </button>

                                    <div class="likes-container -mb-3 w-full bg-gray-400 absolute bottom-0">
                                        <div class="h-full bg-gray-700" style="width: 90%" />
                                    </div>
                                </div>

                                <button class="mr-3 px-1 uppercase">
                                    <svg class="h-6 w-6 fill-current inline-block" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
                                    </svg>

                                    <span>Share</span>
                                </button>

                                <button class="mr-3 px-1 uppercase">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current inline-block" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                                    </svg>

                                    <span>Save</span>
                                </button>

                                <button class="px-1">
                                    <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="mb-6">
                        <div class="flex items-center mb-1">
                            <div>
                                <channel-icon class=" h-16 w-16 mr-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                            </div>

                            <div class="leading-tight flex-1">
                                <p class="font-medium">
                                    {{ video.channel.name }}
                                </p>

                                <p class="text-sm text-gray-600">
                                    157k subscribers
                                </p>
                            </div>

                            <div>
                                <button v-if="video.channel.verified" class="btn uppercase border border-blue-500 px-5 text-blue-500">
                                    Join
                                </button>

                                <button class="btn uppercase bg-red-700 text-white ml-2">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        <div class="ml-20">
                            <p class="text-sm leading-tight">
                                {{ video.description }}
                            </p>
                        </div>
                    </div>
                </div>

                <comments class="pt-6" />
            </div>

            <div class="w-full lg:w-1/3 xl:w-2/7 pt-5">
                <div class="w-full mb-3 flex justify-between pr-2">
                    <span>Up next</span>

                    <div class="flex">
                        <span class="uppercase">Autoplay</span>

                        <button class="ml-2">
                            <label for="toogleA" class="flex items-center cursor-pointer">
                                <div class="relative w-8 h-3 bg-gray-400 rounded-full">
                                    <input id="toogleA" type="checkbox" class="hidden">

                                    <div class="absolute w-4 h-4 bg-blue-600 rounded-full -mt-2 top-1/2 left-0" />
                                </div>
                            </label>
                        </button>
                    </div>
                </div>

                <div class="pb-3 mb-3 border-b">
                    <grid-base :key="next.id" current="Horizontal" :video="next" />
                </div>

                <div v-for="recommended in recommendations" :key="recommended.id" class="mb-3">
                    <grid-base current="Horizontal" :video="recommended" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onFullscreenChange } from '@/assets/js/fullscreen'

export default {
    watchQuery: ['v'],

    asyncData ({ app, route }) {
        return app.$axios.get(`api/videos/${route.query.v}`)
            .then((response) => {
                const related = response.data.data.related

                return {
                    video: response.data.data.video,

                    next: related.splice(0, 1)[0],

                    recommendations: related
                }
            })
    },

    computed: {
        theaterMode: {
            get () {
                return this.$store.getters['watch/theater']
            },

            set (val) {
                this.$store.commit('watch/setTheater', val)
                this.changeTheater(val)
            }
        },

        fullscreenMode: {
            get () {
                return this.$store.getters['watch/fullscreen']
            },

            set (val) {
                if (!this.theaterMode) {
                    this.changeTheater(val)
                }

                this.$store.commit('watch/setFullscreen', val)
            }
        }
    },

    mounted () {
        const oldTheater = localStorage.getItem('theaterMode')

        if (oldTheater !== 'null') {
            this.theaterMode = Boolean(oldTheater === 'true')
        }

        onFullscreenChange(() => {
            if (!document.fullscreenElement) {
                this.fullscreenMode = false
            } else {
                window.scrollTo(0, 0)
            }
        })
    },

    methods: {
        updateTheater (mode) {
            this.theaterMode = mode
        },

        updateFullscreen (mode) {
            this.fullscreenMode = mode
        },

        changeTheater (mode) {
            let container = this.$refs['theater-container']

            if (!mode) {
                container = this.$refs['player-container']
            }

            container.appendChild(document.getElementById('player'))
        },

        getTime () {
            if (this.$route.query.t) {
                return +this.$route.query.t
            }

            return 0
        }
    },

    head () {
        const title = `${this.video.title} - Youtube Clone`

        return {
            title,
            bodyAttrs: {
                class: this.fullscreenMode ? 'fullscreen-mode' : ''
            },
            link: [
                {
                    ref: 'image_src',
                    href: this.video.thumb
                }
            ],
            meta: [
                {
                    hid: 'title',
                    name: 'title',
                    content: title
                },

                {
                    hid: 'description',
                    name: 'description',
                    content: this.video.description
                },

                {
                    name: 'author',
                    content: this.video.channel.name
                },

                {
                    property: 'og:type',
                    content: 'website'
                },

                {
                    property: 'og:title',
                    content: title
                },

                {
                    property: 'og:description',
                    content: this.video.description
                },

                {
                    property: 'og:image',
                    content: this.video.thumb
                },

                {
                    property: 'twitter:image',
                    content: this.video.thumb
                }
            ]
        }
    }
}
</script>

<style>
    .likes-container {
        height: 0.15rem;
    }
</style>

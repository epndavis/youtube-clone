<template>
    <div class="navbar" :dark="theater && $route.name === 'watch'" :class="{'navtop': top && fullscreen, 'transition-all duration-300': fullscreen}">
        <div class="flex items-center">
            <button class="mr-4 fill-current">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
            </button>

            <router-link :to="{ name: 'index' }" class="flex items-center cursor-pointer">
                <logo class="mr-1" />

                <span class="text-lg">
                    Youtube
                </span>
            </router-link>
        </div>

        <div class="hidden md:block flex-1 px-8">
            <search />
        </div>

        <div class="flex items-center">
            <button class="mr-5 md:hidden" aria-label="open-search" @click="searchOpen = true">
                <svg class="h-5 w-5 m-auto fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
            </button>

            <button class="mr-5 cursor-pointer" aria-label="upload">
                <svg class="h-8 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z" />
                </svg>
            </button>

            <a class="mr-5 cursor-pointer relative">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>

                <span class="block bg-red-600 w-4 h-4 rounded-full absolute top-0 right-0 -mr-1 -mt-1 leading-4 text-center text-sm text-white">
                    4
                </span>
            </a>

            <a href="https://epndavis.com" target="_blank" rel="noreferrer" class="h-8 w-8 rounded-full overflow-hidden">
                <img class="h-full w-full object-cover" src="/images/lovable-thumbnail.jpg">
            </a>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            searchOpen: false,
            top: false
        }
    },

    computed: {
        ...mapGetters({
            theater: 'watch/theater',
            fullscreen: 'watch/fullscreen'
        })
    },

    watch: {
        fullscreen () {
            this.top = window.scrollY === 0
        }
    },

    mounted () {
        window.addEventListener('scroll', () => {
            this.top = window.scrollY === 0
        })
    }
}
</script>

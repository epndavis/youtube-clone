<template>
    <router-link class="block" :to="link">
        <div class="thumbnail relative">
            <div class="absolute inset-0 overflow-hidden bg-gray-300">
                <img-lazy class="w-full" :src="thumbnail" />
            </div>

            <div class="absolute bottom-0 right-0 p-1 text-white text-sm">
                <span class="bg-gray-900 px-1 rounded-sm">{{ duration | formatTime }}</span>
            </div>

            <div v-show="ended" class="absolute inset-0 flex opacity-75 text-white justify-center items-center">
                <svg class="h-16 w-16 fill-current" viewBox="0 0 36 36">
                    <path d="M12 26l6.5-4v-8L12 10zm6.5-4l6.5-4-6.5-4z" />
                </svg>
            </div>

            <div v-if="showPreview" class="absolute inset-0 overflow-hidden transition-opacity duration-300" :class="[ showPreview ? 'opacity-1' : 'opacity-0' ]">
                <img class="w-full" :src="gif">
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        thumbnail: {
            type: String,
            required: true
        },

        gif: {
            type: String,
            default: ''
        },

        duration: {
            type: String,
            default: '0'
        },

        link: {
            type: Object,
            required: true
        },

        animatePreview: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            ended: false,
            showPreview: false,
            preview: null
        }
    },

    watch: {
        animatePreview (bool) {
            if (this.gif !== '') {
                this.ended = false
                this.showPreview = false
                clearTimeout(this.preview)

                if (bool) {
                    this.showPreview = true
                    this.preview = setTimeout(() => {
                        this.ended = true
                        this.showPreview = false
                    }, 3000)
                }
            }
        }
    },

    beforeDestroy () {
        clearTimeout(this.preview)
    }
}
</script>

<style>
.thumbnail:after {
    content: '';
    display: block;
    width: 100%;
    padding-top: 56.25%;
}
</style>

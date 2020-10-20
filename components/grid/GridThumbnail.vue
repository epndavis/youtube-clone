<template>
    <router-link class="block" :to="link">
        <div class="thumbnail relative">
            <div class="absolute inset-0 overflow-hidden bg-gray-300">
                <img-lazy class="w-full" :src="thumbnail" />
            </div>

            <div v-if="showPreview" class="absolute inset-0 overflow-hidden">
                <img class="w-full" :src="gif">
            </div>

            <div class="absolute bottom-0 right-0 p-1 text-white text-sm">
                <span class="bg-gray-900 px-1 rounded-sm">{{ duration | formatTime }}</span>
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

        showPreview: {
            type: Boolean,
            default: false
        }
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

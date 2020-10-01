<template>
    <router-link :to="{ name: 'watch' }">
        <div class="thumbnail relative">
            <div class="absolute inset-0 overflow-hidden bg-gray-300">
                <img class="w-full" :src="thumbnail">
            </div>

            <div class="absolute bottom-0 right-0 p-1 text-white text-sm">
                <span class="bg-gray-900 px-1 rounded-sm">{{ duration }}</span>
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

        duration: {
            type: String,
            default: '0:00'
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

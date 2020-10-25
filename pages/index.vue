<template>
    <div class="container flex flex-wrap py-5">
        <div v-for="video in videos" :key="video.id" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:px-2 mb-8 sm:mb-12">
            <grid-base current="Vertical" :video="video" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Index',

    data () {
        return {
            videos: []
        }
    },

    mounted () {
        this.$axios.get('api/videos')
            .then((response) => {
                this.videos = response.data.data
            })
    }
}
</script>

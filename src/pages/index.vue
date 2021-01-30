<template>
    <div class="container pb-5 sm:py-5 ">
        <div v-if="loading" class="flex flex-wrap">
            <div v-for="index in $device.isMobile ? 3 : 12" :key="index" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:px-2 mb-8 sm:mb-12">
                <div class="thumbnail content-placeholder -mx-6 sm:mx-0" />

                <div class="flex pt-3 -mx-2 sm:mx-0">
                    <div>
                        <div class="h-10 w-10 block rounded-full overflow-hidden content-placeholder mr-3" />
                    </div>

                    <div class="flex-1 min-w-0 relative">
                        <div class="mb-3 h-4 content-placeholder w-11/12" />

                        <div class="mb-3 h-4 content-placeholder w-3/4" />
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="flex flex-wrap">
            <div v-for="video in videos" :key="video.id" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:px-2 mb-8 sm:mb-12">
                <grid-base current="Vertical" :video="video" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Index',

    data () {
        return {
            videos: [],
            loading: true
        }
    },

    mounted () {
        this.$axios.get('api/videos')
            .then((response) => {
                this.videos = response.data.data
            }).finally(() => {
                this.loading = false
            })
    }
}
</script>

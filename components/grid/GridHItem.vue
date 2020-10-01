<template>
    <div class="flex">
        <div class="w-40 mr-2">
            <grid-thumbnail :thumbnail="video.video.thumb" :gif="video.video.gif" :duration="video.video.duration" :link="{ name: 'watch', query: { v: video.id }}" />
        </div>

        <grid-data :title="video.title" :uploaded="video.uploadedWhen" :views="video.viewCount" class="flex-1 min-w-0" />
    </div>
</template>

<script>
export default {
    props: {
        video: {
            type: Object,
            required: true
        }
    }
}
</script>

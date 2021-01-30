<template>
    <div class="flex">
        <div class="w-40 mr-2">
            <slot />
        </div>

        <grid-data :title="video.title" :uploaded="video.uploaded_when" :views="video.view_count_shorthand" :channel="video.channel" class="flex-1 min-w-0" />
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

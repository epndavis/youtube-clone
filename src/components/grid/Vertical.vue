<template>
    <div class="-mx-6 sm:mx-0">
        <slot />

        <div class="flex pt-3 mx-4 sm:mx-0">
            <div>
                <channel-icon class="h-10 w-10 mr-3" src="/images/me-thumbnail.jpg" />
            </div>

            <grid-data :title="video.title" :uploaded="video.uploaded_when" :views="video.view_count_shorthand" :channel="video.channel" class="flex-1 min-w-0" />
        </div>
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

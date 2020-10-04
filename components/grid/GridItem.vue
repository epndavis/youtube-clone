<template>
    <div>
        <grid-thumbnail :thumbnail="video.thumb" :gif="video.gif" :duration="video.duration" :link="{ name: 'watch', query: { v: video.id }}" />

        <div class="flex pt-3">
            <div>
                <button class="rounded-full h-10 w-10 mr-3 overflow-hidden">
                    <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
                </button>
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

<template>
    <div class="flex">
        <div class="w-64 mr-4">
            <grid-thumbnail :thumbnail="video.thumb" :gif="video.gif" :duration="video.duration" :link="{ name: 'watch', query: { v: video.id }}" />
        </div>

        <grid-data :title="video.title" :uploaded="video.uploaded_when" :views="video.view_count_shorthand" class="flex-1 min-w-0">
            <div class="my-3 flex items-center text-sm">
                <channel-icon class="h-8 w-8 mr-2" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />

                <a href="#" class="flex leading-4 text-gray-600">
                    {{ video.channel.name }}
                    <span v-if="video.channel.verified" class="ml-1">
                        <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                        </svg>
                    </span>
                </a>
            </div>

            <p class="leading-tight text-sm">
                {{ video.description_short }}
            </p>
        </grid-data>
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

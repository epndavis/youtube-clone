<template>
    <div class="relative pr-5">
        <h2 class="text-md mb-1 font-medium leading-tight truncate" :title="title">
            {{ title }}
        </h2>

        <div class="text-gray-600 leading-tight text-sm">
            <p v-if="channel">
                <channel-name class="leading-4" :channel="channel" />
            </p>

            <p>
                {{ views }} views <span class="text-md">&bull;</span> {{ uploaded }}
            </p>
        </div>

        <slot />

        <div class="absolute top-0 right-0">
            <button class="text-gray-600 fill-current hover:text-gray-800" aria-label="video-options">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },

        uploaded: {
            type: String,
            default: ''
        },

        views: {
            type: String,
            default: '0'
        },

        channel: {
            type: Object,
            default: null
        }
    }
}
</script>

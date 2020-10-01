<template>
    <div class="flex">
        <div class="w-40 mr-2">
            <grid-thumbnail :thumbnail="video.thumbnail" :duration="video.length" />
        </div>

        <div class="flex-1 min-w-0">
            <grid-data :title="video.title" />
        </div>

        <div>
            <button class="text-gray-600 fill-current hover:text-gray-800">
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
        video: {
            type: Object,
            required: true
        }
    }
}
</script>

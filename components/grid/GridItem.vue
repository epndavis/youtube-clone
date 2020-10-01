<template>
    <div>
        <grid-thumbnail :thumbnail="video.thumbnail" :duration="video.length" />

        <div class="flex pt-3">
            <div>
                <button class="rounded-full h-10 w-10 mr-3 overflow-hidden">
                    <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
                </button>
            </div>

            <grid-data :title="video.title" class="flex-1 min-w-0" />

            <div>
                <button class="text-gray-600 fill-current hover:text-gray-800">
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </button>
            </div>
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

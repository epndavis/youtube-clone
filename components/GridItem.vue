<template>
    <div>
        <div class="thumbnail relative mb-3">
            <div class="absolute inset-0 overflow-hidden bg-gray-300">
                <img class="w-full" :src="video.thumbnail">
            </div>

            <div class="absolute bottom-0 right-0 p-1 text-white text-sm">
                <span class="bg-gray-900 px-1 rounded-sm">{{ video.length }}</span>
            </div>
        </div>

        <div class="flex">
            <div>
                <button class="rounded-full h-10 w-10 mr-3 overflow-hidden">
                    <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
                </button>
            </div>

            <div class="flex-1 min-w-0">
                <h2 class="text-md mb-1 font-medium leading-tight truncate">
                    {{ video.title }}
                </h2>

                <div class="text-gray-600 leading-tight text-sm">
                    <p>
                        <a href="#">
                            Channel Name
                        </a>
                    </p>

                    <p>
                        7.3m views <span class="text-md">&bull;</span> 7 months ago
                    </p>
                </div>
            </div>

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

<style>
.thumbnail:after {
    content: '';
    display: block;
    width: 100%;
    padding-top: 56.25%;
}
</style>

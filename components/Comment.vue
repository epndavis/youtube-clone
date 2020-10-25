<template>
    <div class="flex">
        <div class="mr-4">
            <channel-icon class="h-10 w-10" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
        </div>

        <div class="flex-1 text-sm pr-5 relative leading-relaxed">
            <div>
                <span class="font-medium">{{ comment.author }}</span> <span class="text-gray-500">{{ comment.commentedWhen }}</span>
            </div>

            <p class="mb-1">
                {{ comment.body }}
            </p>

            <div>
                <button class="px-1 py-1 mr-1 uppercase text-gray-600 hover:text-gray-700" aria-label="like-comment">
                    <svg class="h-6 w-6 fill-current inline-block" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>

                    <span>875</span>
                </button>

                <button class="px-1 py-1 mr-1 uppercase text-gray-600 hover:text-gray-700" aria-label="dislike-comment">
                    <svg class="h-6 w-6 fill-current inline-block" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                    </svg>

                    <span>6</span>
                </button>

                <button class="uppercase text-gray-700 font-medium" aria-label="reply">
                    Reply
                </button>
            </div>

            <div class="absolute top-0 right-0">
                <button class="text-gray-600 fill-current hover:text-gray-800" aria-label="comment-options">
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
        comment: {
            type: Object,
            required: true
        }
    }
}
</script>

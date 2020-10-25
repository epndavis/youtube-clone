<template>
    <div>
        <div class="w-full flex mb-6">
            <div class="mr-6">
                <span>{{ comments.length }}</span> Comments
            </div>

            <div>
                <button class="uppercase" aria-label="sort-comments">
                    <svg class="w-5 h-5 inline-block fill-current text-gray-600 mr-1" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" />
                    </svg>

                    <span>Sort by</span>
                </button>
            </div>
        </div>

        <div class="flex mb-8">
            <div class="mr-4">
                <channel-icon class="h-10 w-10" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
            </div>

            <div class="flex-1">
                <div class="w-full border-b mb-2">
                    <input class="w-full text-sm text-gray-700 pb-1 placeholder-current bg-transparent" type="text" placeholder="Commenting publicly as Elliot Davis" @click="commenting = true">
                </div>

                <div v-show="commenting" class="flex justify-between items-center">
                    <div class="flex-1">
                        <p class="text-xs text-gray-600">
                            By completing this action you are creating a channel
                        </p>
                    </div>

                    <div>
                        <button class="btn uppercase mr-2" @click="commenting = false">
                            Cancel
                        </button>

                        <button class="btn uppercase bg-gray-500 text-white">
                            Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div v-for="(comment, index) in comments" :key="index" class="mb-5">
            <comment :comment="comment" />
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            commenting: false,

            comments: [
                {
                    author: 'Elliot Davis',
                    commentedWhen: '1 month ago',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet justo diam.'
                },

                {
                    author: 'Elliot Davis',
                    commentedWhen: '1 month ago',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet justo diam.'
                },

                {
                    author: 'Elliot Davis',
                    commentedWhen: '1 month ago',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet justo diam.'
                },

                {
                    author: 'Elliot Davis',
                    commentedWhen: '1 month ago',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet justo diam.'
                },

                {
                    author: 'Elliot Davis',
                    commentedWhen: '1 month ago',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet justo diam.'
                },

                {
                    author: 'Elliot Davis',
                    commentedWhen: '1 month ago',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet justo diam.'
                }
            ]
        }
    }
}
</script>

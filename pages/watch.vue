<template>
    <div class="container flex flex-wrap">
        <div class="w-full lg:w-7/12 xl:w-2/3 lg:pr-5">
            <div class="bg-gray-900">
                <img class="w-full" :src="video.thumbnail">
            </div>

            <div class="border-b pt-3">
                <div class="w-full border-b mb-4">
                    <h1 class="text-xl mb-3">
                        {{ video.title }}
                    </h1>

                    <div class="flex items-baseline text-gray-700 justify-between">
                        <div class="mr-3">
                            <p>
                                <span class="inline-block sm:hidden">7.3M</span><span class="hidden sm:inline-block">7,370,170</span> views
                                <span class="hidden sm:inline-block"><span class="text-md">&bull;</span> 18 Feb 2020</span>
                            </p>
                        </div>

                        <div class="flex mb-3">
                            <div class="relative mr-3">
                                <button class="px-1 py-1 mr-1 uppercase">
                                    <svg class="h-6 w-6 fill-current inline-block" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                    </svg>

                                    <span>45k</span>
                                </button>

                                <button class="px-1 py-1 uppercase">
                                    <svg class="h-6 w-6 fill-current inline-block" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                                    </svg>

                                    <span>1k</span>
                                </button>

                                <div class="likes-container -mb-3 w-full bg-gray-400 absolute bottom-0">
                                    <div class="h-full bg-gray-700" style="width: 90%" />
                                </div>
                            </div>

                            <button class="mr-3 px-1 uppercase">
                                <svg class="h-6 w-6 fill-current inline-block" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
                                </svg>

                                <span>Share</span>
                            </button>

                            <button class="mr-3 px-1 uppercase">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current inline-block" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                                </svg>

                                <span>Save</span>
                            </button>

                            <button class="px-1">
                                <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="flex items-center mb-6">
                    <div>
                        <button class="rounded-full h-16 w-16 mr-3 overflow-hidden">
                            <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
                        </button>
                    </div>

                    <div class="leading-tight flex-1">
                        <p class="font-medium">
                            Channel Name
                        </p>

                        <p class="text-sm">
                            157k subscribers
                        </p>
                    </div>

                    <div>
                        <button class="bg-red-700 px-4 py-2 text-white">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full lg:w-5/12 xl:w-1/3">
            <div v-for="recommended in recommendations" :key="recommended.title" class="mb-3">
                <grid-h-item :video="recommended" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            video: {
                title: 'Lorem ipsum dolor sit amet.',
                length: '1:04',
                thumbnail: 'https://source.unsplash.com/random/350x220'
            },

            recommendations: [
                {
                    title: 'Lorem ipsum dolor sit amet.',
                    length: '1:04',
                    thumbnail: 'https://source.unsplash.com/random/340x220'
                },

                {
                    title: 'Lorem ipsum dolor sit amet.',
                    length: '1:04',
                    thumbnail: 'https://source.unsplash.com/random/340x220'
                },

                {
                    title: 'Lorem ipsum dolor sit amet.',
                    length: '1:04',
                    thumbnail: 'https://source.unsplash.com/random/340x220'
                },

                {
                    title: 'Lorem ipsum dolor sit amet.',
                    length: '1:04',
                    thumbnail: 'https://source.unsplash.com/random/340x220'
                },

                {
                    title: 'Lorem ipsum dolor sit amet.',
                    length: '1:04',
                    thumbnail: 'https://source.unsplash.com/random/340x220'
                },

                {
                    title: 'Lorem ipsum dolor sit amet.',
                    length: '1:04',
                    thumbnail: 'https://source.unsplash.com/random/340x220'
                },

                {
                    title: 'Lorem ipsum dolor sit amet.',
                    length: '1:04',
                    thumbnail: 'https://source.unsplash.com/random/340x220'
                }
            ]
        }
    }
}
</script>

<style>
    .likes-container {
        height: 0.15rem;
    }
</style>

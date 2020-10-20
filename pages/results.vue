<template>
    <div class="container flex flex-wrap py-5 lg:w-5/7">
        <div class="w-full mb-4 border-b">
            <button class="flex items-center py-1">
                <svg class="w-6 h-6 inline-block fill-current text-gray-600 mr-1" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
                    <g>
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
                    </g>
                </svg>

                <span class="uppercase">
                    Filter
                </span>
            </button>
        </div>

        <div v-for="video in videos" :key="video.id" class="w-full mb-4">
            <grid-base current="HorizontalLarge" :video="video" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Results',

    key (route) {
        return route.fullPath
    },

    watchQuery: ['search_query'],

    asyncData ({ app, route }) {
        return app.$axios.get('api/videos', {
            params: {
                q: route.query.search_query
            }
        })
            .then((response) => {
                return {
                    videos: response.data.data
                }
            })
    }
}
</script>

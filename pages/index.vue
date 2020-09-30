<template>
    <div class="container flex flex-wrap">
        <div v-for="video in videos" :key="video.title" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-12">
            <grid-item :video="video" />
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            videos: [
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

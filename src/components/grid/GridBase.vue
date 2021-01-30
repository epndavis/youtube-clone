<template>
    <div class="cursor-pointer" @mouseenter="onMouseEnter()" @mouseleave="onMouseLeave()" @click="animatePreview = false">
        <component :is="current" :video="video">
            <grid-thumbnail
                :thumbnail="video.thumb"
                :gif="video.gif"
                :duration="video.duration"
                :link="{ name: 'watch', query: { v: video.id }}"
                :animate-preview="animatePreview"
            />
        </component>
    </div>
</template>

<script>
import Vertical from '@/components/grid/Vertical'
import Horizontal from '@/components/grid/Horizontal'
import HorizontalLarge from '@/components/grid/HorizontalLarge'

export default {
    components: {
        Vertical,
        Horizontal,
        HorizontalLarge
    },

    props: {
        current: {
            type: String,
            default: 'GridItem'
        },

        video: {
            type: Object,
            required: true
        }
    },

    data () {
        return {
            animatePreview: false
        }
    },

    methods: {
        onMouseEnter () {
            this.animatePreview = true
        },

        onMouseLeave () {
            this.animatePreview = false
        }
    }
}
</script>

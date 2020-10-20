<template>
    <div class="cursor-pointer" @mouseenter="onMouseEnter()" @mouseleave="onMouseLeave()">
        <component :is="current" :video="video">
            <grid-thumbnail
                :thumbnail="video.thumb"
                :gif="video.gif"
                :duration="video.duration"
                :link="{ name: 'watch', query: { v: video.id }}"
                :show-preview="showPreview"
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
            showPreview: false,
            preview: null
        }
    },

    beforeDestroy () {
        clearTimeout(this.preview)
    },

    methods: {
        onMouseEnter () {
            clearTimeout(this.preview)

            this.showPreview = true

            this.preview = setTimeout(() => {
                this.showPreview = false
            }, 3000)
        },

        onMouseLeave () {
            this.showPreview = false
            clearTimeout(this.preview)
        }
    }
}
</script>

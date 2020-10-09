<template>
    <img :data-src="src">
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            default: ''
        }
    },

    mounted () {
        window.imageObserver.observe(this.$el)
    },

    beforeDestroy () {
        window.imageObserver.unobserve(this.$el)
    }
}
</script>

<script>
export default {
    render () {
        return this.$device.isDesktop ? this.$slots.default : false
    }
}
</script>

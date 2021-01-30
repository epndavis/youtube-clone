<script>
export default {
    render () {
        return this.$device.isMobile ? this.$slots.default : false
    }
}
</script>

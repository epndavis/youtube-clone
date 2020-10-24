<template>
    <div>
        <Navbar />

        <Nuxt :class="{'standard-mode': !fullscreen}" keep-alive :keep-alive-props="{ include: ['Index'] }" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            fullscreen: 'watch/fullscreen'
        })
    }
}
</script>

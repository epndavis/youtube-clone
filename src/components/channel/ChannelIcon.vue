<template>
    <a class="block rounded-full overflow-hidden bg-gray-300">
        <img-lazy class="h-full w-full object-cover" :src="src" alt="Channel icon" />
    </a>
</template>

<script>
export default {
    name: 'ChannelIcon',

    props: {
        src: {
            type: String,
            required: true
        }
    }
}
</script>

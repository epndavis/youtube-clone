<template>
    <a class="block rounded-full overflow-hidden bg-gray-300">
        <img-lazy class="h-full w-full object-cover" src="/images/me-thumbnail.jpg" alt="Channel icon" />
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

<template>
    <a class="block rounded-full overflow-hidden bg-gray-300">
        <img-lazy class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
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

<template>
    <a href="#" class="flex items-center">
        {{ channel.name }}
        <span v-if="channel.verified" class="ml-1 text-gray-600">
            <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
        </span>
    </a>
</template>

<script>
export default {
    props: {
        channel: {
            type: Object,
            required: true
        }
    }
}
</script>

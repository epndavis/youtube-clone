<template>
    <div class="h-full w-full origin-left" :style="{ transform: `scaleX(${scale})` }" />
</template>

<script>
export default {
    props: {
        scale: {
            type: Number,
            required: true
        }
    }
}
</script>

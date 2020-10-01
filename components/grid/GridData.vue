<template>
    <div>
        <h2 class="text-md mb-1 font-medium leading-tight truncate">
            {{ title }}
        </h2>

        <div class="text-gray-600 leading-tight text-sm">
            <p>
                <a href="#">
                    Channel Name
                </a>
            </p>

            <p>
                7.3m views <span class="text-md">&bull;</span> 7 months ago
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

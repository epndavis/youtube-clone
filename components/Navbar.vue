<template>
    <div class="navbar">
        <div class="flex items-center">
            <button class="mr-4 fill-current">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
            </button>

            <router-link :to="{ name: 'index' }" class="flex items-center cursor-pointer">
                <logo class="mr-1" />

                <span class="text-lg">
                    Youtube
                </span>
            </router-link>
        </div>

        <div class="hidden md:block flex-1 px-8">
            <search />
        </div>

        <div class="flex items-center">
            <button class="mr-5 md:hidden" @click="searchOpen = true">
                <svg class="h-5 w-5 m-auto fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
            </button>

            <router-link :to="{ name: 'upload' }" class="mr-5 cursor-pointer">
                <svg class="h-8 w-5 fill-current" viewBox="0 0 280 180">
                    <path d="M0 0 L220 0 L220 180 L0 180 Z M200 90 L280 0 L280 180 Z" />
                    <path fill="white" d="M95 20 L95 160 L125 160 L125 20 Z M40 75 L40 105 L180 105 L180 75 Z" />
                </svg>
            </router-link>

            <a class="mr-5 cursor-pointer relative">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>

                <span class="block bg-red-600 w-4 h-4 rounded-full absolute top-0 right-0 -mr-1 -mt-1 leading-4 text-center text-sm text-white">
                    4
                </span>
            </a>

            <a href="https://epndavis.com" target="_blank" class="h-8 w-8 rounded-full overflow-hidden">
                <img class="h-full w-full object-cover" src="/images/me-thumbnail.jpg">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            searchOpen: false
        }
    }
}
</script>

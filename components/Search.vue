<template>
    <form @submit.prevent="search">
        <div class="search-bar flex items-center items-stretch w-full max-w-2xl m-auto">
            <input ref="search" v-model="query" class="px-3 py-1 text-md border border-r-0 rounded-l-sm outline-none flex-1" type="text" placeholder="Search">

            <button class="bg-gray-100 hover:bg-gray-200 w-16 border text-gray-600 hover:text-gray-800 rounded-r-sm">
                <svg class="h-5 w-5 m-auto fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
            </button>
        </div>
    </form>
</template>

<script>
export default {
    data () {
        return {
            query: ''
        }
    },

    beforeDestroy () {
        this.destroyListeners()
    },

    mounted () {
        this.applyListeners()
    },

    methods: {
        search () {
            if (this.query.trim().length > 0) {
                this.$router.push({
                    name: 'results',
                    query: {
                        search_query: this.query
                    }
                })
            }
        },

        applyListeners () {
            document.addEventListener('keydown', this.keydown)
        },

        destroyListeners () {
            document.removeEventListener('keydown', this.keydown)
        },

        keydown (e) {
            if (event.target.matches('input')) {
                return
            }

            // /
            if (e.keyCode === 191) {
                e.preventDefault()
                this.$refs.search.focus()
            }
        }
    }
}
</script>

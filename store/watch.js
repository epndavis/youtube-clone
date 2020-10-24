export default {
    namespaced: true,

    state: () => ({
        theater: false,
        fullscreen: false
    }),

    getters: {
        theater: (state) => {
            return state.theater
        },

        fullscreen: (state) => {
            return state.fullscreen
        }
    },

    mutations: {
        setTheater (state, bool) {
            localStorage.setItem('theaterMode', bool)

            state.theater = bool
        },

        setFullscreen (state, bool) {
            state.fullscreen = bool
        }
    }
}

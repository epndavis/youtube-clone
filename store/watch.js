import { enterFullscreen, exitFullscreen } from '@/assets/js/fullscreen'

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
            if (bool) {
                enterFullscreen(document.documentElement)
            } else if (document.fullscreenElement) {
                exitFullscreen()
            }

            state.fullscreen = bool
        }
    }
}

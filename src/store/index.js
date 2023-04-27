import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            id: 1,
            signin: false,
            sidebar: false,
            sidebar: [
                {
                    id: 1,
                    link: '/',
                    icon: 'bx bx-home',
                    title: 'Home',
                },
                {
                    id: 2,
                    link: '/course',
                    icon: 'bx bx-save',
                    title: 'Course',
                },
                {
                    id: 3,
                    link: '/students',
                    icon: 'bx bx-user',
                    title: 'Students',
                },
                {
                    id: 4,
                    link: '/payments',
                    icon: 'bx bx-dollar-circle',
                    title: 'Payment',
                },
                {
                    id: 5,
                    link: '/report',
                    icon: 'bx bxs-report',
                    title: 'Report',
                },
                {
                    id: 6,
                    link: '/settings',
                    icon: 'bx bx-cog',
                    title: 'Settings',
                }
            ]
        }
    },

    mutations: {

    }
})

export default store
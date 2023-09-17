import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

// 创建路由数组
const routes = [
    // {
    //     path: '/pins',
    //     component: PinsView,
    // },
    // {
    //     path: '/course',
    //     name: 'course',
    //     alias: '/kecheng',
    //     component: CourseView
    // },
    // {
    //     path: '/post/:id',
    //     name: 'book',
    //     component: () => import('../views/book-detail/BookInfo.vue')
    // },
    // {
    //     path: '/',
    //     component: HomeView,
    //     children: [
    //         {
    //             path: '',
    //             name: 'home',
    //             component: ListView
    //         },
    //         {
    //             path: ':type',
    //             component: ListView
    //         }
    //     ]
    // },
    // {
    //     path: '/*',
    //     name: 'notFound',
    //     component: () => import('../views/not-found/NotFound.vue')
    // }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
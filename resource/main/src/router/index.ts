import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                title: '首頁'
            }
        },
        {
            path: '/draw-lots',
            name: 'draw-lots',
            component: () => import('@/views/DrawLotsView.vue'),
            meta: {
                title: '抽籤'
            }
        },
        {
            path: '/poll',
            name: 'poll',
            component: () => import('@/views/PollView.vue'),
            meta: {
                title: '投票'
            }
        },
        // {
        //     path: '/img-create',
        //     name: 'img-create',
        //     component: () => import('@/views/ImgCreateView.vue'),
        //     meta: {
        //         title: '圖片生成'
        //     }
        // },
        {
            path: '/track-spend',
            name: 'track-spend',
            component: () => import('@/views/TrackSpendView.vue'),
            meta: {
                title: '記帳'
            }
        },
        {
            path: '/msg',
            name: 'msg',
            component: () => import('@/views/MsgView.vue'),
            meta: {
                title: '留言板'
            }
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/views/RegisterView.vue'),
            meta: {
                title: '註冊'
            }
        }
    ]
});

export default router;

import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/pages/layout/Layout.vue';
import store from '@/store';
import { FETCH_ROUTES } from '@/store/event-types';

Vue.use(Router);

export const constRoutes = [
    {
        path: 'dashboard',
        component: Layout,
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    },
    {
        path: 'documentation',
        component: Layout,
        meta: { title: 'documentation', icon: 'documentation', noCache: true }
    }
]
const mainRoutes = [
    {
        path: '',
        component: Layout,
        children: constRoutes
    }
]

const router = new Router({
    mode: 'history',
    routes: [...mainRoutes]
})
router.beforeEach((to, from, next) => {
    store.dispatch(FETCH_ROUTES);
    next();
});
export default router;
import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import ExternalVideoDetail from '../components/ExternalVideoDetail';
import LocalVideoDetail from '../components/LocalVideoDetail';

const router = new VueRouter({
    pageRouting: true,
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {
                title: 'Home',
            },
        },
        {
            path: 'external/:videoId',
            name: 'External Video Detail',
            component: ExternalVideoDetail
        },
        {
            path: 'local/:videoId',
            name: 'Local Video Detail',
            component: LocalVideoDetail
        },
        {path: '*', redirect: '/home'},
    ],
});

router.replace('/home');

module.exports = router;

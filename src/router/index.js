import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import VideoDetail from '../components/VideoDetail';

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
      path: 'video/:videoId',
      name: 'Video Detail',
      component: VideoDetail
    },
    {path: '*', redirect: '/home'},
  ],
});

router.replace('/home');

module.exports = router;

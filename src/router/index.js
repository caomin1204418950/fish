import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import fishPond from '@/components/fishPond'
import publish from '@/components/publish'
import news from '@/components/news'
import mine from '@/components/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/fishPond',
      name: 'fishPond',
      component: fishPond
    },
    {
      path: '/publish',
      name: 'publish',
      component: publish
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    }
  ]
})

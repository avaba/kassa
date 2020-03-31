import Vue from 'vue'
import Router from 'vue-router'
import VueBreadcrumbs from 'vue-breadcrumbs'

Vue.use(Router)
Vue.use(VueBreadcrumbs, {
  template: '<nav class="breadcrumb" v-if="$breadcrumbs.length"> ' +
    '<router-link class="breadcrumb-item" v-for="(crumb, key) in $breadcrumbs" :to="linkProp(crumb)" :key="key">{{ crumb | crumbText }}</router-link> ' +
    '</nav>'
});

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {
    path: '/',
    name: 'Главная',
    component: () => import('./views/Home.vue'),
    meta: {
      breadcrumb: 'Главная'
    },
  },
  {
    path: '/news',
    name: 'Новости',
    component: () => import('./views/News.vue'),
    meta: {
      breadcrumb: 'Новости'
    },
  },
  {
    path: '/organization',
    name: 'Организации',
    component: () => import('./views/Organization/Organization.vue'),
  },
  {
    path: '/organization/add',
    name: 'Добавление организации',
    component: () => import('./views/Organization/Add.vue'),
  },
  {
    path: '/websitesStores',
    name: 'Сайты и магазины',
    component: () => import('./views/WebsitesStores.vue')
  },
  {
    path: '/checkoutClusters',
    name: 'Кассы и кластеры',
    component: () => import('./views/CheckoutClusters.vue')
  },
  {
    path: '/check',
    name: 'Чеки',
    component: () => import('./views/Check.vue')
  },
  {
    path: '/payment',
    name: 'Платежные системы',
    component: () => import('./views/Payment.vue')
  },
  {
    path: '/order',
    name: 'Заказы',
    component: () => import('./views/Order.vue')
  },
  {
    path: '/transactions',
    name: 'Платежи и транзакции',
    component: () => import('./views/Transactions.vue')
  },
  {
    path: '/message',
    name: 'Обращения',
    component: () => import('./views/Message.vue')
  },
  {
    path: '/monitoring',
    name: 'Мониторинг',
    component: () => import('./views/Monitoring.vue')
  },
  ]
})

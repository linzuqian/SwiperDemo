
export default [
  {
    path: '/',
    name: 'page.index',
    component: () => import('@/page/index.vue'),
    redirect: {
      name: 'home.index'
    },
    children: [
      // 首页
      {
        path: '/',
        name: 'home.index',
        component: () => import('@/page/home/index.vue')
      },
      // 业务
      {
        path: '/business',
        name: 'business.index',
        component: () => import('@/page/business/index.vue')
      },
      // 案例
      {
        path: '/case',
        name: 'case.index',
        component: () => import('@/page/case/index.vue')
      },
      // 合作
      {
        path: '/cooperation',
        name: 'cooperation.index',
        component: () => import('@/page/cooperation/index.vue')
      },
      // 品质
      {
        path: '/quality',
        name: 'quality.index',
        component: () => import('@/page/quality/index.vue')
      },
      // 增值
      {
        path: '/increment',
        name: 'increment.index',
        component: () => import('@/page/increment/index.vue')
      },
      // 关于
      {
        path: '/about',
        name: 'about.index',
        component: () => import('@/page/about/index.vue')
      },
      // 联系
      {
        path: '/contact',
        name: 'contact.index',
        component: () => import('@/page/contact/index.vue')
      }
    ]
  }
]

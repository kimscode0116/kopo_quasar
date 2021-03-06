
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/main', component: () => import('pages/Index.vue') },
      { path: '/signIn', component: () => import('pages/SignIn.vue') },
      { path: '/signUP', component: () => import('pages/SignUp.vue') },
      { path: '/myinfo', component: () => import('pages/myinfo.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

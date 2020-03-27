import Home from '../views/Home.vue'
import baseMap from './base'
const layOut = () => import('../components/layout/index.vue')
export default [
  {
    path: '/',
    name: '首页',
    component: layOut,
  },
  {
    path: '/home',
    name: '技术栈集锦',
    component: layOut,
    children: [
      {
        path: 'home',
        name: '前端',
        component: Home
      },
    ]
  },
  ...baseMap
]

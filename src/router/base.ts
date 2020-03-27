/* webpackChunkName: "about" */
const layOut = () => import('../components/layout/index.vue')
export default [
  {
    path: '/base',
    name: 'TS基础',
    component: layOut,
    children: [
      {
        path: 'type',
        name: 'TS基础语法',
        component: () => import('../views/base/type.vue')
      }
    ]
  }
]

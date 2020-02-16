import Vue from "vue"
import VueRouter from 'vue-router'

const Home = () => import("../views/home/Home")
const About = () => import("../views/about/About")
//1.安装插件
Vue.use(VueRouter)

//2创建路由对象

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/about",
    component: About
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router
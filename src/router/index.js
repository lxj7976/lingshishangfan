import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入跳转的组件
import Home from '@/components/pages/Home/Home'
import Categary from '@/components/pages/Category/Category'
import My from '@/components/pages/My/My'
import Shopcar from '@/components/pages/Shopcar/Shopcar'
import Banner from '@/components/common/Banner'
import Theme from '@/components/pages/Theme/Theme'
import ProductList from '@//components/common/productList'
import Err  from "@/components/common/Err"
// 创建router实例 并抛出
export default  new VueRouter({
    routes: [
        // 重定向
        {path:'/', redirect:'/home'},
        // 动态路径参数 以冒号开头
        { path: '/home', component: Home },
        { path: '/category', component: Categary },
        { path: '/my', component: My },
        { path: '/shopcar', component: Shopcar },
        { path: '/banner', component: Banner },
        // name 组件名 path必写项 
        { name: 'theme', path:'/theme', component: Theme },
        { name: 'productList', path:'/productList', component: ProductList },
        { path: '**', component: Err}
    ]
})
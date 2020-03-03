import Vue from 'vue';

import Router from 'vue-router';

Vue.use(Router);

const Home=()=> import  ('@/views/home');
const Product=()=> import ('@/views/product');
const News=()=> import ('@/views/news');
const About=()=> import ('@/views/about');
const HomeGoods=()=> import ('@/views/home-goods');
const HomePeijian=()=> import ('@/views/home-peijian');
const ProductDetail=()=> import ('@/views/product-detail');
const ProductList=()=> import ('@/views/product-list');
const NewsDetail=()=> import ('@/views/news-detail');
const MyOrder=()=> import ('@/views/my-order');
const MyCollect=()=> import ('@/views/my-collect');
const MyAddress=()=> import ('@/views/my-address');
const AddressEdit=()=> import ('@/views/address-edit');
const MyCart=()=> import ('@/views/my-cart');
const Me=()=> import ('@/views/me');
const Login=()=> import ('@/views/login');
const Pay=()=> import ('@/views/pay');
const PaySuccess=()=> import ('@/views/pay-success');
const OrderDetail=()=> import ('@/views/order-detail');

const router=new Router({
  routes:[
    {path:'',redirect:'/home'},
    {path:'/home',component:Home ,meta: { active: 0, name: '购物商城', icon: 'scan',path:'/login' }},
    {path:'/product',component:Product , meta: { active: 1, name: '商品分类', icon: 'cart-o' },children:[
      {path:'',redirect:'/product/全部'},
      {path:':name',component:ProductList, meta: { active: 1, name: '商品分类', icon: 'cart-o' ,path:'/my-cart'}}
    ]},
    {path:'/news',component:News , meta: { active: 2, name: '新闻资讯', icon: 'location-o' }},
    {path:'/about',component:About , meta: { active: 3, name: '个人中心', icon: 'setting-o' }},
    {path:'/home-goods',component:HomeGoods, meta: {  name: '选购手机'}},
    {path:'/home-peijian',component:HomePeijian , meta: {  name: '选购配件'}},
    {path:'/product-detail/:id',component:ProductDetail , meta: {  name: '商品详情', icon: 'cart-o' } },
    {path:'/news-detail/:id',component:NewsDetail , meta: {name: '新闻详情' } },
    {path:'/my-order',component:MyOrder , meta: { active: 3,name: '我的订单' }},
    {path:'/my-order/:index',component:MyOrder , meta: {active: 3, name: '我的订单' }},
    {path:'/my-collect',component:MyCollect , meta: { active: 3,name: '我的收藏夹' ,icon:'contact'}},
    {path:'/my-address',component:MyAddress , meta: { active: 3,name: '我的收货地址' ,icon:'contact'}},
    {path:'/address-edit',component:AddressEdit , meta: {active: 3, name: '我的收货地址' ,icon:'contact'}},
    {path:'/address-edit/:id',component:AddressEdit , meta: {active: 3, name: '我的收货地址' ,icon:'contact'}},
    {path:'/my-cart',component:MyCart , meta: { active: 3,name: '我的购物车' ,icon:'cart-o'}},
    {path:'/me',component:Me , meta: { active: 3, name: '关于我', icon: 'setting-o' }},
    {path:'/login',component:Login , meta: { active: 3, name: '会员登录', icon: 'contact' }},
    {path:'/pay/:id/:value',component:Pay , meta: { name: '结算'}},
    {path:'/pay-success',component:PaySuccess , meta: { name: '结算'}},
    {path:'/order-detail/:index',component:OrderDetail , meta: { name: '订单详情'}}
  ]
});


export default router;
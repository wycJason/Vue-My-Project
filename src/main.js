// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//引入路由和状态管理
import router from './router/index' //路由器
import store from './store/index' //状态管理

import moment from "moment" //格式化UTC

//DevExtreme 样式
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

Vue.config.productionTip = false;

//引入 iView 
import iView from 'iview';
//import 'iview/dist/styles/iview.css';

//引入jquery 
import $ from "jquery";
import "devextreme/dist/dx.all.js";

Vue.use(iView);

//自定义引用全局注册的组件 
import customGlobalComponent from './lib/comGloabal.js'
Vue.use(customGlobalComponent)

// 实际打包时应该不引入mock
if (process.env.NODE_ENV !== 'production') require('./mock/index')
    //import mock from './mock/index'
    //import './mock/index'

//引入和配置axios
//vue项目中安装和使用axios,axios中文说明 https://www.kancloud.cn/yunye/axios/234845
import axios from 'axios' //引入axios
axios.defaults.baseURL = ' https://easy-mock.com/mock/5cc80588cbe995486b6f99d1/jason';
Vue.prototype.$axios = axios; //添加axios到Vue的原型对象上  
Vue.prototype.$moment = moment; //添加moment到Vue的原型对象上  


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router, //注册路由
    store, //注册状态管理
    components: { App },
    template: '<App/>'
})
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HelloWorld from '../components/HelloWorld'
import Custom from '../components/Custom'
import Jason from '../components/Jason'
import StateDemo from '../components/stateDemo'
import GetData from '../components/GetData'
import NotPage from '../components/NotPage'
import DevExtreme from '../components/DevExtreme'
import DevChart from '../components/DevChart'
import DropDownTree from '../components/DropDownTree'
import DevForm from '../components/DevForm'
import DevFormItem from '../components/DevFormItem'
import FormSimple from '../components/FormSimple'
import RenderFun from '../components/RenderFun'
import Draggable from '../components/Draggable'
import Draggable2 from '../components/Draggable2'
import Draggable3 from '../components/Draggable3'
import Sortable from '../components/Sortable'
import DevFormDemo from '../components/DevFormDemo'
import DevFormDemo2 from '../components/DevFormDemo2'
import Aparent from '../components/A-parent'
import RecursionParent from '../components/RecursionParent'
import NestComWrap from '../components/NestComWrap'
import BaiduEcharts from '../components/BaiduEcharts'
import NestedExample from '../components/nested-example'
import DraggableView from '../components/DraggableView'

const router = new Router({
    mode: 'hash',
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/Custom',
            alias: "/Wong",
            name: 'Custom',
            component: Custom,
            meta: {
                requiresAuth: false
            },

        },
        {
            path: '/Jason/:paramsValue',
            name: 'Jason',
            component: () =>
                import ('../components/Jason'),
            //props: true,
            props: (route) => ({
                query: route.query.q
            }),
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/StateDemo',
            name: 'StateDemo',
            component: StateDemo,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/GetData/:postId',
            name: 'GetData',
            component: GetData,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/DevExtreme',
            name: 'DevExtreme',
            component: DevExtreme,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/DevForm',
            name: 'DevForm',
            component: DevForm,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/DevFormItem',
            name: 'DevFormItem',
            component: DevFormItem,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/FormSimple',
            name: 'FormSimple',
            component: FormSimple,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/DevChart',
            name: 'DevChart',
            component: DevChart,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/DropDownTree',
            name: 'DropDownTree',
            component: DropDownTree,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/RenderFun',
            name: 'RenderFun',
            component: RenderFun,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/Draggable',
            name: 'Draggable',
            component: Draggable,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/Draggable2',
            name: 'Draggable2',
            component: Draggable2,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/Draggable3',
            name: 'Draggable3',
            component: Draggable3,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/Sortable',
            name: 'Sortable',
            component: Sortable,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/DevFormDemo',
            name: 'DevFormDemo',
            component: DevFormDemo,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/DevFormDemo2',
            name: 'DevFormDemo2',
            component: DevFormDemo2,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/A-parent',
            name: 'A-parent',
            component: Aparent,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/RecursionParent',
            name: 'RecursionParent',
            component: RecursionParent,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/NestComWrap',
            name: 'NestComWrap',
            component: NestComWrap,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/BaiduEcharts',
            name: 'BaiduEcharts',
            component: BaiduEcharts,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/NestedExample',
            name: 'NestedExample',
            component: NestedExample,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/DraggableView',
            name: 'DraggableView',
            component: DraggableView,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '*',
            name: 'NotPage',
            component: NotPage,
            meta: {
                requiresAuth: false
            }
        }
    ]
});

//全局前置守卫
router.beforeEach((to, from, next) => {
    //next()
    console.group("全局前置守卫")
    console.log("from", from);
    console.log("to", to);
    console.groupEnd();

    //是否需要授认证
    if (to.matched.some(record => record.meta.requiresAuth)) {
        //是否登录
        var isLogin = false;
        if (!isLogin) { //未登录，则跳转至登录页面
            next({
                path: '/',
            })
        } else { //已登录
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
})

//全局解析守卫
router.beforeResolve((to, from, next) => {
    next()
    console.group("全局解析守卫")
    console.log("from", from);
    console.log("to", to);
    console.groupEnd();
})


//全局后置钩子
router.afterEach((to, from) => {
    console.group("全局后置钩子")
    console.log("from", from);
    console.log("to", to);
    console.groupEnd();
})

export default router
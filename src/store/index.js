import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex) //状态管理要在main.js中引入并注册方可使用，在组件中的使用方法  this.$store.commit('increment',data)，触发的是mutations对象中的方法

const store = new Vuex.Store({
    state: {
        n: 10,
        v: "",
        message: "这是消息",
        count: 1,
        todos: [{
                id: 1,
                text: 'one',
                done: true
            },
            {
                id: 2,
                text: 'two',
                done: false
            }
        ],
        test: 520,
    },
    //Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。
    //就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
    getters: { //Getter 接受 state 作为其第一个参数：
        doneTodos(state) {
            return state.todos.filter(todo => todo.done) // [{ id: 1, text: 'one', done: true }],
        },
        doneTodosCount: (state) => { //Getter 会暴露为 store.getters 对象，你可以以属性的形式访问这些值： store.getters.doneTodos // -> [{ id: 1, text: '...', done: true }]
            return store.getters.doneTodos.length //1
        },
        getTodoById: (state) => (id) => { //你也可以通过让 getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询时非常有用。
            return state.todos.find(todo => todo.id === id) //store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }
        }
    },
    mutations: { //mutations它会接受 state 作为第一个参数：  Mutation 必须是同步函数 ，在组件中的使用方法  this.$store.commit('increment',data)，触发的是mutations对象中的方法
        increment(state, data) { //data:520
            state.count += data;
            console.log(state.count, data) //2,1
        },
        add(state, payload) { //
            state.v = state.n + payload.num; //10+18=28
            console.log(state.n + payload.num) //28
        },
        updateMessage(state, data) {
            state.message = data;
        }
    },
    actions: { //异步方法 Action 提交的是 mutation，而不是直接变更状态。  你可以在组件中使用 this.$store.dispatch('xxx') 分发 action：       对象的解构赋值 let {name, age} = person;  参考：https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014344993159773a464f34e1724700a6d5dd9e235ceb7c000
        //actions函数的一个参数是store,也就是vuex的整个对象，第二参数是一个对象，（只有2个参数）
        incrementAsync({
            state,
            getters,
            commit,
            dispatch,
        }, payload) { //{commit,dispatch,state,getters}=context
            commit('increment', 1000); //1001   1000
            console.log(state.n, getters.doneTodosCount, payload.amount, payload.num); //10 1 10 8
        }
    }
})

export default store
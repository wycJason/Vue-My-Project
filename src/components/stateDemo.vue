<template>
  <!--模板中只能有一个根元素-->
  <div>
    <button @click="stateManage">状态管理1</button>
    <h1>{{msg}}</h1>
    <button @click="doneTodosCount">状态管理2</button>
    <h1>{{value}}</h1>
    <button @click="add">对象风格的提交方式</button>
    <br />
    <br />
    <button @click="action(8)">Action</button>
    <br />
    <br />
    <input v-model="msg" />
    <div>{{message}}</div>

    <div>...mapState:{{mapTest}}</div>
    <div>...mapGetters:{{doneTodosCount}}</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
//Vuex学习:https://vuex.vuejs.org/zh/guide/actions.html
export default {
  data() {
    return {
      msg: "",
      value: "消息"
    };
  },
  methods: {
    //你可以在组件中使用 this.$store.commit('xxx') 提交 mutation
    stateManage() {
      this.$store.commit("increment", 1);
      this.msg = this.$store.state.count; //2
      console.log(this.$store.getters.doneTodos); // [{ id: 1, text: 'one', done: true }]
      console.log(this.$store.getters.doneTodos.length); //1
      console.log(this.$store.getters.doneTodosCount); //1
    },
    doneTodosCount() {
      console.log(this.$store.getters.getTodoById(2)); //{ id: 2, text: '...', done: false }
      console.log(this.$store.getters.doneTodosCount); //1
      this.message = "哈哈哈哈";
    },
    add() {
      this.$store.commit({
        //对象风格的提交方式
        type: "add",
        num: 18
      });
      this.value = this.$store.state.v; //28
    },
    action(n) {
      //通过 store.dispatch 方法触发： 你可以在组件中使用 this.$store.dispatch('xxx') 分发 action
      // 以载荷形式分发
      this.$store.dispatch("incrementAsync", {
        amount: 10,
        num: n
      });
      //或者 以对象形式分发
      /*this.$store.dispatch({
				  type: 'incrementAsync',
				  amount: 10
				})*/
    }
  },
  computed: {
    message: {
      get() {
        return this.$store.state.message;
      },
      set(value) {
        this.$store.commit("updateMessage", value);
      }
    },
    ...mapState({
      mapTest: state => state.test
    }),
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters(["doneTodosCount"])
  }
};
</script>

<style>
</style>

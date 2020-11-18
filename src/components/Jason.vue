<template>
  <div class="hello">
    <h1 class="fontColor fontSize">{{ msg }}</h1>
    <h1>id：{{ id }}</h1>
    <ul>
      <li :key="index" v-for="(item, index) in test">
        {{ item.name }}:{{ item.age }}:{{ index }}
      </li>
    </ul>
    <ul>
      <li :key="index" v-for="(item, index) in obj">{{ index }}:{{ item }}</li>
    </ul>
    <h1>动态路径参数paramsValue：{{ $route.params.paramsValue }}</h1>
    <h1>查询参数id：{{ $route.query.id }}</h1>
    <test>{{ query }}</test>
    <button @click="routerInstance" type="primary">点击</button>
  </div>
</template>

<script>
import "../lib/jason.css";
export default {
  name: "Jason",
  data() {
    return {
      msg: "Welcome to Your Jason App",
      id: this.$route.query.id, //接受参数
      test: [
        { name: "jason", age: 28 },
        { name: "eric", age: 29 },
        { name: "king", age: 30 },
      ],
      obj: {
        project: "Javascript",
        sex: "male",
      },
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log(" beforeRouteEnter !");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log(" beforeRouteUpdate !");
  },
  beforeRouteLeave(to, from, next) {
    console.log(" beforeRouteLeave !");
    const answer = window.confirm(
      "Do you really want to leave? you have unsaved changes!"
    );
    if (answer) {
      next();
    } else {
      next(false);
    }
  },
  props: ["query"],
  watch: {
    "$route.query.id"() {
      //监视查询参数
      this.id = this.$route.query.id;
      console.log(this.$route.query.id);
      console.log(this.$route.params.paramsValue);
      //跳转至HelloWorld组件页
      /*this.$router.push({
		  			name:'HelloWorld',
		  			query:{
		  				order:5201314
		  			}
		  		})*/
    },
  },
  methods: {
    routerInstance(){
      console.log("router",this.$router);
      console.log("route",this.$route);
    }
  },
  created() {
    console.log("$moment");
    console.log(
      this.$moment("2016-09-30T22:04:27.5220743+08:00").format(
        "YYYY-MM-DD HH:mm:ss"
      )
    );
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../lib/jasonCss.css";
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

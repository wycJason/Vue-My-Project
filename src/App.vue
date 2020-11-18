<template>
  <div id="app">
    <div>
			<img src="./assets/images/logo.png">
    </div>
		<button @click="goBack()"> 返回</button>
		<button @click="goCustom()">跳转至Custom组件</button>
		<button @click="goJason()">跳转至Jason组件</button>
		<h3>三种路由方式</h3>
		<h5>第一种</h5>
		<router-link :to="{path: '/Wong'}">Custom</router-link>
		<router-link :to="{path: '/Jason/1',query:{id:11}}">Jason</router-link>
		<router-link :to="{path: '/'}">HelloWorld</router-link>
		<br> <br>
		<h5>第二种</h5>
		<router-link :to="{name: 'Custom'}">Custom</router-link>
		<router-link :to="{name: 'Jason',query:{id:22},params:{paramsValue:2}}">Jason</router-link>
		<router-link :to="{name: 'HelloWorld'}">HelloWorld</router-link>
		 <br> <br>
		<h5>第三种</h5>
		<router-link to="/Custom">Custom</router-link>
		<router-link to="/Jason/3?id=33">Jason</router-link>
		<router-link to="/">HelloWorld</router-link>
		<br> <br>
		<h5>其它</h5>
		<router-link to="/StateDemo">StateDemo</router-link>
		<router-link to="/GetData/1">GetData</router-link>
		<router-link to="/ramdomPath">NotPage</router-link>
		
		<hr />
		<br> <br>	 
     <keep-alive>
         <router-view/>
     </keep-alive>
  	 <br> <br>
  </div>
</template>

<script>
export default {
  name: 'App',
	methods: {
		goBack() {
			window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
		},
		goCustom(){
			this.$router.push("Custom")
		},
		goJason(){
			this.$router.push({name:"Jason",params:{paramsValue:"动态路径参数"},query:{id:4,q:"函数模式"}})
		}
	},
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

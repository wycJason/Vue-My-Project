<template>
    <render :design="{}"></render>
</template>

<script>
import Vue from "vue";
import Test from './ComGlobal.vue';//render函数渲染子组件
//自定义组件
Vue.component("render", {
  props: {
    design: {
      type: Object
    }
  },
  render(h) {
    function appropriateListComponent() {
      return Test;
    }
    return h(appropriateListComponent(), { props: { value: "子组件" } }, "hi,this is child component slot content!");
  }
});

export default {};
</script>

<style>
</style>

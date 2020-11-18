<template>
   <div>
     <h1>全局注册组件:{{value}}</h1>
    <slot></slot>
   </div>
</template>

<script>
export default {
    props:["value"]
}
</script>

<style scoped>

</style>
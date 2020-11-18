<template>
    <div>
        <NestCom>
            <Child :article="article"></Child>
        </NestCom>
    </div>
</template>

<script>
import NestCom from "./NestCom";
import Child from "./A-child";
export default {
  name: "NestComWrap",
  components: {
    NestCom,
    Child
  },
  data() {
      return {
          article:{
              title:"标题",
              content:"内容"
          }
      }
  },
};
</script>
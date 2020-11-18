<template>
    <div class="list-detail">
      <RecursionList :list="list" />
    </div>
</template>
<script>
import RecursionList from "./RecursionList"
export default {
  name: "RecursionParent",
  components: { RecursionList },
  data() {
    return {
      list: [{
          name: "酒店",
          children: [{
              name: "如家",
              children: [{
                  name: "上江路-如家"
                },
                {
                  name: "望江路-如家"
                }]
            },{
              name: "7天",
              children: [{
                  name: "长江路-7天"
                },
                {
                  name: "望江路-7天"
                }]
            }]
        }]
    }
  }
}
</script>
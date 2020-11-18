<!-- Vue SFC -->
<template>
  <div>
    <treeselect
      v-model="value"
      :multiple="false"
      :options="options"
      :disable-branch-nodes="true"
      :show-count="true"
    />
  </div>
</template>
 
<script>
// import the component
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  // register the component
  components: { Treeselect },
  data() {
    return {
      // define default value
      value: null,
      // define options
      options: [
        {
          id: "1",
          label: "a",
          children: [
            {
              id: "1.1",
              label: "a.a",
              children: [
                {
                  id: "1.1.1",
                  label: "a.a.a"
                }
              ]
            },
            {
              id: "1.2",
              label: "a.b"
            }
          ]
        },
        {
          id: "2",
          label: "b"
        },
        {
          id: "3",
          label: "c"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
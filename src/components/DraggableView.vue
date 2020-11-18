<template>
  <section>
      <draggable
        tag="Tabs"
        :list="list"
        :component-data="getComponentData()"
        :disabled="true",
      >
        <TabPane  v-for="item in list" :label="item.name"  :name="item.id" :key="item.id">{{item.name}}</TabPane>
      </draggable>
  </section>
</template>

<script>
//https://github.com/SortableJS/Vue.Draggable
//v-bind 绑定 draggable 组件的配置项   draggable=".drag" 定义哪些列表单元可以进行拖放   本例中只允许li.drag的列表项允许拖放
import draggable from "vuedraggable";
import 'iview/dist/styles/iview.css';
export default {
  name: "DraggableView",
  components: {
    draggable
  },
  data() {
    return {
      list: [
        { name: "Juan", id: "1" },
        { name: "Edgard", id: "2" },
        { name: "Johnson", id: "3" }
      ]
    };
  },
  methods: {
    getComponentData() {
      return {
        on: {
          click: (name)=>{
            console.log(name)
          },
        },
        attrs:{//自定义属性
          custom: "jason"
        },
        props: {//组件Tabs属性
          value: "3",
          type:"card",
        }
      };
    }
  }
};
</script>
<style scoped>

</style>
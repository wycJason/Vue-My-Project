<template>
  <section>
    <div>
      <h3>Draggable 1</h3>
      <draggable
        class="list-group"
        tag="ul"
        :list="list1"
        :group="{ name: 'people', pull: 'clone', put: false }"
        draggable=".drag"
        @choose="chs"
        :move="checkMove"
         v-bind="{
          animation: 200,
          disabled: false,
          ghostClass: 'ghost',
          sort:true,
          clone:clone,
          chosenClass:'selected'
        }"
      >
        <li :class='["list-group-item","drag"]' v-for="element in list1" :key="element.id">{{ element.name }}</li>
      </draggable>
    </div>

    <div>
      <h3>Draggable 2</h3>
      <draggable tag="ul" v-bind="{animation:200}" class="list-group" :list="list2" group="people"  @change="log">
        <li class="list-group-item" v-for="element in list2" :key="element.id">{{ element.name }}</li> 
      </draggable>
    </div>
  </section>
</template>

<script>
//https://github.com/SortableJS/Vue.Draggable
//v-bind 绑定 draggable 组件的配置项   draggable=".drag" 定义哪些列表单元可以进行拖放   本例中只允许li.drag的列表项允许拖放
import draggable from "vuedraggable";
export default {
  name: "clone",
  components: {
    draggable
  },
  data() {
    return {
      list1: [
        { name: "只有这个是可以拖放的", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ]
    };
  },
  methods: {
    chs(evt) {//onChoose：function 列表单元被选中的回调函数
      console.log("列表单元被选中的回调函数:"+evt);
    },
    clone(evt) {
     // debugger
      console.log("克隆:"+evt);
    },
    log(evt) {// 拖拽元素改变位置的时候
       debugger;
      console.log("拖拽元素改变位置的时候:"+evt);
    },
    checkMove(evt) {//onMove：function 当移动列表单元在一个列表容器中或者多个列表容器中的回调函数
     // debugger;
     console.log("移动元素")
      //return evt.draggedContext.element.name !== "apple";
      return true
    }
  }
};
</script>
<style scoped>
.list-group {
  min-height: 20px;
  list-style: none;
}
.list-group-item {
  cursor: move;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ccc;
  margin:3px;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.selected{
  border: 1px solid red;
}
</style>
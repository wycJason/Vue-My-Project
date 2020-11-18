<template>
  <div class="row">
    <div class="col-3">
      <h3>Draggable 1</h3>
      <draggable tag="ul"  class="list-group" :list="list1"  :group="{ name: 'people', pull: 'clone', put: false }" @filter="filter" @change="log" @choose="choose" v-bind="{
          animation: 200,
          disabled: false,
          ghostClass: 'ghost',
          filter:'.ignore-elements',
          preventOnFilter: false,
          sort:true,
          clone:clone,
          chosenClass:'selected',
        }">
        <li
          v-for="(element, index) in list1"
          :class="['list-group-item',{'ignore-elements':index==0}]"
          :key="element.name"
        >
          {{ element.name }} {{ index }}
        </li>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Draggable 2</h3>
      <draggable  tag="ul"  class="list-group" :list="list2" group="people" @change="log">
        <li
          class="list-group-item"
          v-for="(element, index) in list2"
          :key="element.name"
        >
          {{ element.name }} {{ index }}
        </li>
      </draggable>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";

export default {
  name: "two-lists",
  components: {
    draggable
  },
  data() {
    return {
      list1: [
        { name: "张三", id: 1 },
        { name: "李四", id: 2 },
        { name: "王五", id: 3 },
        { name: "赵六", id: 4 }
      ],
      list2: [
        { name: "A", id: 5 },
        { name: "B", id: 6 },
        { name: "C", id: 7 }
      ]
    };
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    },
    choose(evt){
      console.log("choose")
    },
    filter(evt){
      console.log("filter")
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
.ignore-elements {
  cursor: not-allowed;
}
</style>

<template>
  <draggable
    class="list-group"
    tag="ul"
    v-model="list"
    v-bind="{
          animation: 200,
          group: 'description',
          disabled: false,
          ghostClass: 'ghost'
        }"
  >
    <button slot="header">header</button>
    <li class="list-group-item" v-for="element in list" :key="element.order">{{ element.name }}</li>
    <button slot="footer">footer</button>
  </draggable>
</template>

<script>
import Draggable from "vuedraggable";

const message = [
  "vue.draggable",
  "draggable",
  "component",
  "for",
  "vue.js 2.0",
  "based",
  "on",
  "Sortablejs"
];

export default {
  name:"nested",
  components: {
    Draggable
  },
  data() {
    return {
      list: message.map((name, index) => {
        return { name, order: index + 1 };
      })
    };
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
</style>
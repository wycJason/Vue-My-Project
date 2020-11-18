<template>
  <div>
    <ul id="items" class="list-group">
      <li class="list-group-item handle">item 1</li>
      <li class="list-group-item handle">item 2</li>
      <li class="list-group-item handle">item 3</li>
      <li class="list-group-item handle">item 4</li>
      <li class="list-group-item handle">item 5</li>
      <li class="list-group-item handle">item 6</li>
    </ul>

    <br />
    <ul id="swap" class="list-group">
      <li class="list-group-item handle">item 1</li>
      <li class="list-group-item handle">item 2</li>
      <li class="list-group-item handle">item 3</li>
      <li class="list-group-item handle">item 4</li>
      <li class="list-group-item handle">item 5</li>
      <li class="list-group-item handle">item 6</li>
    </ul>
  </div>
</template>

<script>
//文档：https://github.com/SortableJS/Sortable#event-object-demo
//示例：http://sortablejs.github.io/Sortable/#simple-list
// import Sortable from "sortablejs";
import Sortable, { MultiDrag, Swap } from "sortablejs";
Sortable.mount(new MultiDrag(), new Swap());
export default {
  name: "sortable",
  mounted() {
    this.$nextTick(function() { //将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
      // Code that will run only after the
      // entire view has been rendered
      var el = document.getElementById("items");
      var sortable1 = new Sortable(el, {
        animation: 200,
        group: "description",
        disabled: false,
        handle: ".handle",
        ghostClass: "ghost",

        multiDrag: true, // Enable multi-drag
        selectedClass: "selected", // The class applied to the selected items
        fallbackTolerance: 3 // So that we can select items on mobile
      });

      var ele = document.getElementById("swap");
      var sortable2 = new Sortable(ele, {
        animation: 200,
        group: "description",
        disabled: false,
        handle: ".handle",
        ghostClass: "ghost",

        swap: true, // Enable swap plugin
        swapClass: "selected" // The class applied to the hovered swap item
      });
    });
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
  margin: 3px;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.selected {
  border: 1px solid red;
}
</style>
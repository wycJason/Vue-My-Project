<template>
    <div class="list">
        <div class="list-item" v-for="(item, index) in list" :key="index">
            <!-- 列表项名称 -->
            <div class="item-name">
                <span>{{item.name}}</span>
            </div>
            <!-- 判断列表项是否有子列表 -->
            <div v-if="item.children" class="item-children">
                <!-- 递归组件 -->
                <RecursionList :list="item.children"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "RecursionList",
  props: {
    list: Array
  }
};
</script>

<style scoped lang="less">
.list{
    text-align: left;
    .list-item{
        margin-left:20px; 
    }
    .list-children{
        margin-left:40px; 
    }
}
</style>

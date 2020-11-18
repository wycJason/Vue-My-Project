<script>
export default {
    name:"NestCom",
    render(h) {
        let childCom=this.$slots.default;
        return h("main",childCom);
    },
}
</script>
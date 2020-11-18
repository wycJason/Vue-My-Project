<template>
  <div>
    <header>
      <slot name="header" :user="user">头</slot>
    </header>
    <section>
      <slot :user="user" :info="info">身体</slot>
    </section>
    <footer>
      <slot name="footer" :info="info">脚</slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "SlotCom",
  data() {
    return {
      user: {
        firstName: "Jason",
        lastName: "Wong"
      },
      info: {
        age: 28,
        id: 5201314
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

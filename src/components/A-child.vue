<template>
    <section>
        <h1>{{article.title}}</h1>
        <p>{{article.content}}</p>
    </section>
</template>

<script>
export default {
    name:"child",
    props:{
        article:Object,
    }
}
</script>

<style scoped>

</style>
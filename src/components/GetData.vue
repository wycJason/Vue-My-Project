<template>
  <div class="post">
    <div class="loading" v-if="loading">Loading...</div>

    <div v-if="error" class="error">错误消息：{{ error }}</div>

    <div v-if="post" class="content">
      <h2>标题：{{ post.title }}</h2>
      <p>正文：{{ post.body }}</p>
    </div>

    <div class="parent">
      <h3 class="child">less语言应用样式</h3>
    </div>

    <button @click="getDataFromEasyMock">EasyMock获取数据get方法</button>
    <button @click="postDataFromEasyMock">EasyMock获取数据post方法</button>
    <button @click="getMockData">getMockData</button>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import Mock from "mockjs";
export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null
    };
  },
  created() {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    //this.fetchData();
    Cookies.set("name", "jason");

    const user = {
      name: "lia",
      age: 18
    };
    Cookies.set("user", user);
  },
  mounted() {
    console.log(Cookies.get("name"));
    console.log(JSON.parse(Cookies.get("user")));
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;

      //获取数据第一种方式
      //JSONPlaceholder虚拟数据    http://jsonplaceholder.typicode.com/
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(json => {
          //console.log(json);
          this.loading = false;
          if (false) {
            this.error = err.toString();
          } else {
            this.post = json;
          }
        });

      //获取数据第二种方式
      //axios中文说明 https://www.kancloud.cn/yunye/axios/234845
      this.$axios
        .get("https://jsonplaceholder.typicode.com/comments", {
          params: {
            postId: this.$route.params.postId
          }
        })
        .then(function(response) {
          console.log("axios数据：" + response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getDataFromEasyMock() {
      //axios中文说明 https://www.kancloud.cn/yunye/axios/234845
      this.$axios
        .get("/getUserPublishedArticles")
        .then(function(response) {
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    postDataFromEasyMock() {
      //axios中文说明 https://www.kancloud.cn/yunye/axios/234845
      this.$axios
        .post("/queryUserArticleByUserID", { id: 1 })
        .then(function(response) {
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getMockData() {
      //https://github.com/nuysoft/Mock/wiki/Mock.mock()
      //记录数据模板。当Mock拦截到匹配 rurl 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回。
      //Mock.mock( rurl, template )
      //在main.js中有引用，所以以下可注销
      /*  Mock.mock(/\/queryUserArticleByUserID/, {
        "list|1-10": [
          {
            "id|+1": 1,
            email: "@EMAIL"
          }
        ]
      }); */
      //axios中文说明 https://www.kancloud.cn/yunye/axios/234845
      this.$axios
        .get("/queryUserArticleByUserID")
        .then(function(response) {
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.parent {
  .child {
    color: red;
  }
}
</style>

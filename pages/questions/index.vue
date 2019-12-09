<template>
    <div>

      <<h1>questions目录下的index</h1>

    </div>

</template>

<script>
  /*
  <link rel="stylesheet" type="text/css" href="./css/page-sj-qa-logined.css"/>
   */
  import  "@/assets/css/page-sj-qa-logined.css"
    export default {
        // 只要访问此页面，跳转到首页
        created() {
            this.$router.push("/questions/0");
        }
    }
</script>

<style scoped>

</style>

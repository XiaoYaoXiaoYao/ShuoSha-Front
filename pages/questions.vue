<template>
   <div>
     <div class="tab-nav ">
       <div class="wrapper">
         <ul class="fl sui-nav nav-tabs navbar-dark">
           <li class="active"><a href="#index" data-toggle="tab">首页</a></li>
           <li><a href="#php" data-toggle="tab">PHP</a></li>
           <li><a href="#js" data-toggle="tab">JavaScript </a></li>
           <li><a href="#python" data-toggle="tab">Python</a></li>
           <li><a href="#java" data-toggle="tab">Java</a></li>
         </ul>
         <span class="fr more"><a href="./qa-allTag.html" target="_blank">更多</a></span>
         <div class="clearfix"></div>
       </div>
     </div>
     <nuxt-child />
   </div>


</template>

<script>
  import '~/assets/css/page-sj-qa-logined.css'

  export default {
        name: "questions"
    }
</script>

<style scoped>

</style>

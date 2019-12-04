<template>
  <div class="wrapper activities">
    <div class="activity-card-list">
      <div class="top-title">
        <h4 class="latest">最新活动</h4>
        <div class="clearfix"></div>
      </div>
      <div class="activity-list">
        <ul class="activity">
          <li class="activity-item" v-for="item in items">
            <div class="activity-inner">
              <a href="http://"></a>
              <div class="img">
                <a href="./activity-detail.html" target="_blank"><img v-bind:src="item.image" alt=""/></a>
              </div>
              <div class="text">
                <p class="title" >{{item.name}}</p>
                <div class="fl goin">
                  <p>时间：{{item.startTime}}</p>
                  <p>城市：{{item.address}}</p>
                </div>
                <div class="fr btn">
                  <span class="sui-btn btn-bao">立即报名</span>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    /*
   <link rel="stylesheet" type="text/css" href="./css/page-sj-activity-index.css"/>
   */
    import  '~/assets//css/page-sj-activity-index.css'
    import activity from "../../api/activity";
    export default {
        name: "index",
        //相当于 jquery中的初始化函数
        asyncData(){
           return  activity.getList(1, 10, {state: true}).then(resp=>{
                //console.log(resp.data.data.rows);
                let  items=resp.data.data.rows;
                return  {items:items}
            }).catch(error=>{
                console.log(error);
            });




        }
    }
</script>

<style scoped>

</style>

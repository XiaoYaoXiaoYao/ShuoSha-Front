<template>
  <div>
    <!--两列布局-->
    <div class="wrapper tag-item">
      <div class="fl left-list">

        <div class="job-position">
          <div class="job-type reco-job">
            <div class="head">
              <h4 class="title pull-left">推荐职位</h4>
              <span class="more pull-right"><a href="#">更多职位推荐&nbsp;&nbsp;<i class="fa fa-angle-right"
                                                                             aria-hidden="true"></i></a></span>
              <div class="clearfix"></div>
            </div>
            <ul class="yui3-g job-list" style="display:block;">
              <li class="yui3-u-1-2 job-item" v-for="item in recommendList">
                <p>
                  <span class="name">
                  <a :href="'/recruit/'+item.id" target="_blank">{{ item.jobName }}</a>
                  </span>
                  <span class="city"><i class="fa fa-map-marker"></i> 北京</span>
                </p>
                <p class="need">
                  <span class="money">{{item.salary}}K</span>/{{item.condition}}/{{item.education}}/
                  <span v-if="item.type==1">全职</span>
                  <span v-else>兼职</span>
                </p>
                <p>
                  <span class="company">阿里云 &middot; {{ item.createTime | timeAGO }}</span>
                </p>
              </li>
            </ul>
          </div>
          <div class="job-type latest-job">
            <div class="head">
              <h4 class="title pull-left">最新职位</h4>
              <span class="more pull-right"><a href="#">更多职位推荐&nbsp;&nbsp;<i class="fa fa-angle-right"
                                                                             aria-hidden="true"></i></a></span>
              <div class="clearfix"></div>
            </div>
            <ul class="yui3-g job-list" style="display:block;">
              <li class="yui3-u-1-2 job-item" v-for="item in newlistList">
              <span class="name">
              <a href="./recruit-jobDetail.html" target="_blank">{{ item.jobName }}</a>
              </span><span class="city"><i class="fa fa-map-marker"></i> 北京</span>

                <p class="need">
                  <span class="money">{{item.salary}}K</span>
                  /{{item.condition}}/{{item.education}}/
                  <span v-if="item.type == 1">
                  全职
                </span>
                  <span v-else>
                  兼职
                </span>
                </p>
                <p><span class="company">阿里云 &middot; {{ item.createTime | timeAGO }}</span></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="fl right-tag">
        <div class="hot-company">
          <p class="mail">提交收录请发邮件至ccccccc@qq.com</p>
          <div class="company">
            <div class="head">
              <h4>热门企业</h4>
            </div>
            <ul class="yui3-g company" style="display:block;">
              <li class="yui3-u-1-3 company-item" v-for="item in hotList ">
                <p><img :src="item.logo" alt=""/></p>
                <p class="title">{{ item.name }}</p>
                <p class="position">
                  <a href="./recruit-company.html" target="_blank">{{ item.jobCount }}个职位</a>
                </p>

              </li>

            </ul>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>


  </div>
</template>

<script>
    /*
    <link rel="stylesheet" type="text/css" href="./css/page-sj-recruit-index.css"/>
     */
    import "@/assets/css/page-sj-recruit-index.css"
    import axios from 'axios'
    import recruitApi from '@/api/recruit'
    import enterprise from "../../api/enterprise";

    export default {
        name: "index",
        // 请求数据,此方法返回的数据会添加到data中
        asyncData() {
            //发起请求:请求最新,推荐职位的列表
            //axios提供了合并请求的功能,将多个请求合并为一个请求进行处理
            return axios.all([
                recruitApi.recommend(),
                recruitApi.newlist(),
                enterprise.hotlist()
            ]).then(axios.spread(function (recommendList, newlistList, hotList) {
                return {
                    recommendList: recommendList.data.data,
                    newlistList: newlistList.data.data,
                    hotList: hotList.data.data
                }

            })).catch(error => {
                console.log(error);
            });


        },
        filters: {
            // 获取招聘创建的时间和当前时间进行比较 得到差值
            timeAGO: function (dateTimeStamp) {
                let dateBegin = new Date(dateTimeStamp.replace(/-/g, "/"));//将-转化为/，使用new Date
                let dateEnd = new Date();//获取当前时间
                let dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
                let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
                let leave1 = dateDiff % (24 * 3600 * 1000);    //计算天数后剩余的毫秒数
                let hours = Math.floor(leave1 / (3600 * 1000));//计算出小时数
                //计算相差分钟数
                let leave2 = leave1 % (3600 * 1000);    //计算小时数后剩余的毫秒数
                let minutes = Math.floor(leave2 / (60 * 1000));//计算相差分钟数
                //计算相差秒数
                let leave3 = leave2 % (60 * 1000);      //计算分钟数后剩余的毫秒数
                let seconds = Math.round(leave3 / 1000);
                //console.log(dateEnd);
                console.log(" 相差 " + dayDiff + "天 " + hours + "小时 " + minutes + " 分钟" + seconds + " 秒");
                if (dayDiff > 0) {
                    return dayDiff + "天前"
                }
                if (hours > 0) {
                    return hours + "小时前"
                }
                if (minutes > 0) {
                    return minutes + "分钟前";
                }
                if (seconds > 0) {
                    return seconds + "秒前";
                }
            }
        }
    }
</script>

<style scoped>

</style>

<template>
  <!--中间布局-->
  <div class="wrapper activities">
    <h1>阿里云2019中国云栖大会</h1>
    <div class="img-text">
      <div class="left-img">
        <img style="height: 250px;" :src="item.image" alt=""/>
      </div>
      <div class="right-txt">
        <p>开始时间：{{ item.startTime }}</p>
        <p>结束时间：{{ item.endTime }} </p>
        <p>举办地点：{{ item.address }} </p>
        <p>主办方：{{ item.sponsor }}</p>
        <p>报名截止： {{ item.enrollTime }}</p>
        <div class="join">
          <button class="sui-btn btn-danger">立即报名</button>
          <span class="will">报名即将开始</span>
        </div>
      </div>
    </div>
    <div class="simple-text">
      <div class="left-content">
        <div class="content-item">
          <div class="tit">
            <span>大会介绍</span>
          </div>
          <div class="text">
            <h4>云栖大会</h4>
            <p>云栖大会的前身可追溯到2010年的地方与行业网站峰会，开创业内云计算领域专业会议先河；
              2011年演变成阿里云开发者大会，成为面向整个云产业生态的大会；到2015年正式更名为“云栖大会”，云栖大会这个全新的品牌，源于云栖联盟，源于大会举办地云栖小镇，源于从2010年到2014年间云计算产业的历史变迁。云栖大会现已成为阿里巴巴集团技术实力和科技生态的全景展示平台，是全球最具影响力的科技展会之一。</p>
          </div>
        </div>
        <div class="content-item">
          <div class="tit">
            <span>议题简介</span>
          </div>
          <div class="text">
            <h4>7月7日，星期五</h4>
            <p>#驱动数字中国</p>
            <p>
              重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用</p>
          </div>
          <div class="text">
            <p>#驱动数字中国</p>
            <p>
              重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用</p>
          </div>
          <div class="text">
            <p>#驱动数字中国</p>
            <p>
              重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用</p>
          </div>
          <div class="text">
            <p>#驱动数字中国</p>
            <p>
              重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用</p>
          </div>
          <div class="text">
            <p>#驱动数字中国</p>
            <p>
              重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用重磅发布：第四届中间件性能挑战赛——挑战双十一万亿级服务调用</p>
          </div>
        </div>
      </div>
      <div class="right-intro">
        <div class="content-item">
          <div class="tit">
            <span>活动组织者</span>
          </div>
          <div class="text">
            <p>主办方： 阿里云</p>
          </div>
        </div>
        <div class="content-item">
          <div class="tit">
            <span>相关链接</span>
          </div>
          <div class="text">
            <p>活动官网： 阿里云.com</p>
          </div>
        </div>
        <div class="content-item">
          <div class="tit">
            <span>分享扩散</span>
          </div>
          <div
            class="social-share"
            data-sites="weibo, qq, qzone, wechat"
            data-url="xxx.com"
            :data-title="item.name">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /*
  <link rel="stylesheet" type="text/css" href="./css/page-sj-activity-detail.css"/>
   */
  import  "@/assets//css/page-sj-activity-detail.css"
  import activity from "@/api/activity";
    export default {
        name: "_id",
        // 通过params获取到动态路由的参数
        asyncData({params}){
           return  activity.findById(params.id).then(resp => {
                //console.log(resp.data);
                console.log("获取到数据了: "+JSON.stringify(resp.data));
                return {item: resp.data.data}
            }).catch(error => {
                console.log(error);
            });
        },
        // js css 文件存放到服务器上了
        // https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/js/social-share.min.js
        // https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/css/share.min.css
        head: {
            script: [
                {
                    src: 'https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/js/social-share.min.js'
                }
            ],
            link: [
                {
                    rel: "stylesheet",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/css/share.min.css"
                }
            ]
        }

    }
</script>

<style scoped>

</style>

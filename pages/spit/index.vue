<template>
  <div>
    <!--两列布局-->
    <div class="wrapper tag-item">
      <div class="fl left-list">
        <div class="tc-data-list">
          <div class="tc-list">
            <ul class="detail-list">
              <li class="qa-item" v-for="(item,index) in items">
                <div class="fl record">
                  <div class="number">
                    <div class="border useful">
                      <p class="usenum"><a href="#" class="zan" v-on:click.prevent="thumbUpClick(index)">
                        <i v-if="item.thumb" class="fa fa-thumbs-up color " aria-hidden="true"></i>
                        <i v-else class="fa fa-thumbs-up" aria-hidden="true"></i>
                      </a>
                      </p>
                      <p class="zannum"> {{ item.thumbUp }}</p>
                    </div>
                    <div class="border answer">
                      <a href="#" class="star"><i class="fa fa-star-o" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
                <div class="info">
                  <p class="text">
                    <a :href="'/spit/'+ item._id" target="_blank">{{ item.content }}</a>
                  </p>
                  <div class="other">
                    <div class="fl date">
                      <span>{{ item.publishTime }}</span>
                    </div>
                    <div class="fr remark">
                      <a href="#" data-toggle="modal" data-target="#shareModal" class="share"><i
                        class="fa fa-share-alt" aria-hidden="true"></i> 分享</a>
                      <a href="#" data-toggle="modal" data-target="#remarkModal" class="comment"><i
                        class="fa fa-commenting" aria-hidden="true"></i> 回复</a>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
              </li>
            </ul>
          </div>
        </div>
        <!-- <script>
       $(function () {
           $(".zan").click(function () {
               $(this).children(".fa").toggleClass("color");
               var c = parseInt($(this).parent().siblings(".zannum").html());
               c = c++;
           });
           $(".star").click(function () {
               console.log("eeee");
               $(this).children(".fa").removeClass("fa-star-o").addClass("fa-star color");
           });
           $(".detail-list").unbind("scroll").bind("scroll", function (e) {
               var sum = this.scrollHeight;
               if (sum - 10 <= $(this).scrollTop() + $(this).height()) {
                   $(".detail-list").append($("li").clone());
               }
           });
       })

   </script> -->
      </div>
      <div class="fl right-tag">
        <div class="block-btn">
          <p>来个匿名吐槽，发泄一下你心中的怒火吧！</p>
          <a class="sui-btn btn-block btn-share" href="./spit-submit.html" target="_blank">发吐槽</a>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>


  </div>
</template>

<script>
    /*
    <link rel="stylesheet" type="text/css" href="./css/page-sj-spit-index.css"/>
     */

    import "@/assets/css/page-sj-spit-index.css"
    import spitApi from '@/api/spit'
    import {getUser} from "@/utils/userinfo"

    export default {
        name: "index",
        asyncData() {
            return spitApi.getList(1, 10).then(resp => {
                return {items: resp.data.data.rows}
            }).catch(error => {
                console.log(error);
            });
        },

        methods: {
            thumbUpClick(index) {

                // 判断是否登录
                if (getUser().token != undefined) {

                    //console.log("点击了" + item.content);
                    // 设置点赞状态
                    if (this.items[index].thumb) {
                        // 已经点赞
                        this.items[index].thumbUp--;
                        this.items[index].thumb = false;
                    } else {
                        this.items[index].thumbUp++;
                        this.items[index].thumb = true;
                    }
                    //this.items[index].thumb = true;
                    //发起点赞请求
                    spitApi.thumbup(this.items[index]._id).then(resp => {
                        console.log(resp.data)
                    }).catch(error => {
                        console.log(error)
                    })
                } else {
                    this.$message.error("登陆后才能点赞，请你登陆！");
                    // 没有登陆，跳转到登陆页面
                    // 使用js代码跳转路由     url 表示登陆成功后跳转到的页面
                    /*
                    $route 对象表示路由信息,里面是路由的配置信息,通过此对象可以获取路由的url,路由的query参数
                    $router对象表示的是定义的路由的对象,通过此对象可以进行页面的跳转
                     */
                    this.$router.push({path: '/login', query: {url: '/spit'}})
                }

            }


        }

    }
</script>

<style scoped>

</style>

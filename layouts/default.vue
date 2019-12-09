<template>
  <div>
    <div class="wrapper">
      <!--头部导航-->
      <header>
        <div class="sui-navbar">
          <div class="navbar-inner">
            <a href="index-logined.html" class="sui-brand"><img src="~/assets/img/logo.png" alt="社交"/></a>
            <ul class="sui-nav">
              <!--路由导航   active-class="active"  exact 来匹配windows.location中的url是否和路由的路径相同,相同的话,就会成为选中的状态-->
              <nuxt-link to="/" tag="li" active-class="active" exact><a>头条</a></nuxt-link>
              <nuxt-link to="/question" tag="li" active-class="active" exact><a>问答</a></nuxt-link>
              <nuxt-link to="/activity" tag="li" active-class="active" exact><a>活动</a></nuxt-link>
              <nuxt-link to="/friend" tag="li" active-class="active" exact><a>交友</a></nuxt-link>
              <nuxt-link to="/spit" tag="li" active-class="active" exact><a>吐槽</a></nuxt-link>
              <nuxt-link to="/recruit" tag="li" active-class="active" exact><a>招聘</a></nuxt-link>
            </ul>
            <form class="sui-form sui-form pull-left">
              <input type="text" placeholder="输入关键词..."/>
              <!--              <span class="btn-search fa fa-search"></span>-->
            </form>

            <div v-show="user.token == undefined" class="sui-nav pull-right info">
              <li><a href="/login">登陆</a></li>
            </div>
            <div v-show="user.token != undefined" class="sui-nav pull-right info">
              <li><a href="./other-notice.html" target="_blank" class="notice">{{ user.name }}</a></li>
              <li><a href="./person-homepage.html" target="_blank" class="homego">
                <img :src="user.avatar" alt="用户头像"/></a>
              </li>
              <li><button @click="logout">退出登录</button></li>
            </div>
          </div>
        </div>
      </header>
    </div>
    <nuxt />
    <!--底部版权-->
    <div class="footer">
      <div class="wrapper">
        <div class="footer-bottom">
          <div class="link">
            <dl>
              <dt>
                网站相关
              </dt>
              <dd>
                关于我们
              </dd>
              <dd>
                服务条款
              </dd>
              <dd>
                帮助中心
              </dd>
              <dd>
                编辑器语法
              </dd>
            </dl>
            <dl>
              <dt>
                常用链接
              </dt>
              <dd>
                矽鼎科技
              </dd>
              <dd>
                XX论坛
              </dd>
            </dl>
            <dl>
              <dt>
                联系我们
              </dt>
              <dd>
                联系我们
              </dd>
              <dd>
                加入我们
              </dd>
              <dd>
                建议反馈
              </dd>
            </dl>
            <dl>
              <dt>
                关注我们
              </dt>
              <dd>
                微博
              </dd>
              <dd>
                twitter
              </dd>
            </dl>
            <div class="xuke">
              <h3>内容介绍</h3>
              <p>本站所有内容仅取之于网络，感谢原作者。</p>
            </div>
          </div>
          <p class="Copyright">Copyright © 2019 XXX社区 当前版本 1.0.0</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

    /*
  <link rel="stylesheet" type="text/css" href="./plugins/normalize-css/normalize.css"/>
    <link rel="stylesheet" type="text/css" href="./plugins/yui/cssgrids-min.css"/>
    <link rel="stylesheet" type="text/css" href="./plugins/sui/sui.min.css"/>
    <link rel="stylesheet" type="text/css" href="./plugins/sui/sui-append.min.css"/>
    <link rel="stylesheet" type="text/css" href="./plugins/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" type="text/css" href="./css/widget-base.css"/>
    <link rel="stylesheet" type="text/css" href="./css/widget-head-foot.css"/>
   */
    import '~/assets/plugins/normalize-css/normalize.css'
    import '~/assets/plugins/yui/cssgrids-min.css'
    import '~/assets/plugins/sui/sui.min.css'
    import '~/assets/plugins/sui/sui-append.min.css'
    import '~/assets/plugins/font-awesome/css/font-awesome.min.css'
    import '~/assets/css/widget-base.css'
    import '~/assets/css/widget-head-foot.css'
    import {getUser, removeUser} from "@/utils/userinfo"
    //必须加这句代码
    export default {
        data(){
            return {
                user: {}
            }

        },
        created() {
            this.user = getUser();
        },
        methods:{
            logout(){
                // 退出登录，清除用户数据
                removeUser();
                location.href = "/";
            }
        }
    }

</script>

<style>

</style>

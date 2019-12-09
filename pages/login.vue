<template>
  <div class="wrapper loginsign">
    <div class="item signup">
      <div class="form">
        <h3 class="loginsign-title">注册新账号</h3>
        <form class="sui-form">
          <div class="control-group">
            <label for="inputname" class="control-label">名字</label>
            <div class="controls">
              <input type="text" placeholder="真实姓名或常用昵称" class="input-xlarge" v-model="pojo.nickName"/>
            </div>
          </div>
          <div class="different">
            <div class="radio-content">
              <div id="a1" class="phone">
                <div class="control-group number">
                  <input type="text" placeholder="仅支持大陆手机号" v-model="pojo.mobile" class="input-xlarge"/>
                </div>
                <div class="control-group code">
                  <div class="input-append">
                    <input id="appendedInputButton"  type="text" placeholder="短信验证"
                           class="span2 input-large msg-input" v-model="pojo.code" />
                    <button type="button" class="sui-btn msg-btn" @click="sendSms">获取验证码</button>
                  </div>
                </div>
                <div class="control-group">
                  <label for="inputpassword" class="control-label">密码</label>
                  <div class="controls">
                    <input type="text"  v-model="pojo.password" id="" placeholder="请输入6-16位密码"
                           class="input-xlarge"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="control-group btn-signup">
            <label class="control-label"></label>
            <div class="controls">
              <label> <input type="checkbox"/><span class="type-text"
                                                    style="font-size:12px;">同意协议并接受《服务条款》</span> </label>
              <button type="button" class="sui-btn btn-danger btn-yes"  @click="register">注 册</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="item">
      <div class="form">
        <h3 class="loginsign-title">用户登录</h3>
        <form class="sui-form login-form">
          <div class="control-group">
            <label class="control-label">手机号：</label>
            <div class="controls">
              <input type="text"  v-model="mobile" placeholder="11位手机号" class="input-xlarge"/>
            </div>
          </div>
          <div class="control-group">
            <label for="inputpassword" class="control-label">密码：</label>
            <div class="controls">
              <input type="text" id="inputpassword" v-model="password" placeholder="输入登录密码" class="input-xlarge"/>
            </div>
          </div>
          <div class="controls">
            <label> <input type="checkbox" name="remember-me"/><span class="type-text"
                                                                     style="font-size:12px;">记住登录状态</span>
            </label>
            <button type="button" class="sui-btn btn-danger btn-yes" @click="login">登 录</button>
          </div>
          <div class="other-methods">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  // <link rel="stylesheet" type="text/css" href="./css/page-sj-person-loginsign.css"/>
  import '~/assets/css/page-sj-person-loginsign.css'
  import userApi from '@/api/user'
  import {setUser} from "@/utils/userinfo"

  export default {
    data() {
      return {
          // 记录用户信息
          pojo:{},
          mobile: '',
          password: ''
      }
    },
    methods: {
      sendSms() {
        console.log(this.pojo.mobile);
        userApi.sendsms(this.pojo.mobile).then(resp => {
          console.log(resp.data);
        }).catch(error => {
          console.log(error);
        })
      },
        register(){
            console.log(this.pojo);
            userApi.register(this.pojo,this.pojo.code).then(resp => {
                console.log(resp.data);
                if (resp.data.flag) {
                    this.$message({
                        message: '注册成功',
                        type: 'success'
                    });
                    this.pojo = {};
                }else{
                    this.$message.error(resp.data.message);
                }
            }).catch(error =>{
                console.log(error)
            });
        },
        login() {
            userApi.login(this.mobile, this.password).then(resp => {
                console.log(resp.data.data.token);
                console.log(resp.data.data.name);
                console.log(resp.data.data.avatar);
                setUser(resp.data.data.token, resp.data.data.name, resp.data.data.avatar);

                // 跳转到首页
                location.href = "/";
            }).catch(error => {
                console.log(error)
            })
        }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div class="wrapper tc-detail">
    <div class="fl left-list">
      <div class="tc-detail">
        <!-- 标题区 -->
        <div class="detail-tit">
          <div class="detail-author">
            <a href="javascript:;">{{ pojo.nickName }}</a> 发布
          </div>
          <div class="detail-content">
            <p>
              {{ pojo.content }}
            </p>
          </div>
          <div class="detail-tool">
            <button @click="dialogVisible = true">回复</button>
            <ul>
              <li><span class="star"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 53</span></li>
              <li><a href="#" data-toggle="modal" data-target="#shareModal"><i class="fa fa-share-alt"
                                                                               aria-hidden="true"></i> 44</a>
              </li>
              <li><a data-toggle="modal" data-target="#remarkModal"><i class="fa fa-commenting"
                                                                       aria-hidden="true"></i> 666</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 评论区 -->
        <div class="comment-area">
          <div class="comment-tit">
            <span>评论</span>
          </div>
          <ul class="comment-list" v-for="item in commentList">
            <li>
              <div class="item-photo">
                <img src="~/assets/img/widget-widget-photo.png" alt=""/>
              </div>
              <div class="item-content">
                <p class="author"><a href="javascript:;">{{ item.nickName }}</a> 发布</p>
                <p class="content">{{ item.content }}</p>
              </div>
              <div class="item-thumb">
                <div>
                  <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 52
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="fl right-tag">
      <div class="block-btn">
        <p>来个匿名吐槽，发泄一下你心中的怒火吧！</p>
        <a class="sui-btn btn-block btn-share" href="/spit/submit" target="_blank">发吐槽</a>
      </div>
    </div>
    <div class="clearfix"></div>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <div class="quill-editor"
           :content="content"
           @change="onEditorChange($event)"
           v-quill:myQuillEditor="editorOption">
      </div>
      <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>
    //  <link rel="stylesheet" type="text/css" href="./css/page-sj-spit-detail.css"/>
    import '~/assets/css/page-sj-spit-detail.css';
    import axios from "axios";
    import spitApi from '@/api/spit'
    export default {
        name: "_id",
        data(){
            return {
                dialogVisible: false,
                content: '我是默认值',
                //spitId: '',
                editorOption: {
                    // some quill options
                    modules: {
                        toolbar: [
                            [{size: ["small", false, "large"]}],
                            ["bold", "italic"],
                            [{list: "ordered"}, {list: "bullet"}],
                            ["link", "image"]
                        ]
                    }
                }
            }

        },
        methods: {
            onEditorChange({editor, html, text}) {
                console.log(html);
                this.content = html;
            },
            save() {
                console.log(this.content);
                // 当前吐槽的id
                console.log(this.pojo._id);
                spitApi.submit(this.content, this.pojo._id).then(resp => {
                    console.log(resp.data);
                    this.dialogVisible=false
                }).catch(error => {
                    console.log(error)
                })
            }
        },
        asyncData({params}){
            return axios.all([
                spitApi.findById(params.id),
                spitApi.commentlist(params.id, 1, 10)
            ]).then(axios.spread(function (pojo, commentList) {
                console.log("1  "+JSON.stringify(pojo.data.data));
                console.log(commentList.data.data.rows);
                return {
                    pojo: pojo.data.data,
                    commentList: commentList.data.data.rows
                }
            })).catch(error => {
                console.log(error);
            });
        }
    }
</script>

<style scoped>
  .quill-editor {
    min-height: 200px;
    max-height: 400px;
    overflow-y: auto;
  }
</style>

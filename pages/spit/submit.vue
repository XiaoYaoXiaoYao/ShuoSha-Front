<template>
  <!--两列布局-->
  <div class="wrapper release-tc">
    <div class="release-box">
      <h3>发布吐槽</h3>
      <div class="editor">
        <div class="quill-editor"
             :content="content"
             @change="onEditorChange($event)"
             v-quill:myQuillEditor="editorOption">
        </div>
        <div class="btns">
          <button class="sui-btn btn-danger btn-release">发布</button>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
  export default {
    name: "submit",
    data() {
      return {
        content: '我是默认值',
        editorOption: {
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
      }
    }
  }
</script>

<style scoped>
.quill-editor {
    min-height: 300px;
    max-height: 600px;
    overflow-y: auto;
  }
</style>

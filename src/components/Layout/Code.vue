<template>
  <div>
    <editor ref='myEditor' v-model="content" @init="editorInit" :lang="propLang" theme="monokai" width="100%"
            :height="height" :options="options">
    </editor>
  </div>
</template>

<script>
import editor from 'vue2-ace-editor'
export default {
  name: "Code",
  components: {
    editor
  },
  props: {
    propContent: {
      // 内容
      type: String,
      default: ''
    },
    propLang: {
      // 语言
      type: String,
      default: 'javascript'
    },
  },
  data () {
    return {
      content: '',
      height: document.documentElement.clientHeight - 60,
      options: {
        // 配置
        enableBasicAutocompletion: true, // 启用基本自动完成
        enableSnippets: true, // 启用代码段
        enableLiveAutocompletion: true, // 启用实时自动完成
        readOnly: false,
        showPrintMargin:false,
      }
    }
  },

  methods: {
    //  依照需要添加
    editorInit: function () {
      require('brace/ext/language_tools')
      require('brace/theme/monokai')
      require('brace/snippets/dockerfile')
      require('brace/mode/dockerfile')
      require('brace/mode/json')
      require('brace/snippets/json')
      require('brace/snippets/javascript')
      require('brace/mode/javascript')
    }
  },
  created () {
    this.content = this.propContent
  },
  watch: {
    propContent: function (newVal) {
      this.content = newVal
    },
    // 将编辑的内容实时传给父组件
    content: function (newVal) {
      this.$emit('editor-change', newVal, this.propLang)
    }
  }
}
</script>

<style scoped>

</style>
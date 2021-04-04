<template>
  <v-bottom-sheet v-model="sheet" inset>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on"><v-icon>mdi-file-upload</v-icon></v-btn>
    </template>
    <v-card class="text-center" min-height="300">
      <v-card-text>
        <h1 class="title font-weight-light grey--text pa-4 text-center mt-auto">上传文件</h1>
        <v-row>
          <v-col cols="12">
            <v-progress-linear rounded color="blue" height="5"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field outlined label="上传路径" prefix="/" hint="如果不存在指定目录,将会自动创建"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-file-input chips multiple label="选择文件" outlined show-size counter prepend-icon="mdi-file"></v-file-input>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn color="success"><v-icon left>mdi-file-upload</v-icon>上传</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>

<script>
export default {
  name: "UploadFile",
  data() {
    return {
      sheet: false
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <v-bottom-sheet v-model="sheet" inset>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on"><v-icon>mdi-folder-plus</v-icon></v-btn>
    </template>
    <v-card class="text-center" height="250px">
      <v-card-text>
        <h1 class="title font-weight-light grey--text pa-4 text-center mt-auto">创建新目录</h1>
        <v-row>
          <v-col cols="6">
            <v-text-field outlined label="文件夹路径" prefix="/" hint="如果不存在指定目录,将会自动创建"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field outlined label="文件夹名称"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn color="success"><v-icon left>mdi-folder-plus</v-icon>创建</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>

<script>
export default {
  name: "AddFolder",
  data() {
    return {
      sheet: false
    }
  }
}
</script>

<style scoped>

</style>
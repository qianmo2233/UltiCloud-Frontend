<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay persistent transition="dialog-bottom-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="warning" block dark v-bind="attrs" v-on="on"><v-icon left>mdi-file-edit</v-icon>编辑文件</v-btn>
    </template>
    <v-card>
      <v-toolbar dark color="dark" height="60px" rounded="0">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>文件编辑器</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="dialog = false">
            保存
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <Code/>
    </v-card>
  </v-dialog>
</template>

<script>
import Code from "@/components/Layout/Code";
export default {
  name: "Editor",
  components: {Code},
  data () {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    }
  },
}
</script>

<style scoped>

</style>
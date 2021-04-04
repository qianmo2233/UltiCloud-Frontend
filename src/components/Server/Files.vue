<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-hover v-slot="{ hover }">
          <v-alert border="left" colored-border type="warning" :elevation="hover ? 12 : 6" :class="{ 'on-hover': hover }">
            此页面仅供演示,相关功能仍在开发中
          </v-alert>
        </v-hover>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-toolbar class="mb-3" flat>
          <v-text-field clearable flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" :label="$t('Search')"></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <UploadFile/>
            <AddFile/>
            <AddFolder/>
            <v-btn icon :disabled="tree.length === 0"><v-icon>mdi-download</v-icon></v-btn>
            <v-btn icon :disabled="tree.length === 0"><v-icon>mdi-delete</v-icon></v-btn>
            <v-btn icon :disabled="tree.length === 0"><v-icon>mdi-zip-box</v-icon></v-btn>
            <v-btn icon :disabled="!isZip"><v-icon>mdi-export-variant</v-icon></v-btn>
            <v-btn icon :disabled="tree.length === 0"><v-icon>mdi-clipboard-file</v-icon></v-btn>
            <v-btn icon :disabled="clipboard.length === 0"><v-icon>mdi-content-paste</v-icon></v-btn>
            <v-btn icon :disabled="clipboard.length === 0"><v-icon>mdi-file-move</v-icon></v-btn>
            <v-btn icon><v-icon>mdi-refresh</v-icon></v-btn>
          </template>
        </v-toolbar>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-sheet elevation="12" max-height="1000" min-height="100">
          <v-container fluid>
            <v-treeview v-model="tree" :items="items" activatable item-key="name" open-on-click transition selectable return-object :active.sync="active">
              <template v-slot:label="{item}">
                <v-lazy transition="fade-transition">
                  <v-list-item>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                  </v-list-item>
                </v-lazy>
              </template>
              <template v-slot:prepend="{ item, open }">
                <v-lazy transition="fade-transition">
                  <v-icon v-if="!item.file">
                    {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
                  </v-icon>
                  <v-icon v-else>
                    {{ files[item.file] }}
                  </v-icon>
                </v-lazy>
              </template>
            </v-treeview>
          </v-container>
        </v-sheet>
      </v-col>
      <v-col cols="8">
        <v-expand-transition>
          <v-sheet max-height="1000" elevation="12" min-height="100">
            <v-card-text>
              <div v-if="active.length === 0" class="title font-weight-light grey--text pa-4 text-center">
                点击一个项目来查看
              </div>
              <div v-else>
                <v-subheader>文件详细<v-divider inset/></v-subheader>
                <v-list>
                  <v-list-item>
                    <v-list-item-title>名称</v-list-item-title>
                    <v-list-item-subtitle>{{ active[0].name }}</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>类型</v-list-item-title>
                    <v-list-item-subtitle>{{ active[0].file ? active[0].file : '未知' }}</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>大小</v-list-item-title>
                    <v-list-item-subtitle>未知</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>修改日期</v-list-item-title>
                    <v-list-item-subtitle>未知</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>所有者</v-list-item-title>
                    <v-list-item-subtitle>root</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
                <v-subheader>操作<v-divider inset/></v-subheader>
                <v-row>
                  <v-col cols="4">
                    <Editor/>
                  </v-col>
                  <v-col cols="4">
                    <v-btn color="info" block dark><v-icon left>mdi-rename-box</v-icon>重命名</v-btn>
                  </v-col>
                  <v-col cols="4">
                    <v-btn color="error" block dark><v-icon left>mdi-delete</v-icon>删除文件</v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-card-text>
          </v-sheet>
        </v-expand-transition>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AddFile from "@/components/FileManager/AddFile";
import AddFolder from "@/components/FileManager/AddFolder";
import UploadFile from "@/components/FileManager/UploadFile";
import Editor from "@/components/FileManager/Editor";
export default {
  name: "Files",
  components: {Editor, UploadFile, AddFolder, AddFile},
  computed: {
    isZip() {
      if (this.tree.length === 1) {
        return this.tree[0].file === 'zip' || this.tree[0].file === '7z' || this.tree[0].file === 'rar' || this.tree[0].file === 'gz';
      } else {
        return false
      }
    }
  },
  methods: {

  },
  data() {
    return {
      files: {
        html: 'mdi-language-html5',
        js: 'mdi-nodejs',
        json: 'mdi-code-json',
        md: 'mdi-language-markdown',
        pdf: 'mdi-file-pdf',
        png: 'mdi-file-image',
        jpg: 'mdi-file-image',
        txt: 'mdi-file-document-outline',
        xls: 'mdi-file-excel',
        jar: 'mdi-language-java',
        java: 'mdi-language-java',
        zip: 'mdi-zip-box',
        gz: 'mdi-zip-box',
        '7z': 'mdi-zip-box',
        rar: 'mdi-zip-box',
        yml: 'mdi-file-cog',
        file: 'mdi-file',
      },
      tree: [],
      active: [],
      clipboard:[],
      items: [
        {
          name: '/',
          children: [
            {
              name: 'logs',
              children: [
                {
                  name: '2021-02-12-1.log.gz',
                  file: 'gz'
                },
                {
                  name: '2021-02-12-2.log.gz',
                  file: 'gz'
                },
              ]
            },
            {
              name: 'plugins',
              children: [
                {
                  name: 'PluginMetrics',
                },
                {
                  name: 'UltiTools',
                  children: [
                    {
                      name: 'config.yml',
                      file: 'yml'
                    }
                  ]
                },
                {
                  name: 'UltiTools.jar',
                  file: 'jar'
                },
              ]
            },
            {
              name: 'world',
            },
            {
              name: 'world_nether',
            },
            {
              name: 'world_the_end',
            },
            {
              name: 'banned-ips.json',
              file: 'json',
            },
            {
              name: 'bukkit.yml',
              file: 'yml',
            },
            {
              name: 'commands.yml',
              file: 'yml',
            },
            {
              name: 'eula.txt',
              file: 'txt',
            },
            {
              name: 'help.yml',
              file: 'yml',
            },
            {
              name: 'permissions.yml',
              file: 'yml',
            },
            {
              name: 'server.properties',
              file: 'file',
            },
            {
              name: 'spigot.yml',
              file: 'yml',
            },
            {
              name: 'spigot-1.16.1.jar',
              file: 'jar',
            },
          ]
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>
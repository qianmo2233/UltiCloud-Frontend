<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card elevation="5">
          <v-card-text>
            <v-row>
              <v-col cols="10">
                <h1>授权管理</h1>
              </v-col>
              <v-col cols="2">
                <v-btn color="primary" text class="float-right">添加授权规则</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-data-table :headers="headers" :items="items" item-key="name" class="elevation-5" :search="search" :custom-filter="filterOnlyCapsText" loading loading-text="载入数据中... 请稍后">
          <template v-slot:top>
            <v-col cols="12">
              <v-text-field v-model="search" label="搜索(服务器名称)" outlined class="mx-4"></v-text-field>
            </v-col>
          </template>
          <template v-slot:body.append>
            <tr>
              <td></td>
              <td colspan="4"></td>
            </tr>
          </template>
          <template v-slot:item.action="{}">
            <v-btn icon><v-icon small>mdi-pencil</v-icon></v-btn>
            <v-btn icon><v-icon small>mdi-delete</v-icon></v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
name: "Auth",
  data () {
    return {
      search: '',
      items: [
        {
          name: 'test',
          plugin: 'UltiTools',
          exp: '2021-12-30',
          action: '修改',
        },
      ],
    }
  },
  computed: {
    headers () {
      return [
        {text: '服务器名称', value: 'name',},
        {text: '授权插件', value: 'plugin',},
        {text: '到期时间', value: 'exp',},
        {text: '操作', sortable: false, value: 'action'}
      ]
    },
  },
  methods: {
    filterOnlyCapsText (value, search) {
      return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
    },
  },
}
</script>

<style scoped>

</style>
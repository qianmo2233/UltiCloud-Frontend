<template>
  <v-container>
    <v-subheader>语言<v-divider inset/></v-subheader>
    <v-row>
      <v-col cols="12">
        <v-radio-group mandatory>
          <v-row justify="space-around">
            <v-radio label="中文(简体)" />
            <v-radio label="English(US)" />
          </v-row>
        </v-radio-group>
        <v-row>
          <v-col cols="12" md="2" lg="2" sm="12">
            <v-checkbox label="使用自定义语言"/>
          </v-col>
          <v-col cols="12" md="10" lg="10" sm="12">
            <v-text-field filled label="自定义语言名称"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-subheader>Pro 账号设置<v-divider inset/></v-subheader>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="12">
            <v-switch label="启用Pro版本"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="12">
            <v-text-field label="账号" filled/>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="12">
            <v-text-field label="密码" filled type="password"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-subheader>数据库设置<v-divider inset/></v-subheader>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="12">
            <v-switch label="启用数据库"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="12">
            <v-text-field label="数据库地址" filled/>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="12">
            <v-text-field label="数据库名" filled/>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="6" sm="12">
            <v-text-field label="数据库用户名" filled/>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="12">
            <v-text-field label="数据库密码" filled type="password"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-subheader>玩家显示名称(头衔)设置<v-divider inset/></v-subheader>
    <v-row>
      <v-col cols="12" md="6" lg="6" sm="12">
        <v-text-field label="前缀" filled/>
      </v-col>
      <v-col cols="12" md="6" lg="6" sm="12">
        <v-text-field label="后缀" filled/>
      </v-col>
    </v-row>
    <v-subheader>功能开关<v-divider inset/></v-subheader>
    <v-row>
      <v-col cols="12">
        <v-data-iterator disable-sort disable-pagination hide-default-footer :items="config.functions" :search="config.search">
          <template v-slot:header>
            <v-text-field outlined prepend-inner-icon="mdi-magnify" label="搜索功能..." v-model="config.search"/>
          </template>
          <template v-slot:default="props">
            <v-row>
              <v-col cols="12" sm="12" md="3" lg="2" v-for="item in props.items" :key="item.name">
                <v-switch :label="item.name" v-model="item.enable"/>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MainConfig",
  data: ()=> {
    return {
      config: {
        search: '',
        functions: [
          {
            name: '计分板',
            enable: true,
          },
          {
            name: '家功能',
            enable: true,
          },
          {
            name: '锁箱子功能',
            enable: true,
          },
          {
            name: '邮件功能',
            enable: true,
          },
          {
            name: '入服提示功能',
            enable: true,
          },
          {
            name: '远程背包功能',
            enable: true,
          },
          {
            name: '侧边栏显示装备耐久度功能',
            enable: true,
          },
          {
            name: '多世界管理/传送',
            enable: true,
          },
          {
            name: '聊天前缀功能',
            enable: true,
          },
          {
            name: '彩色聊天功能',
            enable: true,
          },
          {
            name: '聊天艾特功能',
            enable: true,
          },
          {
            name: '白名单',
            enable: true,
          },
          {
            name: '头顶名称前缀后缀显示',
            enable: true,
          },
          {
            name: '登录功能',
            enable: true,
          },
          {
            name: '礼包功能',
            enable: true,
          },
          {
            name: '清理功能',
            enable: true,
          },
          {
            name: 'PAPI变量',
            enable: true,
          },
          {
            name: '死亡惩罚功能',
            enable: true,
          },
          {
            name: '好友功能',
            enable: true,
          },
          {
            name: 'TPA功能',
            enable: true,
          },
          {
            name: '地标功能',
            enable: true,
          },
          {
            name: '返回死亡地功能',
            enable: true,
          },
          {
            name: '返回出生地功能',
            enable: true,
          },{
            name: '自动回复功能',
            enable: true,
          },
          {
            name: '随机传送功能',
            enable: true,
          },{
            name: '飞行指令功能',
            enable: true,
          },
          {
            name: '返回上一次传送点指令功能',
            enable: true,
          },
          {
            name: '新玩家全服欢迎功能',
            enable: true,
          },
          {
            name: '设置主城传送点功能',
            enable: true,
          },
          {
            name: '查看玩家背包指令',
            enable: true,
          },
          {
            name: '查看玩家末影箱指令',
            enable: true,
          },
          {
            name: '交易功能',
            enable: true,
          },
          {
            name: '查看公告功能',
            enable: true,
          },
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
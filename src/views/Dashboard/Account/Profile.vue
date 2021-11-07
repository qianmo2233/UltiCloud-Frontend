<template>
  <v-card elevation="12" rounded>
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col col="12">
            <v-subheader>
              邮箱 Email
              <v-divider inset/>
            </v-subheader>
          </v-col>
        </v-row>
        <v-row>
          <v-col col="12">
            <v-list>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ $store.state.user.email.address }}</v-list-item-title>
                  <v-list-item-subtitle>当前绑定邮箱</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action-text>
                  <v-chip label :color="$store.state.user.email.validated === 'true' ? 'green' : 'red'" dark>
                    <v-icon left>{{ $store.state.user.email.validated === "true" ? "mdi-email-check" : "mdi-email-remove" }}</v-icon>
                    {{ $store.state.user.email.validated === "true" ? "已验证" : "未验证" }}
                  </v-chip>
                </v-list-item-action-text>
              </v-list-item>
            </v-list>
            <v-text-field filled label="在这里输入新的邮箱地址" hint="修改之后需要重新验证" :loading="el" v-model="email">
              <template v-slot:append-outer>
                <v-btn icon :loading="el" @click="em">
                  <v-icon>mdi-check</v-icon>
                </v-btn>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col col="12">
            <v-subheader>
              密码 Password
              <v-divider inset/>
            </v-subheader>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="6" md="6" sm="12">
            <v-text-field filled label="在这里输入新的密码" hint="修改之后需要重新登录" type="password" :loading="pl" v-model="passwd" @keydown.native="keydown($event)"/>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="12">
            <v-text-field filled label="在这里重复新的密码" hint="修改之后需要重新登录" type="password" :loading="pl" v-model="re" @keydown.native="keydown($event)"/>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="12">
            <v-btn color="primary" :loading="pl" @click="pa">
              <v-icon left>mdi-check</v-icon>
              确认修改
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Profile",
  data: () => {
    return {
      email: '',
      passwd: '',
      re: '',
      el: false,
      pl: false,
    }
  },

  methods: {
    em: function () {
      this.el = true
      this.profile.editEmail(this, this.email, function (that) {
        that.el = false
        that.snackbar.Launch(that, "邮箱修改成功")
      }, function (that) {
        that.init.check(that, function () {
          that.profile.editEmail(that, that.email, function (that) {
            that.el = false
            that.snackbar.Launch(that, "邮箱修改成功")
          }, function (that, data) {
            that.el = false
            that.snackbar.Launch(that, "邮箱修改失败: " + data.msg)
          })
        })
      })
    },
    pa: function () {
      this.pl = true
      if (this.passwd !== this.re) {
        this.pl = false
        this.snackbar.Launch(this, "两次密码不一致")
        this.passwd = ''
        this.re = ''
      } else {
        this.profile.editPassword(this, this.passwd, function (that) {
          that.pl = false
          that.auth.logout(that)
        }, function (that) {
          that.init.check(that, function () {
            that.profile.editPassword(that, that.passwd, function (that) {
              that.pl = false
              that.auth.logout(that)
            }, function (that, data) {
              that.pl = false
              that.snackbar.Launch(that, "密码修改失败: " + data.msg)
            })
          })
        })
      }
    },
    keydown: function (event){
      if(event.keyCode === 32){
        event.returnValue = false
      }
    }
  }
}
</script>

<style scoped>

</style>
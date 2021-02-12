<template>
  <v-row>
    <v-col cols="12">
      <v-text-field label="用户名" filled v-model="username" :disabled="loading"></v-text-field>
      <v-text-field label="密码" filled v-model="password" :type="show ? 'text' : 'password'" :disabled="loading" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show = !show"></v-text-field>
    </v-col>
    <v-card-actions>
      <v-row>
        <v-btn text large :disabled="loading" color="red"  @click="$store.state.auth.dialog = false">关闭</v-btn>
        <v-spacer></v-spacer>
        <v-btn text large :loading="loading" :disabled="loading" color="blue">登录</v-btn>
      </v-row>
    </v-card-actions>
  </v-row>
</template>

<script>
export default {
name: "Login",
  data() {
  return {
    username: '',
    password: '',
    loading: false,
    show: false,
  }
  }
}
</script>

<style scoped>

</style>
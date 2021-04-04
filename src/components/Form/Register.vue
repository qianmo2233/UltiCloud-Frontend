<template>
  <v-card>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field label="用户名" outlined :disabled="$store.state.auth.loading" :rules="$store.state.auth.rules.username"></v-text-field>
            <v-text-field label="电子邮箱" outlined :disabled="$store.state.auth.loading" :rules="$store.state.auth.rules.username"></v-text-field>
            <v-text-field label="密码" outlined :disabled="$store.state.auth.loading" :rules="$store.state.auth.rules.password"></v-text-field>
            <v-text-field label="重复密码" outlined :disabled="$store.state.auth.loading" :rules="$store.state.auth.rules.password"></v-text-field>
          </v-col>
          <v-row>
            <v-col cols="12">
              <v-btn block :loading="$store.state.auth.loading" rounded dark large color="blue"><v-icon left>mdi-key</v-icon>注册</v-btn>
            </v-col>
          </v-row>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
name: "Register"
}
</script>

<style scoped>

</style>
<template>
  <v-row class="d-flex justify-end">
    <v-col cols="12">
      <v-card flat color="rgb(0, 0, 0, 0)">
        <v-card-title>双重验证</v-card-title>
        <v-card-subtitle class="mb-6">
          请在下方输入身份验证器显示的数字
        </v-card-subtitle>
        <v-card-text class="text-center">
          <v-divider inset class="mb-6"/>
          <v-row>
            <v-col cols="12">
              <v-otp-input/>
              <v-overlay absolute :value="false">
                <v-progress-circular indeterminate color="indigo"></v-progress-circular>
              </v-overlay>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn color="indigo" to="login" block depressed>
                <v-icon left>mdi-account</v-icon>
                使用其他账号登录
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-divider/>
            </v-col>
            <v-col cols="12">
              <small class="text-caption">双重验证由 MoeLoli 提供支持</small>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TFA"
}
</script>

<style scoped>

</style>
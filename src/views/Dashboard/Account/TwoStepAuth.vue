<template>
  <v-card elevation="12" rounded>
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col col="12">
            <v-subheader>
              身份验证
              <v-divider inset/>
            </v-subheader>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-alert type="info" color="indigo">二步验证基于Google身份验证器，由 MoeLoli 提供服务</v-alert>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-alert type="error" outlined prominent>
              <v-row align="center">
                <v-col>
                  您还没有启用二步验证，请点击右侧按钮以启用
                </v-col>
                <v-col class="shrink">
                  <v-btn text>启用</v-btn>
                </v-col>
              </v-row>
            </v-alert>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TwoStepAuth"
}
</script>

<style scoped>

</style>
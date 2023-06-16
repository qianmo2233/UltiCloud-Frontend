<template>
  <v-container>
    <v-container v-if="developerInfo===undefined">
      <v-card>

      </v-card>
    </v-container>
    <v-container v-else>
      <v-row>
        <v-col cols="4">
          <v-card elevation="10">
            <v-card-title>
              开发者信息
            </v-card-title>
            <v-card-text>ID: {{ developerInfo.userId }}</v-card-text>
            <v-card-text>最大容量: {{ developerInfo.maxAllowedCapacity }}</v-card-text>
            <v-card-text>命名空间: {{ developerInfo.domainName }}</v-card-text>
            <v-card-text>访问密钥: {{ developerInfo.accessToken }}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="8">

        </v-col>
      </v-row>

    </v-container>
  </v-container>
</template>
<script>
import developer from "@/assets/js/developer";

export default ({
  name: "PluginManagement",
  data: () => {
    return {
      developerInfo: {
        userId: "",
        maxAllowedCapacity: 0,
        domainName: "",
        accessToken: ""
      }
    }
  },
  created() {
    developer.checkDeveloper(this, (res) => {
      this.developerInfo = res
    })
  }
})
</script>


<style scoped>

</style>

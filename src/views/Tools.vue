<template>
  <v-row>
    <v-col cols="12" lg="3" md="4" sm="12">
      <v-card>
        <v-card-text>
          <v-list nav dense>
            <v-list-item link to="/tools/config">
              <v-list-item-icon>
                <v-icon>mdi-file-cog</v-icon>
              </v-list-item-icon>
              <v-list-item-title>配置文件生成器</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="9" md="8" sm="12">
      <router-view/>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Tools"
}
</script>

<style scoped>

</style>
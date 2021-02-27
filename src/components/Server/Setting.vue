<template>
  <v-card>
    <v-card-text>
      <v-subheader>重置UltiTools配置<v-divider inset/></v-subheader>
      <v-row>
        <v-col cols="12" sm="3">
          <v-btn color="warning"><v-icon left>mdi-cog-refresh</v-icon>重置UltiTools配置</v-btn>
        </v-col>
        <v-col cols="12" sm="9">
          <v-hover v-slot="{ hover }">
            <v-alert border="left" colored-border type="warning" :elevation="hover ? 12 : 6" :class="{ 'on-hover': hover }">
              此操作将会重置UltiTools所有配置,请备份后进行操作
            </v-alert>
          </v-hover>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Setting"
}
</script>

<style scoped>

</style>
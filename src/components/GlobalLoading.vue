<template>
  <v-dialog width="500" persistent v-model="$store.state.loading">
    <v-card>
      <v-card-text class="text-center">
        <v-container>
          <v-row>
            <v-col cols="12">
              <h2 class="text--primary">正在努力加载中</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-progress-linear indeterminate/>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "GlobalLoading",
}
</script>

<style scoped>

</style>
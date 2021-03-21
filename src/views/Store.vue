<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Ulti 商店</h1>
        <h3>购买Ulti增值服务</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-tabs>
          <v-tab><v-icon left>mdi-cart</v-icon>购买</v-tab>
          <v-tab><v-icon left>mdi-compare-horizontal</v-icon>兑换</v-tab>

          <v-tab-item>
            <Buy/>
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Buy from "@/components/Store/Buy";
export default {
  name: "Store",
  components: {Buy},
}
</script>

<style scoped>

</style>
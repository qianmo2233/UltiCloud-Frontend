<template>
  <div>
    <v-card class="rounded-0" flat>
      <v-card-title>
        <v-avatar color="indigo" class="elevation-6" v-ripple>
          <v-icon dark>mdi-account</v-icon>
        </v-avatar>
        <p class="ml-3 mt-4">John Doe</p>
      </v-card-title>
      <v-card-text>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-chip color="blue" dark class="mr-1 elevation-6" v-ripple v-on="on" v-bind="attrs">普通会员</v-chip>
          </template>
          <span>这是您的会员等级</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-chip color="blue" dark class="mr-1 elevation-6" v-ripple v-on="on" v-bind="attrs">2021-12-22 到期</v-chip>
          </template>
          <span>这是您的会员到期时间<br>如果为"-"则为永久Pro会员或普通会员</span>
        </v-tooltip>
      </v-card-text>
    </v-card>
    <v-divider/>
  </div>
</template>

<script>
export default {
name: "Profile"
}
</script>

<style scoped>

</style>
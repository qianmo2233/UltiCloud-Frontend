<template>
  <v-data-iterator :items="$store.state.server.list" :search="search" :sort-by="sortBy" :sort-desc="sortDesc" hide-default-footer disable-pagination>
    <template v-slot:header>
      <v-fab-transition>
        <v-btn fab color="blue" dark :loading="$store.state.server.loading" v-show="$store.state.serverinfo.window !== 1" @click="dialog" bottom right fixed>
          <v-icon>mdi-server-plus</v-icon>
        </v-btn>
      </v-fab-transition>
      <v-toolbar dark color="blue darken-3" class="mb-1">
        <v-text-field v-model="search" clearable flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" :label="$t('Search')"></v-text-field>
        <template v-if="$vuetify.breakpoint.mdAndUp">
          <v-spacer></v-spacer>
          <v-select v-model="sortBy" flat solo-inverted hide-details :items="keys" prepend-inner-icon="mdi-sort" label="Sort by"></v-select>
          <v-spacer></v-spacer>
          <v-btn-toggle v-model="sortDesc" mandatory>
            <v-btn large depressed color="blue" :value="false">
              <v-icon>mdi-arrow-up</v-icon>
            </v-btn>
            <v-btn large depressed color="blue" :value="true">
              <v-icon>mdi-arrow-down</v-icon>
            </v-btn>
          </v-btn-toggle>
        </template>
      </v-toolbar>
    </template>
    <template v-slot:default="props">
      <v-row>
        <v-col v-for="item in props.items" :key="item.serverName" cols="12" sm="6" md="4" lg="3">
          <v-card v-ripple @click="open(item.serverId)">
            <v-card-title class="subheading font-weight-bold">
              {{ item.serverName }}
            </v-card-title>
            <v-divider></v-divider>
            <v-list dense>
              <v-list-item v-for="(key, index) in filteredKeys" :key="index">
                <v-list-item-content :class="{ 'blue--text': sortBy === key }">
                  {{ $t(key) }}:
                </v-list-item-content>
                <v-list-item-content class="align-end" :class="{ 'blue--text': sortBy === key }">
                  {{ item[key] }}
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-data-iterator>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      search: '',
      filter: {},
      sortDesc: false,
      sortBy: 'serverName',
      keys: [
        'serverId',
        'serverName',
        'serverIp',
        'serverDomain'
      ],
    }
  },
  computed: {
    filteredKeys () {
      return this.keys.filter(key => key !== 'serverName')
    },
  },
  methods: {
    open(window) {
      this.$store.dispatch('serverinfo/setWindow', window)
    },
    dialog() {
      this.$store.dispatch('addserver/setDialog', true)
    },
  },
}
</script>

<style scoped>

</style>
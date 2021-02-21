<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-data-iterator :items="$store.state.server.list" :search="search" :sort-by="sortBy.toLowerCase()" :sort-desc="sortDesc" hide-default-footer disable-pagination :loading="$store.state.server.loading">
          <template v-slot:header>
            <v-toolbar dark color="blue darken-3" class="mb-1">
              <v-row>
                <v-col cols="12">
                  <h1>服务器授权</h1>
                </v-col>
              </v-row>
              <v-text-field v-model="search" clearable flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="Search"></v-text-field>
              <template v-if="$vuetify.breakpoint.mdAndUp">
                <v-spacer></v-spacer>
                <v-select v-model="sortBy" flat solo-inverted hide-details :items="keys" prepend-inner-icon="mdi-magnify" label="Sort by"></v-select>
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
                <v-card>
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
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Auth",
  data () {
    return {
      search: '',
      filter: {},
      sortDesc: false,
      sortBy: 'serverName',
      keys: [
        'serverId',
        'serverName',
        'isActive'
      ],
    }
  },
  computed: {
    filteredKeys () {
      return this.keys.filter(key => key !== 'serverName')
    },
  },
  watch: {
    '$store.state.user.auth.status': function () {
      this.getList()
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList () {
      if (this.$store.state.user.auth.status) {
        this.$store.dispatch('server/setLoading', true)
        this.$GetServer.getList(this, function (that, List) {
          that.$store.dispatch('server/setList', List)
          that.$store.dispatch('server/setLoading', false)
        }, function (that) {
          that.$Init.boot(that, function (that) {
            that.$GetServer.getList(that, function (that, List) {
              that.$store.dispatch('server/setList', List)
              that.$store.dispatch('server/setLoading', false)
            }, function (that) {
              that.$SnackBar.Launch(that, '服务器列表获取失败')
              that.$store.dispatch('server/setLoading', false)
            })
          })
        })
      }
    },
  },
}
</script>

<style scoped>

</style>
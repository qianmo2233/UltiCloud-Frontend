<template>
  <v-autocomplete v-if="$vuetify.breakpoint.mdAndUp && $store.state.user.auth.status"
      v-model="selected"
      class="mt-7 ml-12"
      solo-inverted
      clearable
      prepend-inner-icon="mdi-magnify"
      label="全局搜索"
      placeholder="搜索页面,活动,功能 支持模糊匹配"
      :search-input.sync="query"
      :loading="loading"
      :items="results"
      append-icon=""
      :filter="filter"
  >
    <template v-slot:item="data">
      <v-list-item link :to="data.item.link">
        <v-list-item-title>{{ data.item.zh }}</v-list-item-title>
        <v-list-item-subtitle>{{ data.item.page }}</v-list-item-subtitle>
      </v-list-item>
    </template>
  </v-autocomplete>
</template>

<script>
import algoliasearch from 'algoliasearch'
export default {
  name: "GlobalSearch",
  data: () => {
    return {
      query: '',
      loading: false,
      results: [],
      selected: null,
      searcher: null,
      index: null
    }
  },
  created() {
    this.searcher = algoliasearch('UT5QRW3KSK', '26b857c9553d82db3617a87ac9455959');
    this.index = this.searcher.initIndex('UltiCloud');
  },
  watch: {
    query (val) {
      if (!val) {
        this.results = []
        return
      }
      val && val !== this.select && this.queryResults(val)
    },
  },
  methods: {
    queryResults(val) {
      this.loading = true
      this.index.search({query: val}).then(content => {
        this.results = content.hits
        this.loading = false
      });
    },
    filter () {
      return true
    }
  }
}
</script>

<style scoped>

</style>
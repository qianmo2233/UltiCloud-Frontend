<template>
  <v-container>
    <v-subheader>聊天前缀<v-divider inset/></v-subheader>
    <v-row>
      <v-col cols="12">
        <v-combobox
            v-model="model"
            :filter="filter"
            :hide-no-data="!search"
            :items="items"
            :search-input.sync="search"
            hide-selected
            label="聊天前缀 支持PAPI变量"
            filled
            multiple
        >
          <template v-slot:no-data>
            <v-list-item>
              <span class="subheading">Create</span>
              <v-chip
                  :color="`${colors[nonce - 1]} lighten-2`"
                  label
                  small
                  class="ml-1"
              >
                {{ search }}
              </v-chip>
            </v-list-item>
          </template>
          <template v-slot:selection="{ attrs, item, parent, selected }">
            <v-chip
                v-if="item === Object(item)"
                v-bind="attrs"
                :color="`${item.color} lighten-3`"
                :input-value="selected"
                label
                small
            >
          <span class="pr-2">
            {{ item.text }}
          </span>
              <v-icon
                  small
                  @click="parent.selectItem(item)"
              >
                $delete
              </v-icon>
            </v-chip>
          </template>
          <template v-slot:item="{ index, item }">
            <v-text-field
                v-if="editing === item"
                v-model="editing.text"
                autofocus
                flat
                background-color="transparent"
                hide-details
                solo
                @keyup.enter="edit(index, item)"
            ></v-text-field>
            <v-chip
                v-else
                :color="`${item.color} lighten-3`"
                dark
                label
                small
            >
              {{ item.text }}
            </v-chip>
            <v-spacer></v-spacer>
            <v-list-item-action @click.stop>
              <v-btn
                  icon
                  @click.stop.prevent="edit(index, item)"
              >
                <v-icon>{{ editing !== item ? 'mdi-pencil' : 'mdi-check' }}</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-combobox>
      </v-col>
    </v-row>
    <v-subheader>
      自动回复
      <v-chip label color="blue" class="ml-2"> Pro版本 </v-chip>
      <v-divider inset/>
    </v-subheader>
  </v-container>
</template>

<script>
export default {
  name: "ChatConfig",
  data: () => ({
    activator: null,
    attach: null,
    colors: ['green', 'purple', 'indigo', 'cyan', 'teal', 'orange'],
    editing: null,
    editingIndex: -1,
    items: [
      { header: '可以从以下条目选择或新建' },
      {
        text: '%player_world%',
        color: 'blue',
      },
      {
        text: '%ul_job%',
        color: 'blue',
      },
      {
        text: '%ul_level%',
        color: 'blue',
      },
      {
        text: '%player_name%',
        color: 'blue',
      },
      {
        text: '§',
        color: 'blue',
      },
    ],
    nonce: 1,
    menu: false,
    model: [],
    search: null,
  }),

  watch: {
    model (val, prev) {
      if (val.length === prev.length) return

      this.model = val.map(v => {
        if (typeof v === 'string') {
          v = {
            text: v,
            color: this.colors[this.nonce - 1],
          }

          this.items.push(v)

          this.nonce++
        }

        return v
      })
    },
  },

  methods: {
    edit (index, item) {
      if (!this.editing) {
        this.editing = item
        this.editingIndex = index
      } else {
        this.editing = null
        this.editingIndex = -1
      }
    },
    filter (item, queryText, itemText) {
      if (item.header) return false

      const hasValue = val => val != null ? val : ''

      const text = hasValue(itemText)
      const query = hasValue(queryText)

      return text.toString()
          .toLowerCase()
          .indexOf(query.toString().toLowerCase()) > -1
    },
  },
}
</script>

<style scoped>

</style>
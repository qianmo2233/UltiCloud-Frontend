<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-toolbar flat color="rgba(0,0,0,0)">
          <v-toolbar-title>
            <h2>服务器管理</h2>
          </v-toolbar-title>
          <v-spacer/>
          <v-btn text @click="dialog = true">
            <v-icon left>mdi-server-plus</v-icon>
            添加服务器
          </v-btn>
        </v-toolbar>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-alert type="info" color="indigo">点击服务器名称来修改服务器信息</v-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-data-iterator :items="$store.state.server.list" :search="search" hide-default-footer disable-pagination :loading="loading">
          <template v-slot:header>
            <v-row class="d-flex justify-end">
              <v-col cols="12" sm="12" md="4" lg="3">
                <v-text-field v-model="search" clearable flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" color="indigo" label="搜索"></v-text-field>
              </v-col>
            </v-row>
          </template>
          <template v-slot:default="props">
            <v-lazy transition="fade-transition">
              <v-row>
                <v-col cols="12" md="6" lg="4" sm="12" v-for="item in props.items" :key="item.serverId">
                  <v-list>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon>mdi-server</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title @click="openSheet(item)">{{ item.serverName }}</v-list-item-title>
                      <v-list-item-subtitle>
                        <v-icon left>mdi-network</v-icon>
                        {{ item.serverIp }}
                      </v-list-item-subtitle>
                      <v-list-item-action-text>
                        <v-chip label :color="getColor(item.isActive)" dark v-ripple @click="ActiveConfirm(item)">
                          {{ getActiveText(item.isActive) }}
                        </v-chip>
                      </v-list-item-action-text>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col cols="12" md="6" lg="4" sm="12">
                  <v-list>
                    <v-list-item link @click="dialog = true">
                      <v-list-item-icon>
                        <v-icon>mdi-server-plus</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title >点击添加服务器</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-lazy>
          </template>
          <template v-slot:loading>
            <v-row>
              <v-col cols="12" class="d-flex justify-center">
                <loading-bar class="mt-10"/>
              </v-col>
            </v-row>
          </template>
          <template v-slot:no-data>
            <v-row class="fill-height" align-content="center" justify="center">
              <v-col cols="12" class="d-flex justify-center">
                <v-img :src="require('/src/assets/img/empty.svg')" v-show="!$vuetify.theme.dark" max-height="400px" max-width="400px"/>
                <v-img :src="require('/src/assets/img/empty-dark.svg')" v-show="$vuetify.theme.dark" max-height="400px" max-width="400px"/>
              </v-col>
              <v-col class="text-h5 text-center" cols="12">
                这里好像什么都没有...
              </v-col>
            </v-row>
          </template>
          <template v-slot:no-results>
            <v-row class="fill-height" align-content="center" justify="center">
              <v-col cols="12" class="d-flex justify-center">
                <v-img :src="require('/src/assets/img/result.svg')" v-show="!$vuetify.theme.dark" max-height="400px" max-width="400px"/>
                <v-img :src="require('/src/assets/img/result-dark.svg')" v-show="$vuetify.theme.dark" max-height="400px" max-width="400px"/>
              </v-col>
              <v-col class="text-h5 text-center" cols="12">
                并没有符合条件的结果...
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
      </v-col>
    </v-row>
    <v-bottom-sheet v-model="activeConfirm" inset>
      <v-sheet class="text-center" height="200px">
        <v-btn class="mt-6" text :color="Server.isActive === 'true' ? 'red' : 'primary'" @click="toggleActive" :loading="activeLoading">
          <v-icon>{{ Server.isActive === "true" ? "mdi-close" : "mdi-check" }}</v-icon>
          {{ Server.isActive === "true" ? "取消激活" : "激活" }}
        </v-btn>
        <div class="my-3">
          {{ Server.isActive === "true" ? "你确定要取消激活这个服务器吗?" : "你确定要激活这个服务器吗" }}
        </div>
      </v-sheet>
    </v-bottom-sheet>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="indigo">
          <v-toolbar-title>添加服务器</v-toolbar-title>
        </v-toolbar>
        <v-container>
          <v-row class="d-flex justify-center">
            <v-col cols="12" sm="12" md="6" lg="3">
              <v-card flat class="text-center">
                <v-card-text>
                  <v-stepper v-model="e1" class="elevation-0" color="indigo">
                    <v-stepper-header class="elevation-0">
                      <v-stepper-step :complete="e1 > 1" step="1" color="indigo">
                        服务器信息
                      </v-stepper-step>
                      <v-divider></v-divider>
                      <v-stepper-step :complete="e1 > 2" step="2" color="indigo">
                        激活
                      </v-stepper-step>
                    </v-stepper-header>

                    <v-stepper-items>
                      <v-stepper-content step="1">
                        <v-container fluid>
                          <v-text-field outlined label="服务器名称" required :rules="rules" v-model="name"/>
                          <v-text-field outlined label="服务器UUID" required :rules="rules" v-model="uuid"/>
                          <v-text-field outlined label="服务器IP" v-model="ip"/>
                        </v-container>
                      </v-stepper-content>

                      <v-stepper-content step="2">
                        <v-alert :type="$store.state.user.member.pro === 'true' ? 'info' : 'error'">
                          {{ $store.state.user.member.pro === 'true' ? '你现在是Pro会员，可以点击服务器列表右方的标签进行激活' : '你还不是Pro会员，请先购买' }}
                        </v-alert>
                      </v-stepper-content>
                    </v-stepper-items>
                  </v-stepper>
                </v-card-text>
                <v-card-actions>
                  <v-row>
                    <v-col cols="6">
                      <v-btn text color="error" block @click="dialog = false" :disabled="addLoading">
                        <v-icon left>mdi-close</v-icon>
                        取消
                      </v-btn>
                    </v-col>
                    <v-col cols="6" v-if="e1 === 1">
                      <v-btn text color="primary" block @click="addServer" :disabled="isAvailable" :loading="addLoading">
                        下一步
                        <v-icon right>mdi-arrow-right</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col cols="6" v-if="e1 === 2 && $store.state.user.member.pro === 'true'">
                      <v-btn text color="primary" block @click="dialog = false">
                        <v-icon left>mdi-check</v-icon>
                        激活服务器
                      </v-btn>
                    </v-col>
                    <v-col cols="6" v-if="e1 === 2 && $store.state.user.member.pro === 'false'">
                      <v-btn text color="primary" block >
                        <v-icon left>mdi-arrow-right</v-icon>
                        购买Pro会员
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
    <v-bottom-sheet v-model="sheet" inset>
      <v-sheet min-height="200px">
        <v-container fluid>
          <v-row class="mt-6">
            <v-col cols="12" lg="4" md="4" sm="12">
              <v-text-field outlined label="服务器名称" required :rules="rules" v-model="Server.serverName"/>
            </v-col>
            <v-col cols="12" lg="4" md="4" sm="12">
              <v-text-field outlined label="服务器UUID" required :rules="rules" v-model="Server.serverDomain"/>
            </v-col>
            <v-col cols="12" lg="4" md="4" sm="12">
              <v-text-field outlined label="服务器IP" v-model="Server.serverIp"/>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-btn text color="red" block :loading="deleteLoading" :disabled="updateLoading" @click="DeleteServer">
                <v-icon left>mdi-delete</v-icon>
                删除服务器
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn text color="primary" block :loading="updateLoading" :disabled="deleteLoading" @click="update">
                <v-icon left>mdi-check</v-icon>
                保存信息
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-bottom-sheet>
  </v-container>
</template>

<script>
import LoadingBar from "@/components/Layout/LoadingBar";
export default {
  name: "ServerMain",
  components: {LoadingBar},
  data: ()=> {
    return {
      Server: {
        isActive: "false",
      },
      e1: 1,
      dialog: false,
      sheet: false,
      loading: false,
      activeLoading: false,
      deleteLoading: false,
      updateLoading: false,
      addLoading: false,
      deleteConfirm: false,
      activeConfirm: false,
      search: "",
      name: "",
      ip: "",
      uuid: "",
      rules: [
        v => !!v || '此为必填项',
        //v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
    }
  },
  created() {
    if (this.$store.state.user.auth.status) {
      this.loading = true
      this.server.getList(this, function (that, List) {
        that.$store.dispatch('setServerList', List)
        that.loading = false
      }, function (that) {
        that.init.check(that, function () {
          that.server.getList(that, function (that, List) {
            that.$store.dispatch('setServerList', List)
            that.loading = false
          }, function (that) {
            that.snackbar.Launch(that, '服务器列表获取失败')
            that.loading = false
          })
        });
      })
    }
  },
  computed: {
    isAvailable() {
      return (
          this.name === "" || this.uuid === ""
      )
    }
  },
  methods: {
    getActiveText: function (value) {
      if (value === 'true') {
        return '已激活'
      } else {
        return '未激活'
      }
    },
    getColor: function (value) {
      if (value === 'true') {
        return 'green'
      } else {
        return 'red'
      }
    },
    ActiveConfirm: function (server) {
      this.Server = server
      this.activeConfirm = true
    },
    openSheet: function (server) {
      this.Server = server
      this.sheet = true
    },
    toggleActive: function () {
      this.activeLoading = true;
      this.server.updateActive(this, this.Server.serverId, this.Server.isActive === 'true' ? 'false' : 'true', function (that) {
        that.snackbar.Launch(that, that.Server.isActive === 'true' ? '已取消激活' : '已激活')
        that.activeLoading = false;
        that.activeConfirm = false;
        that.loading = true
        that.server.getList(that, function (that, List) {
          that.$store.dispatch('setServerList', List)
          that.loading = false
        }, function (that) {
          that.init.check(that, function () {
            that.server.getList(that, function (that, List) {
              that.$store.dispatch('setServerList', List)
              that.loading = false
            }, function (that) {
              that.snackbar.Launch(that, '服务器列表获取失败')
              that.loading = false
            })
          });
        })
      }, function (that) {
        that.init.check(that, function () {
          that.toggleActive()
        })
      })
    },
    addServer: function () {
      this.addLoading = true
      this.server.add(this, this.name, this.uuid, this.ip, function (that) {
        that.addLoading = false
        that.e1 = 2
        that.name = ""
        that.uuid = ""
        that.ip = ""
        that.server.getList(that, function (that, List) {
          that.$store.dispatch('setServerList', List)
          that.loading = false
        }, function (that) {
          that.init.check(that, function () {
            that.server.getList(that, function (that, List) {
              that.$store.dispatch('setServerList', List)
              that.loading = false
            }, function (that) {
              that.snackbar.Launch(that, '服务器列表获取失败')
              that.loading = false
            })
          });
        })
      }, function (that) {
        that.init.check(that, function () {
          that.server.add(that, that.name, that.uuid, that.ip, function (that) {
            that.addLoading = false
            that.e1 = 2
            that.name = ""
            that.uuid = ""
            that.ip = ""
            that.server.getList(that, function (that, List) {
              that.$store.dispatch('setServerList', List)
              that.loading = false
            }, function (that) {
              that.init.check(that, function () {
                that.server.getList(that, function (that, List) {
                  that.$store.dispatch('setServerList', List)
                  that.loading = false
                }, function (that) {
                  that.snackbar.Launch(that, '服务器列表获取失败')
                  that.loading = false
                })
              });
            })
          }, function (that, data) {
            that.snackbar.Launch(that, "服务器添加失败：" + data.msg)
            that.addLoading = false
          })
        })
      })
    },
    DeleteServer: function () {
      this.deleteLoading = true
      this.server.deleteServer(this, this.Server.serverId, function (that) {
        that.deleteLoading = false
        that.sheet = false
        that.snackbar.Launch(that, "服务器已删除")
        that.server.getList(that, function (that, List) {
          that.$store.dispatch('setServerList', List)
          that.loading = false
        }, function (that) {
          that.init.check(that, function () {
            that.server.getList(that, function (that, List) {
              that.$store.dispatch('setServerList', List)
              that.loading = false
            }, function (that) {
              that.snackbar.Launch(that, '服务器列表获取失败')
              that.loading = false
            })
          });
        })
      }, function (that) {
        that.init.check(that, function () {
          that.server.deleteServer(that, that.Server.serverId, function (that) {
            that.deleteLoading = false
            that.sheet = false
            that.snackbar.Launch(that, "服务器已删除")
            that.server.getList(that, function (that, List) {
              that.$store.dispatch('setServerList', List)
              that.loading = false
            }, function (that) {
              that.init.check(that, function () {
                that.server.getList(that, function (that, List) {
                  that.$store.dispatch('setServerList', List)
                  that.loading = false
                }, function (that) {
                  that.snackbar.Launch(that, '服务器列表获取失败')
                  that.loading = false
                })
              });
            })
          }, function (that, data) {
            that.deleteLoading = false
            that.snackbar.Launch(that, "服务器删除失败:" + data.msg)
          })
        })
      })
    },
    update: function () {
      this.updateLoading = true;
      this.server.updateServer(this, this.Server.serverId, this.Server.serverIp, this.Server.serverDomain, this.Server.serverName, function (that) {
        that.updateLoading = false
        that.sheet = false
        that.snackbar.Launch(that, "服务器已修改")
        that.server.getList(that, function (that, List) {
          that.$store.dispatch('setServerList', List)
          that.loading = false
        }, function (that) {
          that.init.check(that, function () {
            that.server.getList(that, function (that, List) {
              that.$store.dispatch('setServerList', List)
              that.loading = false
            }, function (that) {
              that.snackbar.Launch(that, '服务器列表获取失败')
              that.loading = false
            })
          });
        })
      }, function (that) {
        that.init.check(that, function () {
          that.server.updateServer(that, that.Server.serverId, that.Server.serverIp, that.Server.serverDomain, that.Server.serverName, function (that) {
            that.updateLoading = false
            that.sheet = false
            that.snackbar.Launch(that, "服务器已修改")
            that.server.getList(that, function (that, List) {
              that.$store.dispatch('setServerList', List)
              that.loading = false
            }, function (that) {
              that.init.check(that, function () {
                that.server.getList(that, function (that, List) {
                  that.$store.dispatch('setServerList', List)
                  that.loading = false
                }, function (that) {
                  that.snackbar.Launch(that, '服务器列表获取失败')
                  that.loading = false
                })
              });
            })
          }, function (that) {
            that.init.check(that, function () {
              that.server.getList(that, function (that, List) {
                that.$store.dispatch('setServerList', List)
                that.loading = false
                }, function (that) {
                  that.snackbar.Launch(that, '服务器列表获取失败')
                  that.loading = false
                })
              });
            })
          }, function (that, data) {
            that.snackbar.Launch(that, "服务器修改失败：" + data.msg)
            that.updateLoading = false
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
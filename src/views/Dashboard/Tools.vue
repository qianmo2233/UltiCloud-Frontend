<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>可视化配置文件编辑器</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-tabs>
          <v-tab><v-icon left>mdi-archive</v-icon>远程背包</v-tab>
          <v-tab><v-icon left>mdi-emoticon-dead</v-icon>死亡惩罚</v-tab>
          <v-tab-item>
            <v-container>
              <v-row>
                <v-col cols="12" lg="6" md="6" sm="12">
                  <v-row>
                    <v-col cols="12">
                      <v-subheader>基本设置<v-divider inset/></v-subheader>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field outlined label="远程背包初始价格" placeholder="10000" v-model="remote_bag.price_of_create_a_remote_chest"/>
                      <v-alert type="info" color="indigo">如果启用，远程背包的价格将会随着购买的数量逐步递增</v-alert>
                      <v-checkbox label="启用价格递增" v-model="remote_bag.enable_price_increase"/>
                      <v-text-field outlined label="增加价格比率" placeholder="0.1" v-model="remote_bag.price_increase_rate"/>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" lg="6" md="6" sm="12">
                  <v-row>
                    <v-col cols="12">
                      <v-subheader>结果输出<v-divider inset/></v-subheader>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <pre>
# 配置版本号，请勿更改
config_version: 1.0
# 创建一个远程背包需要的价格
price_of_create_a_remote_chest: {{ remote_bag.price_of_create_a_remote_chest }}
# 是否开启每购买一个背包增加价格
enable_price_increase: {{ remote_bag.enable_price_increase }}
# 每次增加价格的比率（百分比）
price_increase_rate: {{ remote_bag.price_increase_rate }}
                      </pre>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item>
            <v-container>
              <v-row>
                <v-col cols="12" lg="6" md="6" sm="12">
                  <v-row>
                    <v-col cols="12">
                      <v-subheader>功能开关<v-divider inset/></v-subheader>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-row>
                        <v-col cols="12" lg="4" md="12" sm="12">
                          <v-checkbox label="物品掉落" v-model="death.enable_item_drop"/>
                        </v-col>
                        <v-col cols="12" lg="4" md="12" sm="12">
                          <v-checkbox label="金币掉落" v-model="death.enable_money_drop"/>
                        </v-col>
                        <v-col cols="12" lg="4" md="12" sm="12">
                          <v-checkbox label="命令执行" v-model="death.enable_punish_commands"/>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-subheader>数值设置<v-divider inset/></v-subheader>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field label="金币掉落数" outlined placeholder="100" v-model="death.money_dropped_ondeath"/>
                      <v-text-field label="物品掉落数" outlined placeholder="3" v-model="death.item_dropped_ondeath"/>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-subheader>列表设置<v-divider inset/></v-subheader>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" lg="6" md="6" sm="12">
                  <v-row>
                    <v-col cols="12">
                      <v-subheader>结果输出<v-divider inset/></v-subheader>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <pre>
# 配置文件版本，请勿修改
config_version: 1.0

# 是否开启物品掉落
enable_item_drop: {{ death.enable_item_drop }}

# 是否开启金币掉落
enable_money_drop: {{ death.enable_money_drop }}

# 是否开启死亡执行后台命令
enable_punish_commands: {{ death.enable_punish_commands }}

# 死亡后掉落的金币数
money_dropped_ondeath: {{ death.money_dropped_ondeath }}

# 死亡后随机掉落的物品数
item_dropped_ondeath: {{ death.item_dropped_ondeath }}

# 死亡后后台执行的指令（{PLAYER}指代玩家占位符）
punish_command: []

# 开启死亡随机物品掉落的世界
worlds_enabled_item_drop:
  - world
  - world_nether
  - world_the_end

# 开启死亡后金币掉落的世界
worlds_enabled_money_drop:
  - world
  - world_nether
  - world_the_end

# 开启死亡后执行后台指令的世界
worlds_enabled_punish_commands:
  - world
  - world_nether
  - world_the_end
                      </pre>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Tools",
  data: () => {
    return {
      remote_bag: {
        price_of_create_a_remote_chest: 10000,
        enable_price_increase: true,
        price_increase_rate: 0.1
      },
      death: {
        enable_item_drop: true,
        enable_money_drop: true,
        enable_punish_commands: true,
        money_dropped_ondeath: 100,
        item_dropped_ondeath: 3,
      }
    }
  },
  methods: {
  },
}
</script>

<style scoped>

</style>
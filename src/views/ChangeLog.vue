<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>更新记录</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-timeline dense>
          <v-timeline-item icon="mdi-check">
            <v-expansion-panels :value="0">
              <v-expansion-panel>
                <v-expansion-panel-header>8.14 版本5.1.2</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-tools</v-icon>功能更新</h3>
                        <ul class="mt-1 text--primary">
                          <li>新增了玩家GUI界面交易功能</li>
                          <li>增加了公告系统</li>
                          <li>新增 <code>/setlobby</code> 和 <code>/lobby</code> 指令</li>
                          <li>新增 <code>/invsee</code> 和 <code>/endersee</code> 指令</li>
                          <li>更新了@音效和顶部提醒</li>
                        </ul>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-code-tags-check</v-icon>性能与代码优化</h3>
                        <ul class="mt-1 text--primary">
                          <li>增加了邮件系统的API</li>
                          <li>增加了侧边栏系统的API</li>
                          <li>极大的优化了侧边栏系统的效能</li>
                          <li>重构了邮件系统的代码</li>
                          <li>重构了侧边栏系统的代码</li>
                          <li>重构了锁箱子</li>
                          <li>调整 <code>playerlist.yml</code> 存储的数据</li>
                          <li>添加了启动大字</li>
                        </ul>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-bug-check</v-icon>BUG修复</h3>
                        <ul class="mt-1 text--primary">
                          <li>无</li>
                        </ul>
                      </div>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-timeline-item>
          <v-timeline-item icon="mdi-clock" color="orange">
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>7.17 版本5.1.1</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-tools</v-icon>功能更新</h3>
                        <ul class="mt-1 text--primary">
                          <li>添加了各种好友操作相关的提示</li>
                          <li>添加了好友命令提示</li>
                        </ul>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-code-tags-check</v-icon>性能与代码优化</h3>
                        <ul class="mt-1 text--primary">
                          <li>无</li>
                        </ul>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-bug-check</v-icon>BUG修复</h3>
                        <ul class="mt-1 text--primary">
                          <li>修复了新玩家入服提示papi问题</li>
                          <li>修复了玩家可以自己加自己好友的问题</li>
                          <li>修复了玩家可以强制加好友的问题</li>
                          <li>修复了好友显示问题</li>
                          <li>修复了好友无法删除的问题</li>
                          <li>修复了可以重复添加好友的问题</li>
                        </ul>
                      </div>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-timeline-item>
          <v-timeline-item icon="mdi-clock" color="orange">
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>7.16 版本5.1.0</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-tools</v-icon>功能更新</h3>
                        <ul class="mt-1 text--primary">
                          <li>增加了GUI好友功能</li>
                          <li>增加了自定义菜单点击后是否关闭菜单的选项</li>
                          <li>增加了@玩家功能</li>
                          <li>增加了邮件文本内容换行符支持</li>
                          <li>增加了tpback指令(可跨世界)</li>
                          <li>增加了OP命令重置玩家登录密码的功能</li>
                          <li>增加了新玩家入服欢迎</li>
                          <li>增加了彩色聊天功能</li>
                          <li>增加了飞行指令功能</li>
                        </ul>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-code-tags-check</v-icon>性能与代码优化</h3>
                        <ul class="mt-1 text--primary">
                          <li>优化随机传送的安全位置查找, 禁止地狱和末地使用随机传送</li>
                        </ul>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-bug-check</v-icon>BUG修复</h3>
                        <ul class="mt-1 text--primary">
                          <li>修复了新邮件读完侧边栏不会刷新的问题</li>
                          <li>修改了自定义菜单的价格显示，0或者不设置将不显示价格</li>
                          <li>修复了发送全体邮件无法空格的问题</li>
                          <li>修修复了自定义菜单无法使用OP指令的问题</li>
                        </ul>
                      </div>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-timeline-item>
          <v-timeline-item icon="mdi-clock" color="orange">
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>6.22 版本5.0.6</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-tools</v-icon>功能更新</h3>
                        <ul class="mt-1 text--primary">
                          <li>增加了随机传送功能</li>
                          <li>自定义菜单增加了使用功能消耗金钱</li>
                        </ul>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-code-tags-check</v-icon>性能与代码优化</h3>
                        <ul class="mt-1 text--primary">
                          <li>无</li>
                        </ul>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-bug-check</v-icon>BUG修复</h3>
                        <ul class="mt-1 text--primary">
                          <li>修复了自定义菜单的BUG</li>
                          <li>修复了菜单界面点击触发多次的BUG</li>
                          <li>修复了1.17清道夫报错的问题</li>
                        </ul>
                      </div>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-timeline-item>
          <v-timeline-item icon="mdi-clock" color="orange">
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>5.7 版本5.0.5</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-tools</v-icon>功能更新</h3>
                        <ul class="mt-1 text--primary">
                          <li>增加了TPA发送提示</li>
                          <li>增加了简写的命令：home -> h; unlock -> ul; lock -> l; bag -> b; warp -> w;</li>
                          <li>增加了定点登录功能</li>
                        </ul>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-code-tags-check</v-icon>性能与代码优化</h3>
                        <ul class="mt-1 text--primary">
                          <li>无</li>
                        </ul>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-bug-check</v-icon>BUG修复</h3>
                        <ul class="mt-1 text--primary">
                          <li>无</li>
                        </ul>
                      </div>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-timeline-item>
          <v-timeline-item icon="mdi-clock" color="orange">
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>4.9 版本5.0.4</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-tools</v-icon>功能更新</h3>
                        <ul class="mt-1 text--primary">
                          <li>增加了删除所有已读邮件的功能</li>
                        </ul>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-code-tags-check</v-icon>性能与代码优化</h3>
                        <ul class="mt-1 text--primary">
                          <li>无</li>
                        </ul>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-bug-check</v-icon>BUG修复</h3>
                        <ul class="mt-1 text--primary">
                          <li>修复了传送tpa提示和实际命令名不符的问题</li>
                        </ul>
                      </div>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-timeline-item>
          <v-timeline-item icon="mdi-clock" color="orange">
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>2.18 版本5.0.3</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-tools</v-icon>功能更新</h3>
                        <ul class="mt-1 text--primary">
                          <li>无</li>
                        </ul>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-code-tags-check</v-icon>性能与代码优化</h3>
                        <ul class="mt-1 text--primary">
                          <li>无</li>
                        </ul>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-bug-check</v-icon>BUG修复</h3>
                        <ul class="mt-1 text--primary">
                          <li>修复了warp功能无法传送的BUG</li>
                          <li>修复了自定义菜单权限问题</li>
                        </ul>
                      </div>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-timeline-item>
          <v-timeline-item icon="mdi-clock" color="orange">
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>2.18 版本5.0.2</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-tools</v-icon>功能更新</h3>
                        <ul class="mt-1 text--primary">
                          <li>无</li>
                        </ul>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-code-tags-check</v-icon>性能与代码优化</h3>
                        <ul class="mt-1 text--primary">
                          <li>无</li>
                        </ul>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-bug-check</v-icon>BUG修复</h3>
                        <ul class="mt-1 text--primary">
                          <li>修复了登录时鼠标复位的问题</li>
                        </ul>
                      </div>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-timeline-item>
          <v-timeline-item icon="mdi-clock" color="orange">
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>2.14 版本5.0.1</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-tools</v-icon>功能更新</h3>
                        <ul class="mt-1 text--primary">
                          <li>无</li>
                        </ul>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-code-tags-check</v-icon>性能与代码优化</h3>
                        <ul class="mt-1 text--primary">
                          <li>无</li>
                        </ul>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-bug-check</v-icon>BUG修复</h3>
                        <ul class="mt-1 text--primary">
                          <li>修复了登陆功能无法发送密码找回邮件的问题</li>
                          <li>修复了无法注册邮箱的问题</li>
                          <li>修复了关闭登入欢迎功能后无法使用侧边栏的问题</li>
                          <li>修复了点击礼包系统内容报错的问题</li>
                        </ul>
                      </div>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-timeline-item>
          <v-timeline-item icon="mdi-clock" color="orange">
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>2.12 版本5.0.0</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-tools</v-icon>功能更新</h3>
                        <ul class="mt-1 text--primary">
                          <li>增加了自定义语言文件功能</li>
                          <li>增加了新版的Pro验证功能，验证网站</li>
                        </ul>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-code-tags-check</v-icon>性能与代码优化</h3>
                        <ul class="mt-1 text--primary">
                          <li>无</li>
                        </ul>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="4" md="6" sm="12">
                      <div class="mt-3">
                        <h3 class="text--primary"><v-icon left>mdi-bug-check</v-icon>BUG修复</h3>
                        <ul class="mt-1 text--primary">
                          <li>修复了登陆功能移动重置鼠标位置的BUG</li>
                          <li>修复了无法直接修改配置文件的BUG</li>
                        </ul>
                      </div>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ChangeLog"
}
</script>

<style scoped>

</style>
<template>
  <v-card>
    <v-card-text>
      <v-hover v-slot="{ hover }">
        <v-alert border="left" colored-border type="warning" :elevation="hover ? 12 : 6" :class="{ 'on-hover': hover }">
          此页面仅供演示,相关功能仍在开发中
        </v-alert>
      </v-hover>
      <v-row>
        <v-col cols="12">
          <v-sheet height="500" width="auto" dark style="overflow-y: auto; user-select: text; -webkit-user-select: text;">
            <code v-for="(logs, log) in logs" :key="log" style="word-wrap:break-word; word-break:break-all; ">{{ logs }}<br/></code>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-subheader>发送指令<v-divider inset/></v-subheader>
          <v-text-field filled prefix="/" append-outer-icon="mdi-send" background-color="grey lighten-2"/>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Console",
  data() {
    return {
      logs: [
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ChunkMapDistance.markAreaHighPriority(ChunkMapDistance.java:235)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ChunkProviderServer.markAreaHighPriority(ChunkProviderServer.java:455)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.PlayerList.a(PlayerList.java:177)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.LoginListener.c(LoginListener.java:174)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.LoginListener.tick(LoginListener.java:65)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.NetworkManager.a(NetworkManager.java:380)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ServerConnection.c(ServerConnection.java:142)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.MinecraftServer.b(MinecraftServer.java:1354)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.DedicatedServer.b(DedicatedServer.java:431)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.Miner.v1_15_R1.ChunkProviderServer.tickDistanceManager(ChunkProviderServer.java:639)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ChunkMapDistance.markAreaHighPriority(ChunkMapDistance.java:235)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ChunkProviderServer.markAreaHighPriority(ChunkProviderServer.java:455)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.PlayerList.a(PlayerList.java:177)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.LoginListener.c(LoginListener.java:174)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.LoginListener.tick(LoginListener.java:65)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.NetworkManager.a(NetworkManager.java:380)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ServerConnection.c(ServerConnection.java:142)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.MinecraftServer.b(MinecraftServer.java:1354)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.DedicatedServer.b(DedicatedServer.java:431)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.Miner.v1_15_R1.ChunkProviderServer.tickDistanceManager(ChunkProviderServer.java:639)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ChunkMapDistance.markAreaHighPriority(ChunkMapDistance.java:235)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ChunkProviderServer.markAreaHighPriority(ChunkProviderServer.java:455)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.PlayerList.a(PlayerList.java:177)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.LoginListener.c(LoginListener.java:174)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.LoginListener.tick(LoginListener.java:65)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.NetworkManager.a(NetworkManager.java:380)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ServerConnection.c(ServerConnection.java:142)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.MinecraftServer.b(MinecraftServer.java:1354)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.DedicatedServer.b(DedicatedServer.java:431)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.Miner.v1_15_R1.ChunkProviderServer.tickDistanceManager(ChunkProviderServer.java:639)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ChunkMapDistance.markAreaHighPriority(ChunkMapDistance.java:235)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ChunkProviderServer.markAreaHighPriority(ChunkProviderServer.java:455)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.PlayerList.a(PlayerList.java:177)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.LoginListener.c(LoginListener.java:174)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.LoginListener.tick(LoginListener.java:65)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.NetworkManager.a(NetworkManager.java:380)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ServerConnection.c(ServerConnection.java:142)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.MinecraftServer.b(MinecraftServer.java:1354)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.DedicatedServer.b(DedicatedServer.java:431)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.MinecraftServer.a(MinecraftServer.java:1182)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.MinecraftServer.run(MinecraftServer.java:971)',
        '[15:14:30 ERROR]:  java.lang.Thread.run(Unknown Source)',
        '[15:14:30 ERROR]: ------------------------------',
        '[15:14:30 ERROR]: --- DO NOT REPORT THIS TO PAPER - THIS IS NOT A BUG OR A CRASH ---',
        '[15:14:30 ERROR]: ------------------------------',
        '[15:14:38 ERROR]: --- DO NOT REPORT THIS TO PAPER - THIS IS NOT A BUG OR A CRASH  - git-Paper-391 (MC: 1.15.2) ---',
        '[15:14:38 ERROR]: The server has not responded for 22 seconds! Creating thread dump',
        '[15:14:38 ERROR]: ------------------------------',
        '[15:14:38 ERROR]: Server thread dump (Look for plugins here before reporting to Paper!):',
        '[15:14:38 ERROR]: ------------------------------',
        '[15:14:38 ERROR]: Current Thread: Server thread',
        '[15:14:38 ERROR]:  PID: 17 | Suspended: false | Native: false | State: RUNNABLE',
        '[15:14:38 ERROR]:  Stack:',
        '[15:14:38 ERROR]:  java.util.concurrent.ConcurrentHashMap$Traverser.advance(Unknown Source)',
        '[15:14:38 ERROR]:  java.util.concurrent.ConcurrentHashMap.forEach(Unknown Source)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.PlayerChunk.a(PlayerChunk.java:736)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.ChunkMapDistance.a(ChunkMapDistance.java:117)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.ChunkProviderServer.tickDistanceManager(ChunkProviderServer.java:639)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.ChunkMapDistance.markAreaHighPriority(ChunkMapDistance.java:235)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.ChunkProviderServer.markAreaHighPriority(ChunkProviderServer.java:455)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.PlayerList.a(PlayerList.java:177)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.LoginListener.c(LoginListener.java:174)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.LoginListener.tick(LoginListener.java:65)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.NetworkManager.a(NetworkManager.java:380)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.ServerConnection.c(ServerConnection.java:142)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.MinecraftServer.b(MinecraftServer.java:1354)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.DedicatedServer.b(DedicatedServer.java:431)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.MinecraftServer.a(MinecraftServer.java:1182)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.MinecraftServer.run(MinecraftServer.java:971)',
        '[15:14:38 ERROR]:  java.lang.Thread.run(Unknown Source)',
        '[15:14:38 ERROR]: ------------------------------',
        '[15:14:38 ERROR]: --- DO NOT REPORT THIS TO PAPER - THIS IS NOT A BUG OR A CRASH ---',
        '[15:14:38 ERROR]: ------------------------------',
        '[15:14:44 ERROR]: --- DO NOT REPORT THIS TO PAPER - THIS IS NOT A BUG OR A CRASH  - git-Paper-391 (MC: 1.15.2) ---',
        '[15:14:44 ERROR]: The server has not responded for 28 seconds! Creating thread dump',
        '[15:14:44 ERROR]: ------------------------------',
        '[15:14:44 ERROR]: Server thread dump (Look for plugins here before reporting to Paper!):',
        '[15:14:44 ERROR]: ------------------------------',
        '[15:14:44 ERROR]: Current Thread: Server thread',
        '[15:14:44 ERROR]:  PID: 17 | Suspended: false | Native: false | State: RUNNABLE',
      ],
    }
  }
}
</script>

<style scoped>

</style>
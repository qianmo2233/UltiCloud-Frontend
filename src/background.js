'use strict'

import { app, protocol, BrowserWindow, dialog } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import { autoUpdater } from 'electron-updater'

const isDevelopment = process.env.NODE_ENV !== 'production'

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  const win = new BrowserWindow({
    width: 1500,
    height: 820,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    await win.loadURL('app://./index.html')
  }

  updateApp(win)
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow().then()
})

app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  await createWindow()
})

if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

function updateApp(window) {
  const feedUrl = 'http://120.26.13.162/latest'
  let mainWindow = window
  autoUpdater.autoDownload = true
  autoUpdater.setFeedURL(feedUrl);
  autoUpdater.on('error', function (error) {
    mainWindow.webContents.send('message', {cmd: 'error', msg: error})
  });
  //监听开始检测更新事件
  autoUpdater.on('checking-for-update', function (message) {
    mainWindow.webContents.send('message', {cmd: 'checking-for-update', msg: message})
  });
  //监听发现可用更新事件
  autoUpdater.on('update-available', function (message) {
    mainWindow.webContents.send('message', {cmd: 'update-available', msg: message})
  });
  //监听没有可用更新事件
  autoUpdater.on('update-not-available', function (message) {
    mainWindow.webContents.send('message', {cmd: 'update-not-available', msg: message})
  });
  // 更新下载进度事件
  autoUpdater.on('download-progress', function (message) {
    mainWindow.webContents.send('progress', {cmd: 'download-progress', msg: message})
  });
  //监听下载完成事件
  autoUpdater.on('update-downloaded', function (event, releaseNotes, releaseName) {
    const dialogOpts = {
      type: 'info',
      buttons: ['重启', '稍后'],
      title: 'UltiCloud Desktop 更新',
      message: process.platform === 'win32' ? releaseNotes : releaseName,
      detail: '新版本已下载，请重启应用以更新'
    }

    dialog.showMessageBox(dialogOpts).then((returnValue) => {
      if (returnValue.response === 0) autoUpdater.quitAndInstall()
    })
  });
  autoUpdater.checkForUpdatesAndNotify().then()
  setInterval(() => {
    autoUpdater.checkForUpdatesAndNotify().then()
  }, 60000)
}
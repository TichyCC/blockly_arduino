const { app, BrowserWindow } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // 建立瀏覽器視窗。
  win = new BrowserWindow({ width: 800, height: 600 })

  // 並載入應用程式的 index.html。
  //win.loadFile('index.html')
  // win.loadFile('../blockly/demos/code/index.html') //original ver
  win.loadFile('../workDir/index.html') //our version

  // Open the DevTools.
  win.webContents.openDevTools()

  // 視窗關閉時會觸發。
  win.on('closed', () => {
    // 拿掉 window 物件的參照。如果你的應用程式支援多個視窗，
    // 你可能會將它們存成陣列，現在該是時候清除相關的物件了。
    win = null
  })
}


// 當 Electron 完成初始化，並且準備好建立瀏覽器視窗時
// 會呼叫這的方法
// 有些 API 只能在這個事件發生後才能用。
app.on('ready', createWindow)

// 在所有視窗都關閉時結束程式。
app.on('window-all-closed', () => {
  // 在 macOS 中，一般會讓應用程式及選單列繼續留著，
  // 除非使用者按了 Cmd + Q 確定終止它們
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在 macOS 中，一般會在使用者按了 Dock 圖示
  // 且沒有其他視窗開啟的情況下，
  // 重新在應用程式裡建立視窗。
  if (win === null) {
    createWindow()
  }
})

// 你可以在這個檔案中繼續寫應用程式主程序要執行的程式碼。
// 你也可以將它們放在別的檔案裡，再由這裡 require 進來。

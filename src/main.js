const electron = require("electron");
const ipc = electron.ipcRenderer;

$(() => {
  var save = $("#save-btn");

  save.onclick(() => {
    ipc.send("open-error-dialog");
  });
});

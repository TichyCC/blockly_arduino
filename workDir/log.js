
// file I/O definition
let path = "C:\\Users\\user\\github\\blockly_arduino\\log.txt"
const fs = require('fs');
const errFunc = (err) => {
  if(err) {
    return console.log(err);
  }
  //console.log("I/O");
}

//events records
let movingFunc = (event) => {
  if(event.type == Blockly.Events.MOVE) {
    fs.appendFile(path, "Move\n", errFunc);
  }
}
Code.workspace.addChangeListener(movingFunc);

let creatFunc = (event) => {
  if(event.type == Blockly.Events.BLOCK_CREATE) {
    fs.appendFile(path, "creat\n", errFunc);
  }
}
Code.workspace.addChangeListener(creatFunc);

let deleteFunc = (event) => {
  if(event.type == Blockly.Events.DELETE) {
    fs.appendFile(path, "delete\n", errFunc);
  }
}
Code.workspace.addChangeListener(deleteFunc);

let changeFunc = (event) => {
  if(event.type == Blockly.Events.CHANGE) {
    fs.appendFile(path, "change\n", errFunc);
  }
}
Code.workspace.addChangeListener(changeFunc);

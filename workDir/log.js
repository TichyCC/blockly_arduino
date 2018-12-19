
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
  let d = new Date();
  if(event.type == Blockly.Events.MOVE) {
    fs.appendFile(path, "Moving, " + d.toString() + "\n", errFunc);
  }
}
Code.workspace.addChangeListener(movingFunc);

let creatFunc = (event) => {
  let d = new Date();
  if(event.type == Blockly.Events.BLOCK_CREATE) {
    fs.appendFile(path, "creating, " + d.toString() + "\n", errFunc);
  }
}
Code.workspace.addChangeListener(creatFunc);

let deleteFunc = (event) => {
  let d = new Date();
  if(event.type == Blockly.Events.DELETE) {
    fs.appendFile(path, "deleting, " + d.toString() + "\n", errFunc);
  }
}
Code.workspace.addChangeListener(deleteFunc);

let changeFunc = (event) => {
  let d = new Date();
  if(event.type == Blockly.Events.CHANGE) {
    fs.appendFile(path, "changing, " + d.toString() + "\n", errFunc);
  }
}
Code.workspace.addChangeListener(changeFunc);

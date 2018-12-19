
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
    let d = new Date();
    let id = event.blockId;
    fs.appendFile(path,
      "ID: (" + id +") move, " + d.toString() + "\n",
      errFunc);
  }
}
Code.workspace.addChangeListener(movingFunc);

let creatFunc = (event) => {
  if(event.type == Blockly.Events.BLOCK_CREATE) {
    let d = new Date();
    let id = event.blockId;
    fs.appendFile(path,
      "ID: (" + id +") creat, " + d.toString() + "\n",
      errFunc);
  }
}
Code.workspace.addChangeListener(creatFunc);

let deleteFunc = (event) => {
  if(event.type == Blockly.Events.DELETE) {
    let d = new Date();
    let id = event.blockId;
    fs.appendFile(path,
      "ID: (" + id +") delete, " + d.toString() + "\n",
      errFunc);
  }
}
Code.workspace.addChangeListener(deleteFunc);

let changeFunc = (event) => {
  if(event.type == Blockly.Events.CHANGE) {
    let d = new Date();
    let id = event.blockId;
    fs.appendFile(path,
      "ID: (" + id +") change, " + d.toString() + "\n",
      errFunc);
  }
}
Code.workspace.addChangeListener(changeFunc);

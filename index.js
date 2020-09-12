var robot = require("robotjs");

function main(){
  console.log("starting...");

  sleep(5000);

  while(true){
    if(checkInventory() == false){
      console.log("inventory is now empty");
      robot.moveMouseSmooth(42, 772);
      robot.mouseClick();
      sleep(15000);
      robot.moveMouseSmooth(1530, 755);
      robot.mouseClick();
      sleep(300);
      robot.moveMouseSmooth(791, 324);
      robot.mouseClick();
      robot.moveMouseSmooth(1260, 407);
      robot.mouseClick();
      sleep(15000);
      robot.moveMouseSmooth(254, 963);
      robot.mouseClick();
    }
    sleep(10000);
  }
}

function checkInventory(){
  var steelColors = ["908686", "4e4948", "776f6e"];

  var inventoryColor = robot.getPixelColor(1617, 972);

  for(var i = 0; i < steelColors.length; i++){
    if(steelColors[i] == inventoryColor){
      console.log("still smelting");
      return true;
    }
  }

  return false;
}

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

main();

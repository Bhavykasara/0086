player_update();

var canvas=new fabric.Canvas("myCanvas");
console.log("working or nots");

player_x=200;
player_y=200;

var player_object="";
var block_object="";

block_width=30;
block_height=30;

function player_update() {
   fabric.Image.fromURL("https://i.pinimg.com/originals/a8/71/6f/a8716f8f85b1ac5963700d971462c70a.png",function(Img) {
   player_object=Img;
   player_object.scaleToWidth(300);
   player_object.scaleToHeight(300);
   console.log("working or nots");
   player_object.set({
     top:player_y,
     left:player_x
   });
   canvas.add(player_object);
   });

}

function new_block() {
   fabric.Image.fromURL("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Captain_America%27s_shield.svg/1200px-Captain_America%27s_shield.svg.png",function(Img) {
   block_object=Img;
   block_object.scaleToWidth(100);
   block_object.scaleToHeight(100);
   console.log("working or nots");
   block_object.set({
     top:player_y-100,
     left:player_x-100
   });
   canvas.add(block_object);
   });
}
function falling() {
  setTimeout(1000);
  player_y=player_y+10;
  new_block();
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
  keyPressed=e.keyCode;
  console.log(keyPressed)
  
  if (keyPressed=='38') {
      up();
      console.log("up");
  }

  if (keyPressed=='40') {
      down();
      console.log("down");
  }

  if (keyPressed=='37') {
      left();
      console.log("left");
  }

  if (keyPressed=='39') {
      right();
      console.log("right");
  }

  if (keyPressed=='87') {
      up2();
      console.log("up");
  }

  if (keyPressed=='83') {
      down2();
      console.log("down");
  }

  if (keyPressed=='65') {
      left2();
      console.log("left");
  }

  if (keyPressed=='68') {
      right2();
      console.log("right");
  }
}

function up() {

 if (player_y>0) {
     player_y=player_y-10;
     canvas.remove(player_object);
     player_update();
 }
}
 
function down() {

  if (player_y<500) {
      player_y=player_y+10;
      canvas.remove(player_object);
      player_update();
  }

}

function left() {

  if (player_x>0) {
      player_x=player_x-10;
      canvas.remove(player_object);
      player_update();
  }

}

function right() {

  if (player_x<700) {
      player_x=player_x+10;
      canvas.remove(player_object);
      player_update();
  }

}
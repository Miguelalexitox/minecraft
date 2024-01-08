// Crea la variable de referncia del lienzo usando fabric.Canvas()
var canvas = new fabric.Canvas('myCanvas');

//Define el ancho inicial y el alto del cloque de imágenes 
block_image_width = 30;
block_image_height = 30;

//Define el inicio de las coordenadas  y Y del jugador 
player_x = 10;
player_y = 10;

// Define una variable llamada player_object para almacenar la imagen del jugador
var player_object = "";
var block_image_object = "";

// Agrega una función llamada player_update() para agregar la imagen del jugador 
function player_update(){
  fabric.Image.fromURL("player.png", function(Img){
    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({top:player_y, left:player_x});
    canvas.add(player_object);
  })
}

// Agrega una función llamada new_image() para agregar las diferentes imágene al presionar teclas específicas.
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({top:player_y, left:player_x});
        canvas.add(block_image_object);
      })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);  

  if(e.shiftKey == true && keyPressed == '80'){
    console.log("presiona P y Shift juntos");
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
  }

  if(e.shiftKey == true && keyPressed == '77'){
    console.log("presiona M y Shift juntos");
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
  } 
 
if(keyPressed == '38'){
  up();
  console.log("arriba");
}
if(keyPressed == '40'){
  down();
  console.log("abajo");
}
if(keyPressed == '37'){
  left();
  console.log("izquierda");
}
if(keyPressed == '39'){
  right();
  console.log("derecha");
}

 
  

if(keyPressed == '87'){
  new_image('wall.jpg');
  console.log("w");
}

if(keyPressed == '71'){
  new_image('ground.png');
  console.log("g");
}

if(keyPressed == '76'){
  new_image('light_green.png');
  console.log("l");
}

if(keyPressed == '84'){
  new_image('trunk.jpg');
  console.log("t");
}

if(keyPressed == '82'){
  new_image('roof.jpg');
  console.log("r");
}

if(keyPressed == '89'){
  new_image('yellow_wall.png');
  console.log("y");
}

if(keyPressed == '68'){
  new_image('dark_green.png');
  console.log("d");
}

if(keyPressed == '85'){
  new_image('unique.png');
  console.log("u");
}

if(keyPressed == '67'){
  new_image('cloud.jpg');
  console.log("c");
}
}


function up(){
  if(player_y >= 0){
    player_y = player_y - block_image_height;
    console.log("altura de bloque: " + block_image_height);
    console.log("cuando se presiona arriba x="+ player_x + ",y=" +player_y);
    canvas.remove(player_object);
    player_update();
  }
}

function down(){
  if(player_y <= 500){
    player_y = player_y + block_image_height;
    console.log("altura de bloque: " + block_image_height);
    console.log("cuando se presiona abajo x="+ player_x + ",y=" +player_y);
    canvas.remove(player_object);
    player_update();
  }
}

function right(){
  if(player_x <= 850){
    player_x = player_x + block_image_width;
    console.log("ancho de bloque: " + block_image_width);
    console.log("cuando se presiona derecha x="+ player_x + ",y=" +player_y);
    canvas.remove(player_object);
    player_update();
  }
}

function left(){
  if(player_x >= 0){
    player_x = player_x - block_image_width;
    console.log("ancho de bloque: " + block_image_width);
    console.log("cuando se presiona izquierda x="+ player_x + ",y=" +player_y);
    canvas.remove(player_object);
    player_update();
  }
}
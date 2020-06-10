const FRONT = 1;
const PAGE = 2;
const GOOD = 3
var gamestate = 1
var gs = 1;
var font;
var vehicles = [];
var bi;
var bi1;
var bu
var r1
var rp1;
function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
  bi = loadImage('bi.png');
   bi1 = loadImage('food2.jpg');
  r1 = loadStrings("r1.txt");
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(51);
   b = createButton("see");
  
  var points = font.textToPoints('FLOOR GANG UOOO', 100, 300, 76, {
    sampleFactor: 0.35
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    
    var vehicle = new Vehicle(pt.x, pt.y);
  
    vehicles.push(vehicle);
    
  }
}
function draw() {
  if(gamestate === 1){
  background(bi);
 // rp1.hide();
  b.position(365,665)
    b.mousePressed(()=>{
      gamestate = 2;
      b.hide();
    })
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
   
    

 }
  }
  console.log(mouseY)
   if(gamestate === 2){
     var b1
     var b2 
     var b3 
     var b4 
     var b5 
     
   background(bi1);
   textSize(56);
   text("PANNER TIKKA MAKNI",100,210);
    text("BREAD BASICS TORTILLA",100,310);
     text("GUACAMOLE",100,410);
     text("GUBI MANCHURIA",100,510);
     text("ONION CHUTNEY : DIPS AND SPREADS",100,610);
      b1 = createButton("see")
     b2 = createButton("see")
      b3 = createButton("see")
      b4 = createButton("see")
      b5 = createButton("see")
     b1.position(1200,210)
     b2.position(1200,310)
     b3.position(1200,410)
     b4.position(1200,510)
     b5.position(1200,610)
     if(keyIsDown(DOWN_ARROW)){
       camera.position.y += 1
     }
  
   

  }
}
  

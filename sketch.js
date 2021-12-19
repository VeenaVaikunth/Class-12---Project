var track, boy, running_boy, left_boundary, right_boundary;
function preload(){
  //pre-load images
  track1=loadAnimation("path.png");
  boy1=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track=createSprite(200,200,60,390)
  track.scale=2;
  boy=createSprite(200,200,40,40);
  boy.scale=0.1;
  boy.addAnimation("runningimage",boy1);
  track.addAnimation("trackimage",track1);
  left_boundary=createSprite(150,200,20,390);
  right_boundary=createSprite(250,200,20,390);
  left_boundary.visible=false;
  right_boundary.visible=false;
}

function draw() {
  background("lightgreen");
  edges= createEdgeSprites(); 
  boy.collide(edges[3]);
  track.velocityY=3;
  if(track.y>400){
    track.y=track.width/2;
  }
  boy.x=mouseX;
  boy.collide(left_boundary);
  boy.collide(right_boundary);
  drawSprites();
}
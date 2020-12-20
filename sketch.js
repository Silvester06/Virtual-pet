//Create variables here
var virtualpet,dog,d1,d2
var database,food,foodstalk


function preload()
{
  //load images here
  d1 = loadImage("images/dogImg.png")
  d2 = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(800, 700);
  database = firebase.database()
  dog = createSprite(250,200)
  dog.addImage(d1)
  dog.scale = 0.2
  
}


function draw() {  

  drawSprites();
  //add styles here

}




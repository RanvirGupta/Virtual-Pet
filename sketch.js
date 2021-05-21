//Create variables here
var dog,happyDog;
var database;
var foodS,foodStock; 
function preload(){
	//load images here
  dogImg1 = loadImage(images/dogImg.png)
  dogImg2 = loadImage(images/dogImg1.png)
  
}

function setup() {
	createCanvas(500, 500);

  dog = createSprite();
  dog.addImage(dogImg2); 
  foodStock = database.ref('Food');
  foodStock.on("value",readStock)
  Text("Note: Press UP_ARROW key to feed drago milk")
}


function draw() { 
  background("46, 139, 87") 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg2)
  }
  drawSprites();
  //add styles here

}




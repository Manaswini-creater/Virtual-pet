var dog,sadDog,happyDog;
var foodObj;
var feedButton , addFeedButton
var foodr

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database=firebase.database();
  foodStock = database.ref("Food")
  foodStock.on("value",readStock)
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  
  feedButton = createButton("Feed the dog")
  feedButton.position(700,95)
  feedButton.mousePressed(feedDog)
  
  addFeedButton = createButton("Add food")
  addFeedButton.position(800,95)
  addFeedButton.mousePressed(addFood)

  foodObj = new Food ();

}

function draw() {
  background(46,139,87);
  drawSprites();
  foodObj.display();
}

function readStock(data){
foodr = data.val()
foodObj.updateFoodStock(foodr) 
}
function addFood(){
  foodr++
  database.ref("/").update({
    Food : foodr 
  })
}

function feedDog (){
  dog.addImage(happyDog)
  if(foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0)

  }
  else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  }
  database.ref("/").update({
    Food:foodObj.getFoodStock()
  })
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock

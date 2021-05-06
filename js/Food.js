class Food {
    constructor(){
      this.Image = loadImage("Images/Milk.png")  
      this.foodStock=0
    }
    getFoodStock(){
     return this.foodStock 
    }
    updateFoodStock(foodStock){
    this.foodStock = foodStock
    }
    deductFoodStock(){
    if(this.foodStock>0){
       this.foodStock = this.foodStock-1
    }
    }
    display(){
     imageMode(CENTER)
     image(this.Image,720,220,70,70)   
     
     var x = 80, y = 100
     if(this.foodStock!=0){
       for(var i = 0; i<this.foodStock;i++){
           if(i% 10 == 0){
               x=80
               y=y+50
           }
    image(this.Image,x,y,50,50)
    x=x+30
       }  
     }

    
    }
}

 

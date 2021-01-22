class Brick {
    constructor(x,y,width,height){
var options = {
    'restitution': 0.8,
    'friction':1.3,
    'density': 1
}

 this.body=Bodies.rectangle(x,y,width,height,options);
 this.width=width;
 this.height=height;
 
 World.add(world,this.body);
//function

    }
display(){

    var pos= this.body.position
    var angle= this.body.angle
    push();
    translate(pos.x,pos.y)
    rotate(angle)
rectMode(CENTER);
fill("lightpink")
rect(0,0,this.width,this.height) // p5 library(rect)
pop();
}



    }
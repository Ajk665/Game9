class Goal{

    constructor(x,y){

        var options ={

            isStatic:false,
            friction:0.5,
            restitution:0.5,
            density:0.3

        }

        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
        this.Visiblity = 255;
    }
    display(){

        if(this.body.speed < 3){
            var pos = this.body.position
        push();
        var angle = this.body.angle;
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(3)
        stroke("Red");
        rectMode(CENTER);
        fill("black")
        rect(0,0,this.width,this.height); 
        pop();
           }
           else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity);
             rect(this.body.position.x, this.body.position.y, 50, 50);
             pop();
           }
    }
    score(){

        if(this.Visiblity <0 && this.Visiblity >-2550)
      
        score++
      
      }


}
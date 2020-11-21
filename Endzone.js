class End{

    constructor(){

        var options ={

            isStatic:true,
            friction:0.5,
            restitution:0.5,
            density:0.3

        }

        this.body = Bodies.rectangle(790,200,20,400,options);
        this.width = 20;
        this.height = 400;
        World.add(world,this.body);
    }
    display(){

        var pos = this.body.position
        push();
        var angle = this.body.angle;
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(3)
        stroke("green");
        rectMode(CENTER);
        fill("green")
        rect(0,0,this.width,this.height); 
        pop();
    }



}
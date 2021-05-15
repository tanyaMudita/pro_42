class Drops{

    constructor(x,y,r){

        var options={
            restitution:1,
            friction:0.1,
            density:0.2
        }

        this.drops=Bodies.circle(x,y,r,options);
        this.radius=r;
        World.add(world,this.drops);

    }

    display(){

        var pos=this.drops.position;

        push();
        translate(pos.x,pos.y)
        ellipseMode(CENTER);
        fill("blue");
        ellipse(0,0,this.radius);
        pop();
    }

    update(){
        if(this.drops.position.y>height){
            Matter.Body.setPosition(this.drops,{x:random(0,600),y:random(0,600)})
        }
    }

}
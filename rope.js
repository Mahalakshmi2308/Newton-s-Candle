class rope{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            lenght:5
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pa = this.rope.bodyA.position;
        var pb = this.rope.bodyB.position;
        strokeWeight (2);
        line(pa.x,pa.y,pb.x,pb.y);
          
    }
}
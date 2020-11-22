class Floor{
    constructor(x,y){
        var op = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,1500,50,op)
        World.add(world,this.body)
         
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        rect(pos.x,pos.y,1500,50)
    }
}
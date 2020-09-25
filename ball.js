class ball
{
   constructor(x,y,width,height)
   {
      this.body = Bodies.rectangle(x,y,width,height);
      this.width = width;
      this.height = height;
      World.add(world,this.body); 
     
      
   }

display()
{  push();
   fill("yellow")
   translate(this.body.position.x,this.body.position.y)
   rotate(this.body.angle);
   rect(this.body.position.x,this.body.position.y,this.width,this.height)
   pop();

}   

}


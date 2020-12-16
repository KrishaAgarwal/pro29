class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      //this.image = loadImage("sprites/wood1.png");
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill(random('red','blue','yellow'));
      rect(pos.x, pos.y, this.width, this.height);
    }
  } 
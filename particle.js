
function Particle(x,y){
    this.x = x;
    this.y = y;
    this.history = [];
    this.updatePos=function(){
        this.y+=random(-10,10);
        this.x+=random(-10,10);
        var vec = createVector(this.x,this.y);
        this.history.push(vec);
        if(this.history.length>100){
            this.history.splice(0,1);
        }
        for(var i = 0; i< this.history.length ; i++){
            this.history[i].x+=random(-2,2);
            this.history[i].y+=random(-2,2);
        }
    }
            
    this.show=function(){
        noFill();
        stroke(0);
        ellipse(this.x,this.y,24,24);
        beginShape();
        for(var i = 0; i < this.history.length ; i++){
            vertex(this.history[i].x,this.history[i].y);       
        }
        endShape();
    }   
}
var particles = [];

function setup(){
    createCanvas(600,600);
}

function mousePressed(){
    particles.push(new Particle(mouseX,mouseY));
}

function draw(){
    background(150);
    if(particles.length){
    for(var i = 0;i<particles.length;i++){
        particles[i].updatePos();
        particles[i].show();
    }
    }
}
    
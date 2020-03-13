class Circle{
    constructor(x, y, radius, xVel, yVel){
        this.x = x;
        this.y = y;
        this.rad =radius;
        this.xVel = xVel;
        this.yVel = yVel;
    }
}

var circles = []
const numCircles = (window.innerHeight * window.innerWidth < 500000)? 10 : 50;

function setup(){
    createCanvas(window.innerWidth, window.innerHeight)
    for(let i = 0; i < numCircles; i++){
        circles.push(new Circle(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 80, (Math.random()-0.5)*10, (Math.random()-0.5)*10));
    }
}

var circleSketch = function(sketch);

function draw(){
    background('lightcoral');
    fill('pink');

    //ellipse(770, 100, 40, 40)
    strokeWeight(0)
    circles.forEach( c => {
        ellipse(c.x, c.y, c.rad, c.rad);
    })

    update();
}

function update(){
    circles.forEach( c => {
        c.x += c.xVel;
        c.y += c.yVel;

        //bounce logic
        
        if((c.x - c.rad/2) < 0){
            c.xVel *= -1;
            c.x = c.rad/2 + 0.001;
        }
        
        if((c.x + c.rad/2) > window.innerWidth){
            c.xVel *= -1;
            c.x = window.innerWidth - c.rad/2 - 0.001;
        }
        
        if((c.y - c.rad/2) < 0){
            c.yVel *= -1;
            c.y = c.rad/2 + 0.001;
        }

        if((c.y + c.rad/2) > window.innerHeight){
            c.yVel *= -1;
            c.y = window.innerHeight - c.rad/2 - 0.001;
        }

    })
}


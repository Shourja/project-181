img = "";

function preload() {
    img= loadImage('https://upload.wikimedia.org/wikipedia/commons/8/85/Light-bulb-1.jpg');

}



function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw () {
     image (img, 0, 0, 640, 420);
     fill("red");
     text("Light bulb", 45, 75);
     noFill();
     stroke("red");
     rect(30, 50, 600, 350);
     
}
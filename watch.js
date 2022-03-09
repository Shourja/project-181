img = "";

function preload() {
    img= loadImage('https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d3Jpc3R3YXRjaHxlbnwwfHwwfHw%3D&w=1000&q=80');

}



function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw () {
     image (img, 0, 0, 640, 420);
     fill("red");
     text("Watch", 45, 75);
     noFill();
     stroke("red");
     rect(30, 60, 600, 350);
     
}
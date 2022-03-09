img = "";

function preload() {
    img= loadImage('https://media.istockphoto.com/photos/small-teddy-bear-isolated-on-white-picture-id182834193?b=1&k=20&m=182834193&s=170667a&w=0&h=E74uv79mhHNg7Or77veTPojJkW7EjQnV5mCKPpIutDY=');

}



function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw () {
     image (img, 0, 0, 640, 420);
     fill("red");
     text("Toy", 45, 75);
     noFill();
     stroke("red");
     rect(30, 60, 600, 350);
     
}
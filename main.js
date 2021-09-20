function preload() {

}

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

camera = document.getElementById("camera");

Webcam.attach('#camera');

function setup() {
canvas = createCanvas(800, 800);
canvas.position(210, 450);

}

function draw() {

	

circle(70, 60, 100)
circle(175, 60, 100)
circle(280, 60, 100)
circle(395, 60, 100)
circle(500, 60, 100)
circle(605, 60, 100)
circle(715, 60, 100)
circle(70, 740, 100)
circle(175, 740, 100)
circle(280, 740, 100)
circle(395, 740, 100)
circle(500, 740, 100)
circle(605, 740, 100)
circle(715, 740, 100)

}

function take_snapshot() {
save('Snapshot.png');
}


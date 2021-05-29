noseX = 0;
noseY = 0;
function preload(){
  mustache = loadImage('https://i.postimg.cc/QNktQZjg/mustache.png');
}
function setup(){
  canvas = createCanvas(300,300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  posenet = ml5.poseNet(video,modelLoaded);
  posenet.on('pose',gotPoses);
}
function gotPoses(result){
  if (result.length > 0){
    console.log(result)
  noseX = result[0].pose.nose.x;
  console.log("x-coordinate of nose = "+noseX);
  noseY = result[0].pose.nose.y;
  console.log("y-coordinate of nose = "+noseY);
  }
}
function modelLoaded(){
  console.log("Model is loaded");
}
function draw(){
  image(video, 0,0,300,300);
  image(mustache,noseX-220,noseY-110,100,50);
}
function mustache(){
}
function take_snapshot(){
    save("my-filter-pic.png");;
}

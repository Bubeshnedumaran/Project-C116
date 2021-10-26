nosex=0;
nosey=0;
function preload(){
clownnose=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modeloaded);
poseNet.on('pose',gotposes);
}
function modeloaded(){
    console.log('PoseNet is initialized');
}
function gotposes(results){
    if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x-40;
    nosey=results[0].pose.nose.y;
    console.log("nosex="+nosex);
    console.log("nosey="+nosey);
    }
}
function draw(){
image(video,0,0,300,300);
fill(255,0,0);
stroke(255,0,0);
image(clownnose,nosex,nosey,80,35);
}
function snapshot(){
    save('Myfilterimage.png');
}
song1 = "";
song2 = "";
function preload(){
song1 = loadSound("Song1.mp3"); 
song2 = loadSound("Song2.mp3");
}
function setup(){
canvas = createCanvas(450 , 350);
canvas.center();   
video = createCapture(VIDEO);
video.hide();
canvas.position(540 , 300);
poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);
}
function draw(){
image(video , 0 , 0 , 500 , 400);    
}
function modelLoaded(){
console.log('Posenet Is Initialized');    
}
function gotPoses(results){
if(results.length > 0){
console.log(results);
leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;  
console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);  
rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
}    
}
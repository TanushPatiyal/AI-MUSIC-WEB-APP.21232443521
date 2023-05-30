function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

    }
    function draw() {
        image(video,0,0,600,500);
        fill("#FF0000");
        stroke("FF0000");

        if(scoreLeftWrist > 0.2)
        {
            circle(leftWristX.leftWristY,20);
         song.play()
         song_2.stop()
        } 
        if(scoreRightWrist > 0.2)
        {
            circle(rightWristX.rightWristY,20);
         song.stop()
         song_2.play()
        }
    }
    song = "";
    song_2 ="";

function preload(){
song =loadSound("music2.mp3");
song_2 =loadSound("music2.mp3"); }
function play(){
song.play() ;
}
function modelLoaded(){
    console.log('PoseNet Is Initialized')}
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY = "+ leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +"rightWristY = "+ rightWristY);
        scoreRightWrist = results[0].pose.keypoints[10].score
    }}
    
    
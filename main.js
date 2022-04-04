function setup() {
    webcam=createCapture(VIDEO);
    canvas=createCanvas(600,500);
    posenet=ml5.poseNet(webcam,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log("Model Loaded");
}
function gotPoses(results) {
    if (results.length>1) {
        console.log(results);
    }
}
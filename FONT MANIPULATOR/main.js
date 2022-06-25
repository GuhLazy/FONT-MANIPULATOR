function setup(){
    video = createCapture(VIDEO);
    video.size(550,500)
    video.position(120,150)
   
    canvas = createCanvas(530,530)
    canvas.position(800,130)
   
    poseNet = ml5.poseNet('video' ,modelLoaded)
    poseNet.on('pose' ,gotPoses)
}
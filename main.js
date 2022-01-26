nosex=0;
nosey=0;
difference=0;
lefthandx=0;
lefthandy=0;
righthandx=0;
righthandx=0;
function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    video=createCapture(VIDEO);
     video.size(550,500);
     poseNet=ml5.poseNet(video,modalloaded);
     poseNet.on('pose',gotResult);
}
function modalloaded(){
    console.log(" p is working");
}

function gotResult(result){
  if(result.length>0){
      console.log("result");
        nosex=result[0].pose.nose.x;
        nosey=result[0].pose.nose.y;
      console.log("nose x= "+nosex+" nose y= "+nosey);
        lefthandx=result[0].pose.leftWrist.x;
        lefthandy=result[0].pose.leftWrist.y;
        righthandy=result[0].pose.rightWrist.y;
        righthandx=result[0].pose.rightWrist.x;
        difference=floor(lefthandx-righthandx);
        console.log(difference);

  }
}
function draw(){
    background('#b1f5b0');
fill("#ff8503");
stroke("#ff8503");
square(nosex,nosey,difference);
}


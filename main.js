
img="";
Status="";
objects=[];

function preload(){
    song=loadSound("lovesick.mp3");
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.position(350,150);
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();

    objectDetector=ml5.objectDetector('cocossd',modeLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Object";
}
function start(){
    ObjectDetector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : detecting objects";
}


function draw(){
image(video,0,0,380,380);

if(Status !="")
{   r=random(255);
    g=random(255);
    b=random(255);

    ObjectDetector.detect(video,gotResult);
    for(i=0;i<objects.length;i++)
  {  document.getElementById("status").innerHTML="Status : Object Detected";
     document.getElementById("no_of_objects_detected").innerHTML="Number of objectd detected are :"+object.length;

fill(r,g,b);
percent= floor(objects[i].confidence*100);
text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
noFill();
stroke(r,g,b);
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
  }
}
}

function modeLoaded(){
    console.log("Model Loaded!");
    Status=true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error,results){
if(error){
    console.log(error);
}
    console.log(results);
    object=results;
}
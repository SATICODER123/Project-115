moustacheX=0;
moustacheY=0;

function preload() {
  moustache = loadImage('https://w7.pngwing.com/pngs/314/989/png-transparent-moustache-mustache-hair-beard-mustache-png-thumbnail.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
  }

  function modelLoaded() {
    console.log('PoseNet Is Initialized');
  }

  function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);
      moustacheX = results[0].pose.moustache.x-15;
      moustacheY = results[0].pose.moustache.y-15;
    }
  }

function draw() {
  image(video, 0, 0, 300, 300);
}

function take_snapshot() {
    save('myFilterImage.png')
}
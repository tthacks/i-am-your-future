var video;

const handimg = document.getElementById("handimage");
let trackButton = document.getElementById("trackbutton");
let nextImageButton = document.getElementById("nextimagebutton");
let updateNote = document.getElementById("updatenote");
let canvas = document.getElementById("qrcanvas");

let imgindex = 1
let isVideo = false;
let model = null;

var mouseXReal = 0;
var mouseYReal = 0;

// video.width = 500
// video.height = 400

const modelParams = {
    flipHorizontal: true,   // flip e.g for video
    maxNumBoxes: 20,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.85,    // confidence threshold for predictions.
}

function startVideo() {
    handTrack.startVideo(video).then(function (status) {
        console.log("video started", status);
        if (status) {
            isVideo = true
            runDetection()
        } else {
            updateNote.innerText = "Please enable video"
        }
    });
}

function toggleVideo() {
    if (!isVideo) {
        updateNote.innerText = "Starting video"
        startVideo();
    } else {
        updateNote.innerText = "Stopping video"
        handTrack.stopVideo(video)
        isVideo = false;
        updateNote.innerText = "Video stopped"
    }
}



// nextImageButton.addEventListener("click", function(){
//     nextImage();
// });

// trackButton.addEventListener("click", function(){
//     toggleVideo();
// });

// function nextImage() {
//
//     imgindex++;
//     handimg.src = "images/" + imgindex % 15 + ".jpg"
//     // alert(handimg.src)
//     runDetectionImage(handimg)
// }



function runDetection() {
  console.log(video);
    model.detect(video).then(predictions => {
      console.log(state);
        if (state === states.QR) {// TODO: add VIZ
          if (predictions.length > 0) {
            mouseXReal = predictions[0].bbox[0]
            mouseYReal = predictions[0].bbox[1]
          }

          var context = canvas.getContext("2d");
          context.clearRect(0, 0, canvas.width, canvas.height);
          canvas.width = video.width;
          canvas.height = video.height;

          context.save();
          context.drawImage(video, 0, 0, video.width, video.height);
          context.restore();

          var imageData = context.getImageData(0, 0, canvas.width, canvas.height);

          var code = jsQR(imageData.data, imageData.width, imageData.height, {
            inversionAttempts: "dontInvert",
          });

          if (code) {
            console.log("test");
          } else {
          }

          //console.log("Predictions: ", predictions);
          //model.renderPredictions(predictions, canvas, context, video);
          if (isVideo) {
              requestAnimationFrame(runDetection);
          }
       }

    });
}

function runDetectionImage(img) {
    model.detect(img).then(predictions => {

        console.log("Predictions: ", predictions);

        console.log("X: " + predictions[0].bbox[0])


        mouseXReal = predictions[0].bbox[0]
        mouseYReal = predictions[0].bbox[1]

        model.renderPredictions(predictions, canvas, context, img);

    });
}

// Load the model.
handTrack.load(modelParams).then(lmodel => {
    // detect objects in the image.
    model = lmodel
    // updateNote.innerText = "Loaded Model!"
    // runDetectionImage(handimg)
    // trackButton.disabled = false
    // nextImageButton.disabled = false
});

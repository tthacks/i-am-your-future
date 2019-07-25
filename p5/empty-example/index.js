var video;
var canvas;

const handimg = document.getElementById("handimage");
let trackButton = document.getElementById("trackbutton");
let nextImageButton = document.getElementById("nextimagebutton");
let updateNote = document.getElementById("updatenote");

let imgindex = 1
let isVideo = false;
let model = null;

var handPosX = 0;
var handPosY = 0;

var TarotEnum = {
    SIXOFPENTACLES: 1,
    HANGEDWOMAN: 2,
    KINGOFCUPS: 3,
    FOUROFSWORDS: 4,
    EIGHTOFSWORDS: 5,
    HIGHPRIESTESS: 6,
    ACEOFCUPS: 7,
    THEDEVIL: 8,
    PRINCESSOFSWORDS: 9,
    HIEROPHANT: 10,
    THELOVERS: 11,
    NINEOFCUPS: 12,
    THREEOFSWORDS: 13,
    THREEOFCUPS: 14,
    TWOOFCUPS: 15,
   
    properties: {
      1: {name: "Six of Pentacles", value: 1, type: "Career"},
      2: {name: "The Hanged Woman", value: 2, type: "Career"},
      3: {name: "King of Cups", value: 3, type: "Career"},
      4: {name: "Four of Swords", value: 4, type: "Career"},
      5: {name: "Eight of Swords", value: 5, type: "Career"},
      6: {name: "The High Priestess", value: 6, type: "Life"},
      7: {name: "Ace of Cups", value: 7, type: "Life"},
      8: {name: "The Devil", value: 8, type: "Life"},
      9: {name: "Princess of Swords", value: 9, type: "Life"},
      10: {name: "The Hierophant", value: 10, type: "Life"},
      11: {name: "The Lovers", value: 11, type: "Love"},
      12: {name: "Nine of Cups", value: 12, type: "Love"},
      13: {name: "Three of Swords", value: 13, type: "Love"},
      14: {name: "Three of Cups", value: 14, type: "Love"},
      15: {name: "Two of Cups", value: 15, type: "Love"}
    }
};
  
var tarot;

// video.width = 500
// video.height = 400

window.onload = () => {
    canvas = document.getElementById("qrcanvas");
    // Load the model.
    handTrack.load(modelParams).then(lmodel => {
        // detect objects in the image.
        model = lmodel
        // updateNote.innerText = "Loaded Model!"
        // runDetectionImage(handimg)
        // trackButton.disabled = false
        // nextImageButton.disabled = false
        startVideo();
    });
}

const modelParams = {
    flipHorizontal: true,   // flip e.g for video
    maxNumBoxes: 2,        // maximum number of boxes to detect
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

function qrToTarot(code) {
    if (!(parseInt(code.data) in TarotEnum.properties)) {
        return;
    }
    state = states.VIZ;
    tarot = TarotEnum.properties[parseInt(code.data)];
    setupViz(tarot.value);
    setTimeout(transitionToEnd, 10000);
}

function transitionToEnd() {
    state = states.END;
    //alert("Hello, " + name + "\nYour sign is " + sign + getSignEmoji(sign));
    alert(getFortune(sign, tarot.type.toLowerCase()));
}


function runDetection() {
    model.detect(video).then(predictions => {
        if (state === states.VIZ) {
          if (predictions.length > 0) {
              console.log("here");
            handPosX = predictions[0].bbox[0]
            handPosY = predictions[0].bbox[1]
          }
        } else if (state === states.QR) {
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
            qrToTarot(code);
          }

          //console.log("Predictions: ", predictions);
          //model.renderPredictions(predictions, canvas, context, video);
        }
        if (isVideo) {
            requestAnimationFrame(runDetection);
        }

    });
}

function runDetectionImage(img) {
    model.detect(img).then(predictions => {

        console.log("Predictions: ", predictions);

        console.log("X: " + predictions[0].bbox[0])


        handPosX = predictions[0].bbox[0]
        handPosY = predictions[0].bbox[1]

        model.renderPredictions(predictions, canvas, context, img);

    });
}


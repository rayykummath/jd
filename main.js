Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("webcam");

Webcam.attach(camera);

function Captr_Img(){
    Webcam.snap(function(Img){
        document.getElementById("captured_img").innerHTML="<img id='Picture' src='"+Img+"'>";
    });
}

console.log("Ml5 version= ", ml5.version);

cla=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2ZaHAF8UC/model.json", Modal_loded);

function Modal_loded(){
    console.log("MOOOOOOOOOOODDDDDDDDAAAAAAAAAAALLLLLLLLL LLLLLLLLOOOOOOOODDDDDDDDDDDEEEEEEDDDDDDDDDDDDDD");
}
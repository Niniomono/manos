prediction_1 = ""
prediction_2 = ""

Webcam.set({
  width:350,
  height:300,
  image_format:'png',
  png_quality:90
});
camera = document.getElementById("camera");
webcam.attach('#camera');
function take_snapshot() {
  Webcam.snap(function (data_uri){
  document.getElementById("result").innerHTML = '<img id = "captured_image" src ="'+data_uri+'"/>';
})};
console.log('ml5 version:', ml5.version);
classifier = ml5.image.Classifier('https://teachablemachine.withgoogle.com/models/aPl-NL-RT/model.json', modelLoaded);
function modelLoaded() {
  console.log('model loaded!');
}
function steak() {
  var synth = Window.speechSynthesis;
  speech_data_1 = "La primera prediccion es "+prediction_1;
  speech_data_2 = "La segunda prediccion es "+prediction_2;
}

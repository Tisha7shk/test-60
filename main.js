function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function clearCanvas() {

    background("white");
}

function preload() {

    background("white");
}

function draw() {
    strokeweight(13);
    stroke(0);
    if(mouseIsPressed){
    line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas() {
    classifier.classify(canvas, results);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML = 'label: ' + Math.round(results[0].label);

    document.getElementById('confidence').innerHTML = 'confidence: ' + Math.round(results[0].confidence * 100) + '%';

    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}

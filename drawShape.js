//changes the height of a square
function changeHeight() {
    var heigthValue = height.value;
    square.style.height = heigthValue + "px";
}

//Changes the width of a square
function changeWidth() {
    var widthValue = width.value;
    square.style.width = widthValue + "px";
}

//Changes the color of a square
function changeColor() {
    var colorValue = color.value;
    var colorRGBCheck = colorRGBChecker(colorValue);
    square.style["background-color"] = colorRGBCheck;
}

//Check colors for RGB standard and calls colorHEXChecker() if match is not found.
function colorRGBChecker(val) {
    var colorRGBFull = /rgb\([0-9]+, [0-9]+, [0-9]+\)/;
    var colorRGBPart = /[0-9]+, [0-9]+, [0-9]+/;
    var colorRGBFullCheckUp = val.match(colorRGBFull);
    var colorRGBPartCheckUp = val.match(colorRGBPart);
    if (colorRGBFullCheckUp !== null) {
        return val;
    } else if (colorRGBPartCheckUp !== null) {
        return val = "rgb(" + val + ")";
    } else {
        return val;
    }
}

//Changes the form of a square into a circle
function makeCircle() {
    var checkBoxStatus = checkBox.checked;
    if (checkBoxStatus === true) {
        square.style["border-radius"] = "50%";
    } else {
        square.style["border-radius"] = "";
    }
}

var height = document.getElementById("height");
var square = document.getElementById("square");
height.addEventListener("blur", changeHeight);
var width = document.getElementById("width");
width.addEventListener("blur", changeWidth);
var color = document.getElementById("color");
color.addEventListener("blur", changeColor);
var checkBox = document.getElementById("checkBox");
checkBox.addEventListener("click", makeCircle);





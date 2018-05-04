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
        return colorHEXChecker(val);
    }
}

//Stores the HEX to number values
function switchHexToNumbers(v) {
    switch (v) {
    case "0":
        return "0";
    case "1":
        return "1";
    case "2":
        return "2";
    case "3":
        return "3";
    case "4":
        return "4";
    case "5":
        return "5";
    case "6":
        return "6";
    case "7":
        return "7";
    case "8":
        return "8";
    case "9":
        return "9";
    case "a":
        return "10";
    case "b":
        return "11";
    case "c":
        return "12";
    case "d":
        return "13";
    case "e":
        return "14";
    case "f":
        return "15";
    }
}


function colorHEXChecker(value) {
    //Finishes the function if the amount of characters is not equal to 3 or 6
    if (value.length !== 3 && value.length !== 6) {
        return value;
    } else {
        //Splits the string into array
        var colorValueArr = value.split("");
        //Transfers HEX value into numbers
        var numberValueArr = colorValueArr.map(function(b){
            return switchHexToNumbers(b);
        });
        //Loops through array to get multiplied number
        var multipliedNumberValueArr = [];
        var finalArray = [];
        for (var i = 0; i < numberValueArr.length; ++i) {
            //Checks whether the element in array is undefined and returns initial value in this case
            if (!numberValueArr[i]) {
                return value;
            } else {
                var dividend = i + 2;
                var modulus = dividend % 2;
                if (modulus % 2 === 0) {
                    var x = numberValueArr[i] * Math.pow(16, 1);
                    multipliedNumberValueArr.push(x);
                } else {
                    var z = numberValueArr[i] * Math.pow(16, 0);
                    multipliedNumberValueArr.push(z);
                }
            }
        }
        //Loops through array to get three number (RGB-styled) array
        for (var k = 0; k < multipliedNumberValueArr.length; ++k) {
            var dividendTwo = k + 2;
            var modulusTwo = dividendTwo % 2;
            if (modulusTwo % 2 === 0) {
                var j = k + 1;
                var y = multipliedNumberValueArr[k] + multipliedNumberValueArr[j];
                finalArray.push(y);
            }
        }
        for (var l = 0; l < finalArray.length; ++l) {
            //Returns the initial value if one element in array is undefined
            if (finalArray[l] == "NaN") {
                return value;
            }
            return "#" + value;
        }
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
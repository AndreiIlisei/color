var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    messageDisplay.textContent = " ";
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    messageDisplay.textContent = " ";
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numOfSquares); 
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = " ";
     //change color of squares
     for(var i = 0; i < squares.length; i++){
         squares[i].style.backgroundColor = colors[i];
     }
     h1.style.backgroundColor = "steelblue";
});


for(var i = 0; i < squares.length; i ++){
    // add initial colors 
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function(){
    
    //grap color of clicked square
    var clickedColor = this.style.backgroundColor;
    
    //compare color to picked color
    if(clickedColor === pickedColor){
    messageDisplay.textContent = "Correct";
    resetButton.textContent = "Play Again?";
    changeColors(clickedColor);
    h1.style.backgroundColor = clickedColor; 
    } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again"
        }
    });
}

function changeColors(color){
    // loop through all squares
    for(var i = 0; i < squares.length; i++){
    //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //add num random colors to arr
    for(var i = 0; i < num; i++){
        //get random color and pus into array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}   

function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelector('.mode');

for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener('click', function(){
        modeButtons[0].classList.remove('selected');
        modeButtons[1].classList.remove('selected');
        this.classList.add('selected');
        //figure out how many squares to show
        //pick new colors
        // pick new pickcolor
        //update page to reflect changes

    })
}

function reset(){
    
}


/*easyBtn.addEventListener('click', function(){
    hardBtn.classList.remove('selected');
    easyBtn.classList.add('selected');
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
});

hardBtn.addEventListener('click', function(){
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = 'block';
        }
});*/

resetButton.addEventListener('click', function(){
    //geneate all new colors 
    colors = generateRandomColors(numSquares);
    //pick a new random color
    pickedColor = pickColor();
    messageDisplay.textContent = '';
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = 'New Colors';
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = 'steelblue';
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.background = colors[i];

    //add click listeners to squares
    squares[i].addEventListener('click', function() {
        //grab color of clicked square
        var clickedColor = this.style.background;
        console.log(clickedColor, pickedColor);

        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct';
            resetButton.textContent = 'Play Again?';
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.background = '#232323';
            messageDisplay.textContent = 'Try again';
        }
    });
}

function changeColors(color){
    //loop thorugh all squares
    for(var i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;

}

function randomColor(){
    var r = Math.floor(Math.random() * 256);

    var g = Math.floor(Math.random() * 256);

    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
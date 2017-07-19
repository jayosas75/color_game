/*-----Globals to start game with initial values-----*/
let numCircles = 6;
let colors = [];
let pickedColor;

/*-----Selectors to change elements on DOM-----*/
let circles = document.querySelectorAll(".square");
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode');

/*-----Initialize Game-----*/
init();

function init(){
    setupModeButtons();
    setupcircles();
    reset();
}

/*-----Function to apply handlers to easy and hard mode buttons-----*/
function setupModeButtons(){
    for(let i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener('click', function(){
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === 'Easy' ? numCircles = 3: numCircles = 6;
            reset();
        })
    }
}

/*----Function to apply click handler onto each square in game area----*/
function setupcircles(){
    for(let i = 0; i < circles.length; i++){
        circles[i].addEventListener('click', function() {
            let clickedColor = this.style.background;
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
}

/*----Resets colors, picks a color from color array, sets colors to circles----*/
function reset(){
    colors = generateRandomColors(numCircles);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = 'New Colors';
    messageDisplay.textContent = '';
    //change colors of circles
    for(let i = 0; i < circles.length; i++){
        if(colors[i]){
            circles[i].style.display = 'block';
            circles[i].style.background = colors[i];
        } else {
            circles[i].style.display = 'none';
        }
    }
    h1.style.background = 'steelblue';
}

/*-----Click Handler for reset button-----*/
resetButton.addEventListener('click', function(){
    reset();
});

/*----Sets correct colors to each circle----*/
function changeColors(color){
    for(let i = 0; i < circles.length; i++){
        circles[i].style.background = color;
    }
}

/*----Picks random color from colors array----*/
function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

/*----Generates either 6 or 3 colors based on difficulty selected----*/
function generateRandomColors(num){
    let arr = [];
    for(let i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}

/*----Picks 3 random colors (r, g, b)----*/
function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
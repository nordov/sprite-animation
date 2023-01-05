const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');
// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;
canvas.height = 150;
canvas.width = 130;

//sprute size: 832 x 1344
// 13 frames biggest

const images = {};
images.player = new Image();
images.player.src = "images/calavera.png";
images.player.actions = [7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 6, 6, 6, 6, 13, 13, 13, 13, 6];

const playerWidth = 64;
const playerHeight = 64;

let playerFrameX = 0;
let playerFrameY = 11;

let playerPosX = 0;
let playerPosY = 0;

let playerSpeed = 6;


function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){

    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);

}

function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawSprite(images.player, playerWidth*playerFrameX, playerHeight*playerFrameY, playerWidth, playerHeight, playerPosX, playerPosY, playerWidth*2, playerHeight*2);

    playerFrameX < images.player.actions[playerFrameY]? playerFrameX++ : playerFrameX = 0;
}

function initAnimation(){
    animate(images.player.actions[playerFrameY]);
}


window.onload - setInterval(initAnimation, 1000/15);

//Action seletor
let action = document.querySelector('#action');
action.addEventListener('change', function(){
    playerFrameY = this.value;
    initAnimation();
});

//Handles window resizing without streching images
window.addEventListener = ('resize', function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});

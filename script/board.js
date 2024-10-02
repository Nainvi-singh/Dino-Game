import { FRAME_RATE, GAME_HEIGHT, GAME_WIDTH } from "./config.js";
import Floor from "./floor.js";
import Player from "./player.js";

//1. draw the canvas
window.addEventListener('load',gameStart);
let player;
let context;
let floor;
function gameStart(){
    prepareCanvas();
    loadSprites();
    gameLoop();
}
function prepareCanvas(){
    const canvas=document.querySelector('#canvas');
    canvas.width=GAME_WIDTH;
    canvas.height=GAME_HEIGHT;
    context=canvas.getContext('2d');
}
function loadSprites(){
    player=new Player();
    floor= new Floor();
}
function gameLoop(){
    clearScreen();
    player.draw(context);
    floor.draw(context);
    setTimeout(function(){
        requestAnimationFrame(gameLoop);
    },FRAME_RATE);
}
function clearScreen(){
    context.fillStyle='white';
    context.fillRect(0,0,GAME_WIDTH,GAME_HEIGHT);
}
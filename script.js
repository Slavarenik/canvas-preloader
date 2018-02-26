var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

canvas.width = document.getElementById('container').offsetWidth ;
canvas.height = 60 ;

function Preloader (color, speed, currentWidth, rectHeight, text){
  this.color = color;
  this.currentWidth = currentWidth;
  this.speed = speed;
  this.rectHeight = rectHeight;
  this.text = text;

  this.draw = function(){
    ctx.fillStyle = this.color;
    ctx.fillRect(0, 0, this.currentWidth, this.rectHeight);
    ctx.fillStyle = '#fff';
    ctx.font = '16px Calibri';
    ctx.fillText(this.text, 30, 34);
  }

  this.update = function(){
    this.currentWidth += this.speed;
    this.draw();
  }
}

var loadingArr = [
  'Loading ships...',
  'Loading planes...',
  'Loading trucks...'
]
var preloader = new Preloader('#59c8fa', 10, 1, 60, loadingArr[0]);
var op = 1;

function preloaderAnimate(){

  console.log('1');

  if(preloader.currentWidth >= canvas.width){
    if(canvas.height > 0){
      canvas.height -= 10;
      requestAnimationFrame(preloaderAnimate);
    } else if (canvas.height == 0){
      cancelAnimationFrame(preloaderAnimate);
    }
  } else {
    requestAnimationFrame(preloaderAnimate);
  }

  if(preloader.currentWidth >= canvas.width/1.2){
    canvas.style.opacity = op-=0.05;
  }

  if(preloader.currentWidth >= 300){
    preloader.text = loadingArr[1];
  }
  if (preloader.currentWidth >= 600){
    preloader.text = loadingArr[2];
  }
  preloader.update();


}

preloaderAnimate();

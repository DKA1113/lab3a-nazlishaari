//  Refer to  html canvas element
const canvas = document.getElementById("canva");
 
// Drawing using 2D interface
const ctx = canvas.getContext('2d');
 
// Set Canvas size
canvas.height = 500;
canvas.width = 500;
 
// Center Coordinate
const centerX = canvas.width/2;
const centerY = canvas.height/2;
 
// // Draw a circle
ctx.beginPath();
ctx.arc(canvas.width/2, canvas.height/2, 200, 0, Math.PI*2);
ctx.lineWidth = 8;
//YOUR CODE HERE
//CHANGE COLOR STROKE TO YELLOW
 
ctx.stroke();
ctx.closePath();
 
// Draw an arc
ctx.beginPath();
ctx.lineWidth = 8;
ctx.moveTo(centerX + 100, centerY);
ctx.arc(centerX, centerY, 100, 0,Math.PI, false);
ctx.stroke();
ctx.closePath();
 
// Draw two circle
ctx.beginPath();
ctx.lineWidth = 5;
ctx.moveTo(centerX-60, centerY-80);
ctx.arc(centerX-80, centerY-80, 20, 0, Math.PI*2);
ctx.moveTo(centerX+100, centerY-80);
ctx.arc(centerX+80, centerY-80, 20, 0, Math.PI *2);
ctx.stroke();
ctx.closePath();
 
// Draw a triagle
ctx.beginPath();
ctx.lineTo(centerX, centerY-80);
ctx.lineTo(centerX+30, centerY);
ctx.lineTo(centerX-30, centerY);
ctx.closePath();
ctx.stroke();

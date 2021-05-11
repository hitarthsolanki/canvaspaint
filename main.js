 var x, y; color = "black"; width_of_line = 2; 
canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d");
var width=screen.width;
 newwidth=screen.width - 70 ;
 newheight=screen.height - 300;
if(width < 992)
 { 
     document.getElementById("myCanvas").width = newwidth; 
     .getElementById("myCanvas").height = newheight;
      document.body.style.overflow = "hidden"; 
    
        
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) {
    console.log("touchstart");
    lx=e.touches[0].clientX - canvas.offsetLeft;
    ly=e.touches[0].clientX - canvas.offsetTop;

}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    console.log("touchmove");
    cx=e.touches[0].clientX - canvas.offsetLeft;
    cy=e.touches[0].clientX - canvas.offsetTop;
}
ctx.beginPath(); 
ctx.strokeStyle = color;
 ctx.lineWidth = width_of_line;
  console.log("Last position of x and y coordinates = ");
   console.log("x = " + lx + "y = " + ly);
    ctx.moveTo(lx, ly); 
    console.log("Current position of x and y coordinates = "); 
    console.log("x = " + cx + "y = " + cy); 
    ctx.lineTo(cx, cy);
     ctx.stroke(); 
    lx = cx;
      ly = cy;
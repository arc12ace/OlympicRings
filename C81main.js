var canvas=document.getElementById("canvas")
ctx=canvas.getContext("2d")


ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=10;
ctx.arc(200, 200, 80, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=10;
ctx.arc(400, 200, 80, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=10;
ctx.arc(600, 200, 80, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=10;
ctx.arc(300, 270, 80, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=10;
ctx.arc(500, 270, 80, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth=10;
ctx.rect(70, 70, 650, 350)
ctx.stroke();

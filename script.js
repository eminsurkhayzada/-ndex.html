const canvas = document.getElementById("heart");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
ctx.fill();

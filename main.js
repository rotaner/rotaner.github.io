const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Ajustar tamaño real
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// Mouse
let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Tiempo (para color)
let t = 0;

function draw() {
  // 1) En vez de limpiar, pintamos negro TRANSPARENTE
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 2) Color cambiante
  const hue = (t * 2) % 360;
  ctx.fillStyle = `hsl(${hue}, 100%, 60%)`;

  // 3) Dibujar “humo”
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, 20, 0, Math.PI * 2);
  ctx.fill();

  t++;
  requestAnimationFrame(draw);
}

draw();

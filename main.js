const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = 600;
canvas.width = 600;

const player = new Player(320, 8, 2);

function animate() {
  canvas.height = 600;

  player.update();
  player.draw(ctx);
  requestAnimationFrame(animate);
}

animate();

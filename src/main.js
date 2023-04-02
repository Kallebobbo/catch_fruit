const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const scoreTxt = document.getElementById("score-txt");
const healthTxt = document.getElementById("health-txt");
healthTxt.innerText = "Health: " + data.playerHealth;

canvas.height = 600;
canvas.width = 600;

const player = new Player(320, data.playerSpeed, 2);

let apples = [];
for (let i = 0; i < data.appleCount; i++) {
  apples.push(
    new Apple(Math.random() * canvas.width - 30, data.appleStartSpeed)
  );
}

let bombs = [];
for (let i = 0; i < data.bombCount; i++) {
  bombs.push(new Bomb(Math.random() * canvas.width - 30, data.bombSpeed));
}

let score = 0;
let health = data.playerHealth;

const background = new Image();
background.src = "src/images/stormwind.jpg";

function animate() {
  ctx.drawImage(background, 0, 0, 600, 600);

  player.update();

  for (let i = 0; i < apples.length; i++) {
    apples[i].update();

    if (apples[i].checkPlayerCollision(player)) {
      score++;
      scoreTxt.innerText = "Score: " + score;
      apples[i].resetPosition(
        apples[i].yVel < data.appleMaxSpeed
          ? apples[i].yVel + data.appleSpeedBoost
          : data.appleMaxSpeed
      );
    }
    apples[i].draw(ctx);
  }

  for (let i = 0; i < bombs.length; i++) {
    bombs[i].update();

    if (bombs[i].checkPlayerCollision(player)) {
      health--;
      healthTxt.innerText = "Health: " + health;
      bombs[i].resetPosition();
    }
    bombs[i].draw(ctx);
  }

  player.draw(ctx);

  health > 0 ? requestAnimationFrame(animate) : alert("You Lose!");
}

animate();

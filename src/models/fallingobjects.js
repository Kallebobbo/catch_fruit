class FallingObject {
  constructor(x, yVel) {
    this.x = x;
    this.yVel = yVel;
    this.y = -30;
    this.img = new Image();

    this.h = 30;
    this.w = 30;
  }

  checkPlayerCollision(player) {
    if (
      this.y + this.h >= player.y &&
      this.x >= player.x &&
      this.x <= player.x + player.w
    ) {
      return true;
    } else {
      return false;
    }
  }

  resetPosition(vel = this.yVel) {
    this.yVel = vel;
    this.y = -this.h;
    this.x = Math.random() * (canvas.width - this.w);
  }

  update() {
    this.y += this.yVel;
    if (this.y === canvas.height) {
      this.resetPosition();
    }
  }

  draw(ctx) {
    ctx.beginPath;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    ctx.fill();
  }
}

/* Klass för spelaren, förklaring av förkortningar är följande:
v = Velocity, alltså hastighet
HP = Health Points, alltså hälsa
c = Catch, hur många poäng man har fångat
 */

let r = false;
let l = false;

class Player {
  constructor(x, v, HP) {
    this.x = x;
    this.v = v;
    this.HP = HP;
    this.img = new Image();
    this.img.src = "src/images/basket.png";

    this.y = 500;
    this.c = 0;
    this.w = 100;
    this.h = 100;
  }

  update() {
    if (r) {
      this.x += this.v;
    }

    if (l) {
      this.x -= this.v;
    }

    if (this.x + this.w > canvas.width) {
      this.x = canvas.width - this.w;
    } else if (this.x < 0) {
      this.x = 0;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    ctx.fill();
  }
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode == 37) {
    l = true;
  }
  if (event.keyCode == 39) {
    r = true;
  }
});

document.addEventListener("keyup", function (event) {
  if (event.keyCode == 37) {
    l = false;
  }
  if (event.keyCode == 39) {
    r = false;
  }
});

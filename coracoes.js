
const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

function Heart() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.size = Math.random() * 20 + 10;
  this.speed = Math.random() * 1 + 0.5;
  this.opacity = Math.random();

  this.draw = function () {
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = "#ff4da6";
    ctx.beginPath();
    const topCurveHeight = this.size * 0.3;
    ctx.moveTo(this.x, this.y + topCurveHeight);
    ctx.bezierCurveTo(
      this.x, this.y,
      this.x - this.size / 2, this.y,
      this.x - this.size / 2, this.y + topCurveHeight
    );
    ctx.bezierCurveTo(
      this.x - this.size / 2, this.y + (this.size + topCurveHeight) / 2,
      this.x, this.y + (this.size + topCurveHeight) / 2,
      this.x, this.y + this.size
    );
    ctx.bezierCurveTo(
      this.x, this.y + (this.size + topCurveHeight) / 2,
      this.x + this.size / 2, this.y + (this.size + topCurveHeight) / 2,
      this.x + this.size / 2, this.y + topCurveHeight
    );
    ctx.bezierCurveTo(
      this.x + this.size / 2, this.y,
      this.x, this.y,
      this.x, this.y + topCurveHeight
    );
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  this.update = function () {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = -this.size;
      this.x = Math.random() * canvas.width;
    }
    this.draw();
  }
}

function criarCoracoes() {
  for (let i = 0; i < 100; i++) {
    hearts.push(new Heart());
  }
}

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(h => h.update());
  requestAnimationFrame(animar);
}

criarCoracoes();
animar();

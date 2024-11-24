let pendulums = [];
let g = 1;
let num = 300;

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < num; i++) {
    let angle1 = Math.PI / 4 + i * 0.001;
    let angle2 = Math.PI;
    let hue = i * 5 + 5

    let color = `hsl(${hue}, 100%, 50%)`;

    pendulums[i] = new Pendulum(angle1, angle2, 100, 100, color);
  }
}

function draw() {
  background(0, 30);
  for (let i = 0; i < pendulums.length; i++) {
    pendulums[i].draw();
    pendulums[i].update();
  }
}

function windowResized() {
  resizeCanvas(600, 600);
}

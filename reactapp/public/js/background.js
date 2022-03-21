const PARTICLE_COUNT = 650 * 2;
const Particles = [];

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let WIDTH = document.body.clientWidth;
let HEIGHT = document.body.clientHeight;
const DEPTH = 3;
const SPEED = 0.003;

canvas.width = WIDTH;
canvas.height = HEIGHT;

window.onresize = function () {
    WIDTH = document.body.clientWidth;
    HEIGHT = document.body.clientHeight;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
};

function spawnNew(start = false) {
    const p = {
        x: Math.random(),
        y: start ? 1.1 : rand(0, 1.5), // spawn in slightly off-screen, to avoid jarring pop-in
        z: Math.random()
    };

    p.startingX = p.x;
    p.startingY = p.y;
    Particles.push(p);
}

if (Particles.length < PARTICLE_COUNT) {
    for (var l = 0; l < 50; l++) {
        spawnNew(true);
    }
}

function render() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    ctx.fillStyle = "white";

    const delet = [];

    for (let i = 0; i < Particles.length; i++) {
        let { x, y, z } = Particles[i];
        const sideLen = Math.floor(z * DEPTH);

        const screenX = Math.floor((WIDTH * x - sideLen / 2) * 10) / 10;
        const screenY = Math.floor((HEIGHT * y - sideLen / 2) * 10) / 10;

        const color = z * 255;

        ctx.fillStyle = `rgb(${color}, ${color}, ${color})`;
        ctx.fillRect(screenX, screenY, sideLen, sideLen);

        y -= SPEED * z;
        if (y < 0) {
            delet.push(i);
            // delete Particles[i];
            spawnNew(true);
        } else {
            Particles[i].y = y;
        }
    }

    for (let i = 0; i < delet.length; i++) {
        Particles.splice(delet[i] - i, 1);
    }

    if (Particles.length < PARTICLE_COUNT) {
        for (var l = 0; l < 50; l++) {
            spawnNew(true);
        }
    }

    window.requestAnimationFrame(render);
}
window.requestAnimationFrame(render);
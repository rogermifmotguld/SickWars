console.log("✅ obstacle.js har laddats!");

const MAX_OBSTACLES = 5;
const OBSTACLE_LIFETIME = 60000; // 60 sekunder
let obstacles = [];

function getRandomObstacle() {
    return {
        x: Math.random() * (canvas.width - 100),
        y: Math.random() * (canvas.height - 150) + 100,
        width: Math.random() * 100 + 50,
        height: Math.random() * 50 + 20,
        createdAt: Date.now()
    };
}

// Uppdatera hinderlistan
function updateObstacles() {
    const now = Date.now();
    obstacles = obstacles.filter(obstacle => now - obstacle.createdAt < OBSTACLE_LIFETIME);

    while (obstacles.length < MAX_OBSTACLES) {
        obstacles.push(getRandomObstacle());
    }
}

// Rita hindren
function drawObstacles() {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;

    obstacles.forEach(obstacle => {
        ctx.strokeRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        ctx.beginPath();
        ctx.moveTo(obstacle.x + 5, obstacle.y + obstacle.height / 2);
        ctx.lineTo(obstacle.x + obstacle.width - 5, obstacle.y + obstacle.height / 2);
        ctx.stroke();
    });
}

// Uppdatera hindren varje sekund
setInterval(updateObstacles, 1000);
console.log("✅ Hinder-uppdatering startad!");

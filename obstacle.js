console.log("✅ obstacle.js har laddats!");

let obstacles = [];

function createTestObstacle() {
    return {
        x: 150,
        y: 250,
        width: 60,
        height: 20
    };
}

// Skapa ett testhinder
obstacles.push(createTestObstacle());
console.log("✅ Testhinder skapat:", obstacles);

// Rita hindret
function drawObstacles() {
    ctx.fillStyle = "white";
    obstacles.forEach(obstacle => {
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
}

// Test: Rita direkt
drawObstacles();
console.log("✅ Hinder ritat!");

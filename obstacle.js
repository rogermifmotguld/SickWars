console.log("✅ obstacle.js har laddats!");

let obstacles = [];

function createTestObstacle() {
    return {
        x: 100,
        y: 200,
        width: 50,
        height: 20,
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

// Rita hindret direkt för att testa
drawObstacles();
console.log("✅ Hinder ritat!");

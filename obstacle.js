console.log("✅ obstacle.js har laddats!");

// Konstanter
const MAX_OBSTACLES = 5; // Max 5 hinder samtidigt
const OBSTACLE_LIFETIME = 60000; // 60 sekunder
let obstacles = []; // Lista över hinder

// **Skapa ett slumpmässigt hinder**
function createRandomObstacle() {
    return {
        x: Math.random() * (canvas.width - 100), // Slumpmässig position
        y: Math.random() * (canvas.height - 150) + 100,
        width: Math.random() * 100 + 50,
        height: Math.random() * 50 + 20,
        createdAt: Date.now() // Tidpunkt då hindret skapades
    };
}

// **Uppdatera hindren: Ta bort gamla och skapa nya**
function updateObstacles() {
    const now = Date.now();
    
    // Behåll bara hinder som är yngre än 60 sekunder
    obstacles = obstacles.filter(obstacle => now - obstacle.createdAt < OBSTACLE_LIFETIME);

    // Skapa nya hinder om det finns plats
    while (obstacles.length < MAX_OBSTACLES) {
        obstacles.push(createRandomObstacle());
    }
}

// **Rita hindren**
function drawObstacles() {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;

    obstacles.forEach(obstacle => {
        // Rita geometrisk form (rektangel)
        ctx.strokeRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

        // Rita vitt streck inuti formen
        ctx.beginPath();
        ctx.moveTo(obstacle.x + 5, obstacle.y + obstacle.height / 2);
        ctx.lineTo(obstacle.x + obstacle.width - 5, obstacle.y + obstacle.height / 2);
        ctx.stroke();
    });
}

// **Starta hinder-uppdatering var 60:e sekund**
setInterval(updateObstacles, 1000);
console.log("✅ Hinder-uppdatering startad!");

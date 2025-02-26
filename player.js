console.log("✅ player.js har laddats!");

// Konstanter
const PLAYER_SPEED = 5;
const GRAVITY = 0.5;

// **Skapa ENDAST EN spelare**
let player = {
    x: canvas.width / 2,
    y: canvas.height - 100,
    width: 30,
    height: 50,
    targetX: canvas.width / 2,
    targetY: canvas.height - 100,
    velocityY: 0,
    color: "red", 
    onGround: false
};

// **Uppdatera spelaren (rörelse och gravitation)**
function updatePlayer() {
    let dx = player.targetX - player.x;
    let dy = player.targetY - player.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    // Flytta horisontellt
    if (distance > PLAYER_SPEED) {
        player.x += (dx / distance) * PLAYER_SPEED;
    } else {
        player.x = player.targetX;
    }

    // Gravitation
    player.velocityY += GRAVITY;
    player.y += player.velocityY;

    // Kolla om spelaren landar på ett hinder (från `obstacle.js`)
    player.onGround = false;
    obstacles.forEach(obstacle => {
        if (player.x + player.width > obstacle.x &&
            player.x < obstacle.x + obstacle.width &&
            player.y + player.height > obstacle.y &&
            player.y < obstacle.y + obstacle.height) {
            
            player.velocityY = 0;
            player.y = obstacle.y - player.height; // Ställ spelaren ovanpå hindret
            player.onGround = true;
        }
    });

    // Håll spelaren inom skärmen
    if (player.y + player.height > canvas.height) {
        player.y = canvas.height - player.height;
        player.velocityY = 0;
        player.onGround = true;
    }
}

// **Rita spelaren**
function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

// **Lyssna efter touch för att flytta spelaren**
canvas.addEventListener("touchstart", (event) => {
    let touch = event.touches[0];
    player.targetX = touch.clientX;
    if (player.onGround) {
        player.velocityY = -10; // Hoppa om spelaren står på marken
    }
});

// **Starta spelet**
function updateGame() {
    updatePlayer();
    drawObstacles();
    drawPlayer();
    requestAnimationFrame(updateGame);
}
updateGame();

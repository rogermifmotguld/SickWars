console.log("✅ game.js har laddats!");

// Hämta canvas och kontext
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Se till att canvasen har rätt storlek
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

// Fyll bakgrunden med svart
function clearCanvas() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Koppla upp till servern
const socket = io();

// Lyssna på nya spelare
socket.on("newPlayer", (player) => {
    players[player.id] = player;
});

// Uppdatera spelarna i realtid
socket.on("updatePlayers", (serverPlayers) => {
    players = serverPlayers;
});

// Ta bort en spelare som lämnar
socket.on("removePlayer", (id) => {
    delete players[id];
});

// Spelets loop
function updateGame() {
    clearCanvas();
    drawObstacles();
    drawPlayers();
    requestAnimationFrame(updateGame);
}
updateGame();

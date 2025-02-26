console.log("✅ player.js har laddats!");

let players = {};

// Generera slumpad färg (aldrig svart)
function getRandomColor() {
    let hue = Math.random() * 360;
    let saturation = 100;
    let lightness = Math.random() * 50 + 30; // Undvik svart
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// Lyssna på spelardata från servern
socket.on("updatePlayers", (serverPlayers) => {
    players = serverPlayers;
});

// Rita alla spelare
function drawPlayers() {
    Object.values(players).forEach(player => {
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x, player.y, player.width, player.height);
    });
}

// Skicka position till servern vid touch
canvas.addEventListener("touchstart", (event) => {
    let touch = event.touches[0];
    socket.emit("move", { x: touch.clientX });
});

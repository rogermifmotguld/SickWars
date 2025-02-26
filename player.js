console.log("✅ player.js uppdaterad!");

let player = {
    x: 200,
    y: 300,
    width: 30,
    height: 50,
    color: "blue"
};

// Rita spelaren
function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

drawPlayer();
console.log("✅ Spelare ritad!");

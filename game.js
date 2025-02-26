console.log("✅ game.js har laddats!");

// Hämta canvas och kontext
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Se till att canvasen har rätt storlek
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log("✅ Canvasstorlek: ", canvas.width, "x", canvas.height);
}
resizeCanvas();

// Fyll bakgrunden med blå färg (för testning)
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);
console.log("✅ Blå bakgrund ritad!");

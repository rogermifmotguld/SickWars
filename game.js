console.log("✅ game.js har laddats!");

// Hämta canvas och kontext
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

if (!canvas || !ctx) {
    console.error("❌ FEL: Canvas hittades inte!");
} else {
    console.log("✅ Canvas hittades!");
}

// Test: Rita en blå bakgrund
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);
console.log("✅ Blå bakgrund ritad!");

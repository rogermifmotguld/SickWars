console.log("✅ player.js har laddats!");

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

if (!canvas || !ctx) {
    console.error("❌ FEL: Canvas hittades inte!");
} else {
    console.log("✅ Canvas hittades!");
}

// Test: Rita en röd fyrkant
ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 100);
console.log("✅ Röd fyrkant ritad!");

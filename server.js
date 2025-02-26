const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

let players = {};

io.on("connection", (socket) => {
    console.log("✅ Ny spelare anslöt:", socket.id);

    players[socket.id] = {
        id: socket.id,
        x: Math.random() * 800,
        y: Math.random() * 600,
        width: 30,
        height: 50,
        color: getRandomColor()
    };

    io.emit("updatePlayers", players);

    socket.on("move", (data) => {
        if (players[socket.id]) {
            players[socket.id].x = data.x;
        }
        io.emit("updatePlayers", players);
    });

    socket.on("disconnect", () => {
        delete players[socket.id];
        io.emit("updatePlayers", players);
    });
});

server.listen(3000, () => {
    console.log("✅ Servern körs på http://localhost:3000");
});

function getRandomColor() {
    let hue = Math.random() * 360;
    let saturation = 100;
    let lightness = Math.random() * 50 + 30;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

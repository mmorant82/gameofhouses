const canvas = document.getElementById('townCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const tileSize = 64; // Assuming each tile is 64x64 pixels

// Define the paths to the images (all in the root folder)
const tiles = {
    wall: 'wall.png',
    roofLeft: 'roofLeft.png',
    roofRight: 'roofRight.png',
    tree: 'tree.png'
};

// Simple map layout for testing (just a few tiles placed next to each other)
const mapLayout = [
    ['wall', 'wall', 'wall'],
    ['roofLeft', 'roofRight', 'tree']
];

// Function to load images
function loadImage(src) {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
    });
}

// Function to draw the map
async function drawMap() {
    const loadedTiles = {};

    // Load all tile images
    for (const [key, value] of Object.entries(tiles)) {
        loadedTiles[key] = await loadImage(value);
    }

    // Draw the map based on the layout
    mapLayout.forEach((row, rowIndex) => {
        row.forEach((tile, colIndex) => {
            if (tile) {
                const img = loadedTiles[tile];
                ctx.drawImage(img, colIndex * tileSize, rowIndex * tileSize, tileSize, tileSize);
            }
        });
    });
}

drawMap();

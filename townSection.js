const canvas = document.getElementById('townCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const tileSize = 64; // Assuming each tile is 64x64 pixels

// Define the paths to the images (all in the root folder)
const tiles = {
    ground: 'ground.png', // Assume a ground tile without transparency
    wall: 'wall.png',
    roofLeft: 'roofLeft.png',
    roofRight: 'roofRight.png',
    tree: 'tree.png'
};

// Map layout with multiple layers
const baseLayer = [
    ['ground', 'ground', 'ground'],
    ['ground', 'ground', 'ground']
];

const overlayLayer = [
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

    // Draw the base layer
    baseLayer.forEach((row, rowIndex) => {
        row.forEach((tile, colIndex) => {
            if (tile) {
                const img = loadedTiles[tile];
                const x = colIndex * tileSize;
                const y = rowIndex * tileSize;
                ctx.drawImage(img, x, y, tileSize, tileSize);
            }
        });
    });

    // Draw the overlay layer
    overlayLayer.forEach((row, rowIndex) => {
        row.forEach((tile, colIndex) => {
            if (tile) {
                const img = loadedTiles[tile];
                const x = colIndex * tileSize;
                const y = rowIndex * tileSize;
                ctx.drawImage(img, x, y, tileSize, tileSize);
            }
        });
    });
}

drawMap();

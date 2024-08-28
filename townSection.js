const canvas = document.getElementById('townCanvas');
const ctx = canvas.getContext('2d');

// Ensure canvas dimensions match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const tileSize = 64; // Assuming each tile is 64x64 pixels

// Define the paths to the images (all in the root folder)
const tiles = {
    wall: 'wall.png',
    wallArch: 'wallArch.png',
    wallArchTop: 'wallArchTop.png',
    wallCorner: 'wallCorner.png',
    roofHighGable: 'roofHighGable.png',
    roofHighGableDetail: 'roofHighGableDetail.png',
    roofLeft: 'roofLeft.png',
    roofRight: 'roofRight.png',
    roofPoint: 'roofPoint.png',
    tree: 'tree.png',
    stallRed: 'stallRed.png',
    stallGreen: 'stallGreen.png',
    bench: 'stallBench.png',
    stairsStone: 'stairsStone.png'
};

// Adjust the map layout as necessary for better spacing
const mapLayout = [
    ['roofLeft', 'roofHighGable', 'roofRight', null, 'stallRed', 'bench', 'tree'],
    ['wallArchTop', 'wall', 'wallArchTop', null, 'stallGreen', 'bench', 'tree'],
    ['wallCorner', 'stairsStone', 'wallCorner', null, null, null, 'tree'],
    [null, null, 'wallArch', null, null, null, null],
    ['roofPoint', 'roofHighGableDetail', 'roofPoint', null, null, null, null]
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

    // Calculate the starting point for centering the map
    const startX = (canvas.width - (mapLayout[0].length * tileSize)) / 2;
    const startY = (canvas.height - (mapLayout.length * tileSize)) / 2;

    // Draw the map based on the layout
    mapLayout.forEach((row, rowIndex) => {
        row.forEach((tile, colIndex) => {
            if (tile) {
                const img = loadedTiles[tile];
                ctx.drawImage(img, startX + colIndex * tileSize, startY + rowIndex * tileSize, tileSize, tileSize);
            }
        });
    });
}

drawMap();

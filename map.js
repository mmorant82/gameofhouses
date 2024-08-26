const canvas = document.getElementById('mapCanvas');
const ctx = canvas.getContext('2d');

// Function to resize the canvas to fill the window
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawMap();
}

// Load the map image
const mapImage = new Image();
mapImage.src = 'worldmap.jpg';  // Ensure the correct image path

mapImage.onload = function() {
    drawMap();
};

function drawMap() {
    // Draw the image to fill the entire canvas
    ctx.drawImage(mapImage, 0, 0, canvas.width, canvas.height);
    drawRegions();
}

// Define regions (for example, rectangular regions)
const regions = [
    { name: 'Region 1', x: 50, y: 50, width: 100, height: 100 },
    { name: 'Region 2', x: 200, y: 50, width: 100, height: 100 },
    // Add more regions as needed
];

function drawRegions() {
    ctx.strokeStyle = 'red';
    regions.forEach(region => {
        ctx.strokeRect(region.x, region.y, region.width, region.height);
    });
}

// Handle canvas clicks
canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    regions.forEach(region => {
        if (x >= region.x && x <= region.x + region.width &&
            y >= region.y && y <= region.y + region.height) {
            alert(`You clicked on ${region.name}`);
        }
    });
});

// Ensure the canvas is resized when the window size changes
window.addEventListener('resize', resizeCanvas);

// Initial resize to set up the canvas size
resizeCanvas();

const canvas = document.getElementById('mapCanvas');
const ctx = canvas.getContext('2d');

// Load the map image
const mapImage = new Image();
mapImage.src = 'worldmap.jpg';  // Replace with the correct image path

mapImage.onload = function() {
    ctx.drawImage(mapImage, 0, 0, canvas.width, canvas.height);
    drawRegions();
};

mapImage.onerror = function() {
    console.error('Failed to load the map image.');
};

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

// Add event listener for mouse clicks
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

// Get canvas and context
const canvas = document.getElementById('throneRoomCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawThroneRoom();
}

// Draw the detailed throne room
function drawThroneRoom() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Define dimensions based on canvas size
  const width = canvas.width;
  const height = canvas.height;
  const floorHeight = height * 0.25;
  const wallHeight = height - floorHeight;

  // Draw marble floor
  ctx.fillStyle = '#dcdcdc'; // Light marble color
  ctx.fillRect(0, height - floorHeight, width, floorHeight);
  
  // Draw wall
  ctx.fillStyle = '#5c5c5c'; // Dark gray wall color
  ctx.fillRect(0, 0, width, wallHeight);
  
  // Draw tapestries
  const tapestryWidth = width * 0.15;
  const tapestryHeight = wallHeight * 0.6;
  const tapestryY = wallHeight * 0.1;
  const tapestryColor1 = '#800000'; // Dark red
  const tapestryColor2 = '#4b0082'; // Indigo

  drawTapestry(tapestryColor1, width * 0.2, tapestryY, tapestryWidth, tapestryHeight);
  drawTapestry(tapestryColor2, width * 0.8 - tapestryWidth, tapestryY, tapestryWidth, tapestryHeight);

  // Draw columns
  const columnWidth = width * 0.05;
  const columnHeight = wallHeight * 0.9;
  const columnY = wallHeight * 0.05;
  ctx.fillStyle = '#a9a9a9'; // Light gray column color

  drawColumn(width * 0.3, columnY, columnWidth, columnHeight);
  drawColumn(width * 0.7 - columnWidth, columnY, columnWidth, columnHeight);

  // Draw throne platform
  const platformWidth = width * 0.3;
  const platformHeight = floorHeight * 0.2;
  const platformX = width / 2 - platformWidth / 2;
  const platformY = height - floorHeight - platformHeight;
  ctx.fillStyle = '#4a2c2a'; // Dark wood color
  ctx.fillRect(platformX, platformY, platformWidth, platformHeight);

  // Draw throne
  const throneWidth = platformWidth * 0.5;
  const throneHeight = platformHeight * 3;
  const throneX = platformX + platformWidth / 2 - throneWidth / 2;
  const throneY = platformY - throneHeight;
  drawThrone(throneX, throneY, throneWidth, throneHeight);

  // Draw windows
  const windowWidth = width * 0.1;
  const windowHeight = wallHeight * 0.3;
  const windowY = wallHeight * 0.1;

  drawWindow(width * 0.15, windowY, windowWidth, windowHeight);
  drawWindow(width * 0.85 - windowWidth, windowY, windowWidth, windowHeight);

  // Draw red carpet
  const carpetWidth = width * 0.15;
  const carpetX = width / 2 - carpetWidth / 2;
  ctx.fillStyle = '#b22222'; // Firebrick red color
  ctx.fillRect(carpetX, platformY + platformHeight, carpetWidth, height - platformY - platformHeight);

  // Draw chandeliers
  drawChandelier(width * 0.25, wallHeight * 0.2);
  drawChandelier(width * 0.75, wallHeight * 0.2);

  // Draw wall torches
  drawTorch(width * 0.15, wallHeight * 0.5);
  drawTorch(width * 0.85 - windowWidth, wallHeight * 0.5);
}

// Draw tapestry
function drawTapestry(color, x, y, width, height) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
  ctx.beginPath();
  ctx.moveTo(x, y + height);
  ctx.lineTo(x + width / 2, y + height + height * 0.1);
  ctx.lineTo(x + width, y + height);
  ctx.closePath();
  ctx.fill();
}

// Draw column
function drawColumn(x, y, width, height) {
  ctx.fillRect(x, y, width, height);
  ctx.beginPath();
  ctx.arc(x + width / 2, y, width / 2, 0, Math.PI, true);
  ctx.fill();
}

// Draw throne
function drawThrone(x, y, width, height) {
  ctx.fillStyle = '#8b4513'; // Saddle brown color
  ctx.fillRect(x, y, width, height);
  ctx.fillStyle = '#4a2c2a'; // Darker brown for the backrest
  ctx.fillRect(x - width * 0.1, y - height * 0.3, width * 1.2, height * 0.3);
}

// Draw window
function drawWindow(x, y, width, height) {
  ctx.fillStyle = '#4682b4'; // Steel blue for stained glass
  ctx.fillRect(x, y, width, height);
  ctx.fillStyle = '#87ceeb'; // Sky blue for window light
  ctx.beginPath();
  ctx.arc(x + width / 2, y, width / 2, 0, Math.PI);
  ctx.closePath();
  ctx.fill();
}

// Draw chandelier
function drawChandelier(x, y) {
  const radius = canvas.width * 0.03;
  ctx.fillStyle = '#ffd700'; // Gold color
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#b8860b'; // Dark goldenrod color
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, y);
  ctx.stroke();
}

// Draw torch
function drawTorch(x, y) {
  ctx.fillStyle = '#ff4500'; // Orange-red for the flame
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 20, y - 40);
  ctx.lineTo(x - 20, y - 40);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = '#8b4513'; // Saddle brown for the torch
  ctx.fillRect(x - 5, y, 10, 30);
}

// Resize canvas on window resize
window.addEventListener('resize', resizeCanvas);

// Initial call to set up canvas
resizeCanvas();

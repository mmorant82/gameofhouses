// Get canvas and context
const canvas = document.getElementById('throneRoomCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawThroneRoom();
}

// Draw the enhanced throne room
function drawThroneRoom() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Define dimensions based on canvas size
  const width = canvas.width;
  const height = canvas.height;
  const floorHeight = height * 0.25;
  const wallHeight = height - floorHeight;

  // Draw marble floor with texture
  drawMarbleFloor(0, height - floorHeight, width, floorHeight);

  // Draw stone walls with texture
  drawStoneWalls(0, 0, width, wallHeight);

  // Draw detailed tapestries
  const tapestryWidth = width * 0.15;
  const tapestryHeight = wallHeight * 0.6;
  const tapestryY = wallHeight * 0.1;

  drawDetailedTapestry('#800000', '#FF0000', width * 0.2, tapestryY, tapestryWidth, tapestryHeight);
  drawDetailedTapestry('#4b0082', '#8A2BE2', width * 0.8 - tapestryWidth, tapestryY, tapestryWidth, tapestryHeight);

  // Draw rounded columns with shading
  const columnWidth = width * 0.05;
  const columnHeight = wallHeight * 0.9;
  const columnY = wallHeight * 0.05;

  drawShadedColumn(width * 0.3, columnY, columnWidth, columnHeight);
  drawShadedColumn(width * 0.7 - columnWidth, columnY, columnWidth, columnHeight);

  // Draw throne platform with more detail
  const platformWidth = width * 0.3;
  const platformHeight = floorHeight * 0.2;
  const platformX = width / 2 - platformWidth / 2;
  const platformY = height - floorHeight - platformHeight;

  drawDetailedPlatform(platformX, platformY, platformWidth, platformHeight);

  // Draw ornate throne
  const throneWidth = platformWidth * 0.5;
  const throneHeight = platformHeight * 3;
  const throneX = platformX + platformWidth / 2 - throneWidth / 2;
  const throneY = platformY - throneHeight;

  drawOrnateThrone(throneX, throneY, throneWidth, throneHeight);

  // Draw stained glass windows with more detail
  const windowWidth = width * 0.1;
  const windowHeight = wallHeight * 0.3;
  const windowY = wallHeight * 0.1;

  drawStainedGlassWindow(width * 0.15, windowY, windowWidth, windowHeight);
  drawStainedGlassWindow(width * 0.85 - windowWidth, windowY, windowWidth, windowHeight);

  // Draw textured red carpet
  const carpetWidth = width * 0.15;
  const carpetX = width / 2 - carpetWidth / 2;

  drawTexturedCarpet(carpetX, platformY + platformHeight, carpetWidth, height - platformY - platformHeight);

  // Draw chandeliers with more detail
  drawDetailedChandelier(width * 0.25, wallHeight * 0.2);
  drawDetailedChandelier(width * 0.75, wallHeight * 0.2);

  // Draw wall torches with more detail
  drawDetailedTorch(width * 0.15, wallHeight * 0.5);
  drawDetailedTorch(width * 0.85 - windowWidth, wallHeight * 0.5);
}

// Function to draw marble floor with texture
function drawMarbleFloor(x, y, width, height) {
  const gradient = ctx.createLinearGradient(x, y, x + width, y + height);
  gradient.addColorStop(0, '#D3D3D3');
  gradient.addColorStop(1, '#A9A9A9');
  ctx.fillStyle = gradient;
  ctx.fillRect(x, y, width, height);
  ctx.strokeStyle = '#C0C0C0';
  ctx.lineWidth = 2;
  ctx.strokeRect(x, y, width, height);
}

// Function to draw stone walls with texture
function drawStoneWalls(x, y, width, height) {
  const gradient = ctx.createLinearGradient(x, y, x, y + height);
  gradient.addColorStop(0, '#696969');
  gradient.addColorStop(1, '#2F4F4F');
  ctx.fillStyle = gradient;
  ctx.fillRect(x, y, width, height);
  ctx.strokeStyle = '#4F4F4F';
  ctx.lineWidth = 3;
  ctx.strokeRect(x, y, width, height);
}

// Function to draw a detailed tapestry
function drawDetailedTapestry(color1, color2, x, y, width, height) {
  const gradient = ctx.createLinearGradient(x, y, x + width, y + height);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  ctx.fillStyle = gradient;
  ctx.fillRect(x, y, width, height);
  ctx.fillStyle = '#FFD700'; // Gold trim
  ctx.fillRect(x, y, width * 0.05, height); // Left trim
  ctx.fillRect(x + width * 0.95, y, width * 0.05, height); // Right trim
  ctx.beginPath();
  ctx.moveTo(x, y + height);
  ctx.lineTo(x + width / 2, y + height + height * 0.1);
  ctx.lineTo(x + width, y + height);
  ctx.closePath();
  ctx.fill();
}

// Function to draw a shaded column with rounded edges
function drawShadedColumn(x, y, width, height) {
  const gradient = ctx.createLinearGradient(x, y, x + width, y);
  gradient.addColorStop(0, '#A9A9A9');
  gradient.addColorStop(1, '#696969');
  ctx.fillStyle = gradient;
  ctx.fillRect(x, y, width, height);
  ctx.beginPath();
  ctx.arc(x + width / 2, y, width / 2, 0, Math.PI, true);
  ctx.fill();
}

// Function to draw a detailed platform for the throne
function drawDetailedPlatform(x, y, width, height) {
  const gradient = ctx.createLinearGradient(x, y, x + width, y + height);
  gradient.addColorStop(0, '#4B2E2E');
  gradient.addColorStop(1, '#2E1A1A');
  ctx.fillStyle = gradient;
  ctx.fillRect(x, y, width, height);
  ctx.strokeStyle = '#8B4513'; // Saddle brown for trim
  ctx.lineWidth = 5;
  ctx.strokeRect(x, y, width, height);
}

// Function to draw an ornate throne
function drawOrnateThrone(x, y, width, height) {
  ctx.fillStyle = '#8B4513'; // Saddle brown
  ctx.fillRect(x, y, width, height);
  ctx.fillStyle = '#4A2C2A'; // Darker brown for details
  ctx.fillRect(x - width * 0.1, y - height * 0.3, width * 1.2, height * 0.3);
  ctx.beginPath();
  ctx.arc(x + width / 2, y, width / 2, 0, Math.PI, true);
  ctx.fill();
  ctx.fillStyle = '#FFD700'; // Gold highlights
  ctx.fillRect(x + width * 0.1, y + height * 0.2, width * 0.8, height * 0.1);
  ctx.fillRect(x + width * 0.15, y + height * 0.4, width * 0.7, height * 0.1);
}

// Function to draw a stained glass window
function drawStainedGlassWindow(x, y, width, height) {
  const gradient = ctx.createLinearGradient(x, y, x + width, y + height);
  gradient.addColorStop(0, '#4682B4');
  gradient.addColorStop(1, '#B0C4DE');
  ctx.fillStyle = gradient;
  ctx.fillRect(x, y, width, height);
  ctx.fillStyle = '#87CEEB'; // Light blue for highlights
  ctx.beginPath();
  ctx.arc(x + width / 2, y, width / 2, 0, Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#C0C0C0'; // Silver for window trim
  ctx.lineWidth = 4;
  ctx.strokeRect(x, y, width, height);
}

// Function to draw a textured red carpet
function drawTexturedCarpet(x, y, width, height) {
  const gradient = ctx.createLinearGradient(x, y, x + width, y + height);
  gradient.addColorStop(0, '#B22222');
  gradient.addColorStop(1, '#8B0000');
  ctx.fillStyle = gradient;
  ctx.fillRect(x, y, width, height);
  ctx.strokeStyle = '#FFD700'; // Gold trim
  ctx.lineWidth = 3;
  ctx.strokeRect(x, y, width, height);
}

// Function to draw a detailed chandelier
function drawDetailedChandelier(x, y) {
  const radius = canvas.width * 0.03;
  ctx.fillStyle = '#FFD700'; // Gold
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#B8860B'; // Dark goldenrod
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.fillStyle = '#FFFFFF'; // White light bulbs
  ctx.beginPath();
  ctx.arc(x - radius / 2, y + radius / 2, radius / 5, 0, Math.PI * 2);
  ctx.arc(x + radius / 2, y + radius / 2, radius / 5, 0, Math.PI * 2);
  ctx.arc(x, y + radius, radius / 5, 0, Math.PI * 2);
  ctx.fill();
}

// Function to draw a detailed torch
function drawDetailedTorch(x, y) {
  ctx.fillStyle = '#FF4500'; // Orange-red flame
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 15, y - 30);
  ctx.lineTo(x - 15, y - 30);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = '#8B4513'; // Saddle brown for torch
  ctx.fillRect(x - 5, y, 10, 30);
  ctx.strokeStyle = '#FFD700'; // Gold trim
  ctx.lineWidth = 2;
  ctx.strokeRect(x - 5, y, 10, 30);
}

// Resize canvas on window resize
window.addEventListener('resize', resizeCanvas);

// Initial call to set up canvas
resizeCanvas();

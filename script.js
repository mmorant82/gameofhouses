// Get canvas and context
const canvas = document.getElementById('castleCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawCastleInterior();
}

// Draw the castle interior
function drawCastleInterior() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Define dimensions based on canvas size
  const width = canvas.width;
  const height = canvas.height;
  const floorHeight = height * 0.3;
  
  // Draw floor
  ctx.fillStyle = '#8B5A2B'; // Brown color
  ctx.fillRect(0, height - floorHeight, width, floorHeight);

  // Draw walls
  ctx.fillStyle = '#C0C0C0'; // Light gray color
  ctx.fillRect(0, 0, width, height - floorHeight);

  // Draw columns
  const columnWidth = width * 0.05;
  const columnHeight = height * 0.6;
  const columnSpacing = width * 0.15;
  const columnY = height - floorHeight - columnHeight;
  ctx.fillStyle = '#A9A9A9'; // Dark gray color

  for (let i = 1; i < 6; i++) {
    const x = i * columnSpacing;
    ctx.fillRect(x, columnY, columnWidth, columnHeight);
  }

  // Draw throne
  const throneWidth = width * 0.1;
  const throneHeight = height * 0.2;
  const throneX = width / 2 - throneWidth / 2;
  const throneY = height - floorHeight - throneHeight;
  
  // Throne base
  ctx.fillStyle = '#654321'; // Dark brown color
  ctx.fillRect(throneX, throneY, throneWidth, throneHeight);
  
  // Throne backrest
  ctx.fillStyle = '#8B4513'; // Saddle brown color
  ctx.fillRect(throneX - throneWidth * 0.1, throneY - throneHeight * 0.5, throneWidth * 1.2, throneHeight * 0.5);
  
  // Draw windows
  const windowWidth = width * 0.08;
  const windowHeight = height * 0.2;
  const windowY = height * 0.1;
  ctx.fillStyle = '#ADD8E6'; // Light blue color
  
  // Left window
  ctx.beginPath();
  ctx.arc(width * 0.25, windowY + windowHeight / 2, windowWidth / 2, Math.PI, 0);
  ctx.rect(width * 0.25 - windowWidth / 2, windowY + windowHeight / 2, windowWidth, windowHeight / 2);
  ctx.fill();
  ctx.closePath();
  
  // Right window
  ctx.beginPath();
  ctx.arc(width * 0.75, windowY + windowHeight / 2, windowWidth / 2, Math.PI, 0);
  ctx.rect(width * 0.75 - windowWidth / 2, windowY + windowHeight / 2, windowWidth, windowHeight / 2);
  ctx.fill();
  ctx.closePath();
  
  // Draw chandeliers
  const chandelierRadius = width * 0.03;
  const chandelierY = height * 0.2;
  ctx.fillStyle = '#FFD700'; // Gold color
  
  // Left chandelier
  ctx.beginPath();
  ctx.arc(width * 0.4, chandelierY, chandelierRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
  
  // Right chandelier
  ctx.beginPath();
  ctx.arc(width * 0.6, chandelierY, chandelierRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
  
  // Chandelier chains
  ctx.strokeStyle = '#B8860B'; // Dark goldenrod color
  ctx.lineWidth = 2;
  
  ctx.beginPath();
  ctx.moveTo(width * 0.4, 0);
  ctx.lineTo(width * 0.4, chandelierY);
  ctx.stroke();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.moveTo(width * 0.6, 0);
  ctx.lineTo(width * 0.6, chandelierY);
  ctx.stroke();
  ctx.closePath();
}

// Resize canvas on window resize
window.addEventListener('resize', resizeCanvas);

// Initial call to set up canvas
resizeCanvas();

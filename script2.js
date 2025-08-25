// Get the SVG element
const svg = document.getElementById("drawingCanvas");

let isDrawing = false;       // Flag to track drawing state
let startX, startY;          // Start coordinates
let rect;                    // Current rectangle being drawn

// Function to start drawing
svg.addEventListener("mousedown", (e) => {
    isDrawing = true;
    startX = e.offsetX;
    startY = e.offsetY;

    // Create a new rectangle element
    rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", startX);
    rect.setAttribute("y", startY);
    rect.setAttribute("width", 0);
    rect.setAttribute("height", 0);
    rect.setAttribute("fill", "rgba(0, 128, 255, 0.5)");
    rect.setAttribute("stroke", "#0055aa");
    rect.setAttribute("stroke-width", 2);

    svg.appendChild(rect);
});

// Function to update rectangle while dragging
svg.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;

    const currentX = e.offsetX;
    const currentY = e.offsetY;

    const width = Math.abs(currentX - startX);
    const height = Math.abs(currentY - startY);

    rect.setAttribute("width", width);
    rect.setAttribute("height", height);

    // Adjust x and y if drawing to top-left direction
    rect.setAttribute("x", Math.min(currentX, startX));
    rect.setAttribute("y", Math.min(currentY, startY));
});

// Function to finish drawing
svg.addEventListener("mouseup", () => {
    isDrawing = false;
    rect = null; // Reset current rectangle
});

// Optional: cancel drawing if mouse leaves the canvas
svg.addEventListener("mouseleave", () => {
    if (isDrawing) {
        isDrawing = false;
        rect = null;
    }
});

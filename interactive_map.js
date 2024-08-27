document.addEventListener('DOMContentLoaded', () => {
    fetch('Thignyia Minimal 2024-08-26-22-11.json')
        .then(response => response.json())
        .then(data => {
            const houses = data.pack.features; // Assuming 'features' are the regions

            houses.forEach(house => {
                generateRegion(house);
            });
        });

    function generateRegion(house) {
        const svgNS = "http://www.w3.org/2000/svg";
        const polygon = document.createElementNS(svgNS, "polygon");
        
        // Set attributes based on the JSON data
        polygon.setAttribute("points", house.vertices.join(" ")); // Assuming 'vertices' contains an array of points
        polygon.setAttribute("id", "house" + house.i);
        polygon.setAttribute("fill", "#3498db");
        polygon.setAttribute("stroke", "#2980b9");
        polygon.setAttribute("stroke-width", "2");

        // Add interactivity
        polygon.addEventListener('click', () => {
            zoomToRegion("house" + house.i, house.name, house.details);
        });

        // Append to SVG
        document.getElementById('worldMap').appendChild(polygon);
    }

    function zoomToRegion(regionId, houseName, details) {
        const map = document.getElementById('worldMap');
        const region = document.getElementById(regionId);

        // Remove any previous zoom
        map.classList.remove('zoomed');

        // Center the map on the selected region
        const bbox = region.getBBox();
        const centerX = bbox.x + bbox.width / 2;
        const centerY = bbox.y + bbox.height / 2;
        map.style.transformOrigin = `${centerX}px ${centerY}px`;

        // Add zoom class to the map
        setTimeout(() => {
            map.classList.add('zoomed');
        }, 10);

        // Display house details (for demo purposes, using an alert)
        alert(`House: ${houseName}\nDetails: ${details}`);
    }
});

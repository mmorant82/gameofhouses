const regions = [
    {
        name: "Drakmar",
        motto: "Strength Through Unity",
        strengths: "Strong military, Loyal populace",
        weaknesses: "Isolated, Stubborn leadership",
        seal: "seal_drakmar.png"
    },
    {
        name: "Velandor",
        motto: "Fortune Favors the Bold",
        strengths: "Wealthy, Diplomatic influence",
        weaknesses: "Dependent on trade, Soft military",
        seal: "seal_velandor.png"
    },
    {
        name: "Thornreach",
        motto: "Endure and Overcome",
        strengths: "Resilient, Resourceful",
        weaknesses: "Harsh environment, Paranoid leaders",
        seal: "seal_thornreach.png"
    },
    {
        name: "Ironclad",
        motto: "Honor and Duty",
        strengths: "Strong fortifications, Honorable",
        weaknesses: "Rigid, Unyielding",
        seal: "seal_ironclad.png"
    },
    {
        name: "Ravenmoor",
        motto: "Knowledge is Power",
        strengths: "Espionage, Cunning leadership",
        weaknesses: "Feared and Distrusted, Limited army",
        seal: "seal_ravenmoor.png"
    },
    {
        name: "Windhaven",
        motto: "Freedom Above All",
        strengths: "Naval power, Independent",
        weaknesses: "Scattered, Difficult to unite",
        seal: "seal_windhaven.png"
    },
    {
        name: "Stonevale",
        motto: "Solid as Stone",
        strengths: "Rich resources, Strong industry",
        weaknesses: "Slow to change, Conservative",
        seal: "seal_stonevale.png"
    },
    {
        name: "Frosthelm",
        motto: "In Cold We Trust",
        strengths: "Resilient people, Natural defenses",
        weaknesses: "Harsh climate, Isolated",
        seal: "seal_frosthelm.png"
    },
    {
        name: "Goldspire",
        motto: "Prosperity Through Unity",
        strengths: "Wealthy, Influential",
        weaknesses: "Overconfident, Greedy",
        seal: "seal_goldspire.png"
    }
];

const regionGrid = document.getElementById('regionGrid');
const regionDetails = document.getElementById('regionDetails');
const nextButton = document.getElementById('nextButton');
let selectedRegion = null;

// Function to display region cards
function displayRegions() {
    regions.forEach(region => {
        const regionCard = document.createElement('div');
        regionCard.className = 'region-card';
        regionCard.style.backgroundImage = `url(${region.seal})`;
        regionCard.innerHTML = `<h2>${region.name}</h2><p>${region.motto}</p>`;
        regionCard.addEventListener('click', () => selectRegion(region));
        regionGrid.appendChild(regionCard);
    });
}

// Function to handle region selection
function selectRegion(region) {
    selectedRegion = region;
    regionDetails.style.display = 'block';
    regionDetails.innerHTML = `
        <h3>${region.name}</h3>
        <p><strong>Motto:</strong> ${region.motto}</p>
        <p><strong>Strengths:</strong> ${region.strengths}</p>
        <p><strong>Weaknesses:</strong> ${region.weaknesses}</p>
    `;
    nextButton.disabled = false;
}

// Initialize the region grid on page load
displayRegions();

// Handle Next button click
nextButton.addEventListener('click', () => {
    if (selectedRegion) {
        // Store the selected region name in localStorage
        localStorage.setItem('selectedRegion', selectedRegion.name);
        // Redirect to the character details screen
        window.location.href = 'character_details.html';
    }
});

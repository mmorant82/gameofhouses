document.addEventListener('DOMContentLoaded', () => {
    // Retrieve character details from localStorage
    const characterDetails = JSON.parse(localStorage.getItem('characterDetails'));
    const characterTraits = JSON.parse(localStorage.getItem('characterTraits'));

    if (characterDetails) {
        document.getElementById('characterName').textContent = `${characterDetails.firstName} ${characterDetails.lastName}`;
        document.getElementById('characterSex').textContent = characterDetails.sex.charAt(0).toUpperCase() + characterDetails.sex.slice(1);
        document.getElementById('characterBirthOrder').textContent = characterDetails.birthOrder.charAt(0).toUpperCase() + characterDetails.birthOrder.slice(1);
    }

    // Define categories and trait weights
    const categories = {
        personality: ["Compassionate", "Bitter", "Cunning", "Loyal", "Prideful", "Reserved"],
        skills: ["Strategic", "Intelligent", "Disciplined", "Resourceful", "Determined", "Practical"],
        background: ["Generous", "Just", "Obedient", "Resilient", "Vengeful", "Suspicious"]
    };

    const traitWeights = {
        Compassionate: 3,
        Generous: 2,
        Strategic: 4,
        Intelligent: 4,
        Understanding: 3,
        Cautious: 2,
        Suspicious: 2,
        Competitive: 3,
        Prideful: 2,
        Reserved: 2,
        Practical: 3,
        Bitter: 1,
        Vengeful: 2,
        Just: 2,
        Responsible: 2,
        Obedient: 2,
        Loyal: 3,
        Cunning: 3,
        Resilient: 3,
        Resourceful: 4,
        Disciplined: 4,
        Determined: 4,
        Romantic: 2,
        Reflective: 3,
        Peaceful: 2
    };

    // Function to display traits in categories with weights
    function displayTraits(categoryId, traits) {
        const traitList = document.getElementById(categoryId);
        traits.forEach(trait => {
            if (traitWeights[trait]) {
                const listItem = document.createElement('li');
                listItem.textContent = trait;
                listItem.style.fontSize = `${1 + (traitWeights[trait] * 0.2)}em`; // Adjust size based on weight
                traitList.appendChild(listItem);
            }
        });
    }

    if (characterTraits) {
        displayTraits('personalityTraits', categories.personality.filter(trait => characterTraits.includes(trait)));
        displayTraits('skillsTraits', categories.skills.filter(trait => characterTraits.includes(trait)));
        displayTraits('backgroundTraits', categories.background.filter(trait => characterTraits.includes(trait)));
    }

    // Handle Start button click
    document.getElementById('startButton').addEventListener('click', () => {
        // Redirect to the main game or a new phase
        window.location.href = 'game_start.html'; // Replace with your game start page
    });
});

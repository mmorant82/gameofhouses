document.addEventListener('DOMContentLoaded', () => {
    // Retrieve character details from localStorage
    const characterDetails = JSON.parse(localStorage.getItem('characterDetails'));
    const characterTraits = JSON.parse(localStorage.getItem('characterTraits'));

    if (characterDetails) {
        document.getElementById('characterName').textContent = `${characterDetails.firstName} ${characterDetails.lastName}`;
        document.getElementById('characterSex').textContent = characterDetails.sex.charAt(0).toUpperCase() + characterDetails.sex.slice(1);
        document.getElementById('characterBirthOrder').textContent = characterDetails.birthOrder.charAt(0).toUpperCase() + characterDetails.birthOrder.slice(1);
    }

    if (characterTraits) {
        const traitList = document.getElementById('traitList');
        characterTraits.forEach(trait => {
            const listItem = document.createElement('li');
            listItem.textContent = trait;
            traitList.appendChild(listItem);
        });
    }

    // Handle Start button click
    document.getElementById('startButton').addEventListener('click', () => {
        // Redirect to the main game or a new phase
        window.location.href = 'game_start.html'; // Replace with your game start page
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const lastNameInput = document.getElementById('lastName');
    const region = localStorage.getItem('selectedRegion'); // Get the selected region from localStorage
    if (region) {
        lastNameInput.value = region; // Set last name based on selected region
    }

    const backstoryCheck = document.getElementById('backstoryCheck');
    const backstoryGroup = document.getElementById('backstoryGroup');

    // Toggle the backstory input visibility
    backstoryCheck.addEventListener('change', () => {
        if (backstoryCheck.checked) {
            backstoryGroup.style.display = 'block';
        } else {
            backstoryGroup.style.display = 'none';
        }
    });

    const nextButton = document.getElementById('nextButton');
    nextButton.addEventListener('click', () => {
        const characterDetails = {
            firstName: document.getElementById('firstName').value,
            lastName: lastNameInput.value,
            sex: document.getElementById('sex').value,
            birthOrder: document.getElementById('birthOrder').value,
            backstory: backstoryCheck.checked ? document.getElementById('backstory').value : null
        };

        // Store character details in localStorage or pass them to the next screen
        localStorage.setItem('characterDetails', JSON.stringify(characterDetails));

        // Redirect to the next screen
        window.location.href = 'scenarioSelection.html'; // Assuming the next screen is scenario selection
    });
});

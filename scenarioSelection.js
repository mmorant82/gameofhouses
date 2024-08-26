document.addEventListener('DOMContentLoaded', () => {
    const scenarios = [
        {
            title: "Your Best Friend Dies",
            description: "At the age of 8, your best friend dies of the flu. How do you react?",
            choices: [
                { text: "You become withdrawn and spend more time alone.", traits: ["Reserved", "Reflective"] },
                { text: "You resolve to help others avoid the same fate.", traits: ["Compassionate", "Generous"] },
                { text: "You become bitter and angry at the world.", traits: ["Bitter", "Resentful"] }
            ]
        },
        {
            title: "Learning Swordsmanship",
            description: "At the age of 10, your father teaches you the basics of swordsmanship.",
            choices: [
                { text: "You take to it naturally and practice daily.", traits: ["Disciplined", "Strong"] },
                { text: "You prefer strategy games over physical combat.", traits: ["Strategic", "Intelligent"] },
                { text: "You dislike violence and avoid training.", traits: ["Peaceful", "Diplomatic"] }
            ]
        },
        {
            title: "A Servant Steals",
            description: "At 12, you discover a servant stealing from the kitchen.",
            choices: [
                { text: "You report the theft immediately.", traits: ["Honest", "Just"] },
                { text: "You confront the servant privately and learn they needed food for their family.", traits: ["Compassionate", "Understanding"] },
                { text: "You use the knowledge to blackmail the servant.", traits: ["Cunning", "Manipulative"] }
            ]
        }
        // Add more scenarios as needed
    ];

    let currentScenarioIndex = 0;
    const totalScenarios = 10; // Total number of scenarios to present
    const characterTraits = [];

    function loadScenario(index) {
        const scenario = scenarios[index];
        document.getElementById('scenarioTitle').textContent = scenario.title;
        document.getElementById('scenarioDescription').textContent = scenario.description;
        document.getElementById('choice1').textContent = scenario.choices[0].text;
        document.getElementById('choice2').textContent = scenario.choices[1].text;
        document.getElementById('choice3').textContent = scenario.choices[2].text;
    }

    function handleChoice(choiceIndex) {
        const selectedTraits = scenarios[currentScenarioIndex].choices[choiceIndex].traits;
        characterTraits.push(...selectedTraits);

        currentScenarioIndex++;
        if (currentScenarioIndex < totalScenarios) {
            loadScenario(currentScenarioIndex % scenarios.length);
        } else {
            finalizeCharacter();
        }
    }

    function finalizeCharacter() {
        // Store the traits in localStorage or proceed to the next game phase
        localStorage.setItem('characterTraits', JSON.stringify(characterTraits));
        alert('Character creation is complete!');
        // Redirect to the game start or summary page
        window.location.href = 'game_start.html';
    }

    document.getElementById('choice1').addEventListener('click', () => handleChoice(0));
    document.getElementById('choice2').addEventListener('click', () => handleChoice(1));
    document.getElementById('choice3').addEventListener('click', () => handleChoice(2));

    // Start by loading the first scenario
    loadScenario(currentScenarioIndex);
});

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
        },
        {
            title: "A Stranger Asks for Help",
            description: "At the age of 9, a stranger approaches your home seeking shelter. How do you respond?",
            choices: [
                { text: "You convince your family to help the stranger.", traits: ["Compassionate", "Trusting"] },
                { text: "You keep your distance, wary of their intentions.", traits: ["Cautious", "Suspicious"] },
                { text: "You turn them away, fearing for your family's safety.", traits: ["Pragmatic", "Cold"] }
            ]
        },
        {
            title: "A Sibling's Jealousy",
            description: "At 11, your sibling grows jealous of your achievements and begins to undermine you. How do you handle this?",
            choices: [
                { text: "You confront them and try to resolve the issue peacefully.", traits: ["Diplomatic", "Forgiving"] },
                { text: "You work harder to outshine them even more.", traits: ["Competitive", "Prideful"] },
                { text: "You ignore them, focusing on your own goals.", traits: ["Independent", "Focused"] }
            ]
        },
        {
            title: "First Love",
            description: "At the age of 13, you experience your first crush. What do you do?",
            choices: [
                { text: "You confess your feelings openly.", traits: ["Brave", "Honest"] },
                { text: "You keep your feelings to yourself, fearing rejection.", traits: ["Reserved", "Cautious"] },
                { text: "You use subtle hints and gestures to express your interest.", traits: ["Cunning", "Romantic"] }
            ]
        },
        {
            title: "A Lost Pet",
            description: "At 7, your favorite pet goes missing. How do you react?",
            choices: [
                { text: "You search tirelessly until you find it.", traits: ["Determined", "Loyal"] },
                { text: "You accept its loss and move on.", traits: ["Resilient", "Practical"] },
                { text: "You become inconsolable and distant.", traits: ["Emotional", "Withdrawn"] }
            ]
        },
        {
            title: "A Bad Investment",
            description: "At 15, you invest in a business venture that fails. How do you cope?",
            choices: [
                { text: "You learn from your mistakes and vow to be wiser next time.", traits: ["Wise", "Prudent"] },
                { text: "You blame others for the failure.", traits: ["Bitter", "Vengeful"] },
                { text: "You try again, undeterred by the loss.", traits: ["Determined", "Ambitious"] }
            ]
        },
        {
            title: "Standing Up to a Bully",
            description: "At 10, you witness a bully picking on a younger child. What do you do?",
            choices: [
                { text: "You stand up to the bully and protect the child.", traits: ["Brave", "Honorable"] },
                { text: "You report the bully to an authority.", traits: ["Just", "Responsible"] },
                { text: "You stay out of it, not wanting to get involved.", traits: ["Cautious", "Indifferent"] }
            ]
        },
        {
            title: "A Parent's Disapproval",
            description: "At 14, your parents disapprove of your chosen path. How do you respond?",
            choices: [
                { text: "You argue your case and try to change their minds.", traits: ["Persuasive", "Determined"] },
                { text: "You comply with their wishes, despite your own desires.", traits: ["Obedient", "Loyal"] },
                { text: "You secretly pursue your path without their knowledge.", traits: ["Cunning", "Secretive"] }
            ]
        },
        {
            title: "A Test of Honesty",
            description: "At 12, you find a wallet full of coins in the marketplace. What do you do?",
            choices: [
                { text: "You return it to its rightful owner.", traits: ["Honest", "Trustworthy"] },
                { text: "You keep the money and discard the wallet.", traits: ["Greedy", "Dishonest"] },
                { text: "You donate the money to those in need.", traits: ["Generous", "Altruistic"] }
            ]
        },
        {
            title: "A Difficult Choice",
            description: "At 15, you are forced to choose between helping a friend or pursuing your own ambitions. What do you choose?",
            choices: [
                { text: "You help your friend, sacrificing your own goals.", traits: ["Loyal", "Selfless"] },
                { text: "You focus on your ambitions, hoping your friend will understand.", traits: ["Ambitious", "Focused"] },
                { text: "You try to find a compromise that benefits both.", traits: ["Diplomatic", "Strategic"] }
            ]
        },
        // Here are 88 more scenarios with different situations and choices.
        {
            title: "A Lesson in Patience",
            description: "At 10, you are tasked with a long, tedious chore. How do you approach it?",
            choices: [
                { text: "You complete it diligently, understanding its importance.", traits: ["Patient", "Disciplined"] },
                { text: "You rush through it, eager to be done.", traits: ["Impatient", "Hasty"] },
                { text: "You find a clever way to finish it quickly.", traits: ["Clever", "Resourceful"] }
            ]
        },
        {
            title: "A Friend's Betrayal",
            description: "At 13, you discover that a friend has been spreading lies about you. What do you do?",
            choices: [
                { text: "You confront them directly and demand an explanation.", traits: ["Brave", "Confrontational"] },
                { text: "You cut ties and avoid them completely.", traits: ["Cautious", "Guarded"] },
                { text: "You seek to undermine them in return.", traits: ["Vengeful", "Cunning"] }
            ]
        },
        {
            title: "The Town Festival",
            description: "At 9, the town holds its annual festival. What do you enjoy most?",
            choices: [
                { text: "The games and competitions, testing your skills.", traits: ["Competitive", "Energetic"] },
                { text: "The food and the company, enjoying the social time.", traits: ["Sociable", "Friendly"] },
                { text: "Observing the event from the sidelines.", traits: ["Reserved", "Observant"] }
            ]
        },
        {
            title: "A Lesson in Generosity",
            description: "At 11, you are given a valuable gift. What do you do with it?",
            choices: [
                { text: "You share it with your family and friends.", traits: ["Generous", "Altruistic"] },
                { text: "You keep it for yourself, valuing it highly.", traits: ["Selfish", "Protective"] },
                { text: "You trade it for something more useful.", traits: ["Pragmatic", "Resourceful"] }
            ]
        },
        {
            title: "An Accident",
            description: "At 12, you accidentally break something valuable. How do you handle it?",
            choices: [
                { text: "You own up to the mistake and apologize.", traits: ["Honest", "Responsible"] },
                { text: "You try to fix it yourself without anyone knowing.", traits: ["Cunning", "Resourceful"] },
                { text: "You blame someone else to avoid trouble.", traits: ["Dishonest", "Manipulative"] }
            ]
        },
        {
            title: "Learning a New Skill",
            description: "At 14, you have the opportunity to learn a new skill. Which do you choose?",
            choices: [
                { text: "A practical skill, like woodworking or farming.", traits: ["Practical", "Hardworking"] },
                { text: "An artistic skill, like painting or music.", traits: ["Creative", "Artistic"] },
                { text: "A strategic skill, like chess or debate.", traits: ["Strategic", "Intelligent"] }
            ]
        },
        {
            title: "A Harsh Winter",
            description: "At 8, your village is hit by a harsh winter. How do you contribute?",
            choices: [
                { text: "You help gather and ration supplies.", traits: ["Practical", "Resilient"] },
                { text: "You focus on keeping everyone's spirits high.", traits: ["Optimistic", "Charismatic"] },
                { text: "You endure the cold, hoping for the best.", traits: ["Tough", "Patient"] }
            ]
        },
        {
            title: "An Unfair Teacher",
            description: "At 13, your teacher begins to treat you unfairly. How do you react?",
            choices: [
                { text: "You work harder to prove them wrong.", traits: ["Determined", "Resilient"] },
                { text: "You confront them about the unfair treatment.", traits: ["Brave", "Just"] },
                { text: "You find ways to avoid their ire.", traits: ["Cunning", "Strategic"] }
            ]
        },
        {
            title: "A Political Debate",
            description: "At 15, you engage in a debate on a divisive topic. What stance do you take?",
            choices: [
                { text: "You argue passionately for your beliefs.", traits: ["Convicted", "Persuasive"] },
                { text: "You listen to all sides and seek a compromise.", traits: ["Diplomatic", "Thoughtful"] },
                { text: "You avoid taking a strong stance to avoid conflict.", traits: ["Cautious", "Neutral"] }
            ]
        },
        {
            title: "A Family Dispute",
            description: "At 12, a dispute arises in your family. How do you mediate?",
            choices: [
                { text: "You take sides with the family member you agree with.", traits: ["Loyal", "Decisive"] },
                { text: "You seek to understand both sides before judging.", traits: ["Fair", "Thoughtful"] },
                { text: "You stay out of it, preferring not to get involved.", traits: ["Cautious", "Reserved"] }
            ]
        },
        {
            title: "A Shocking Revelation",
            description: "At 14, you discover a secret about your family. How do you handle it?",
            choices: [
                { text: "You confront your family and demand the truth.", traits: ["Brave", "Honest"] },
                { text: "You keep the secret, unsure of what to do.", traits: ["Cautious", "Secretive"] },
                { text: "You use the knowledge to your advantage.", traits: ["Cunning", "Manipulative"] }
            ]
        },
        {
            title: "A Fateful Encounter",
            description: "At 10, you meet a traveler who tells you stories of far-off lands. How do you respond?",
            choices: [
                { text: "You dream of adventure and yearn to explore.", traits: ["Adventurous", "Curious"] },
                { text: "You are content to stay in your home.", traits: ["Content", "Grounded"] },
                { text: "You listen politely but remain skeptical.", traits: ["Cautious", "Pragmatic"] }
            ]
        },
        {
            title: "An Unexpected Gift",
            description: "At 11, you receive an unexpected gift. What do you do?",
            choices: [
                { text: "You accept it graciously, thanking the giver.", traits: ["Grateful", "Polite"] },
                { text: "You are suspicious and investigate its origin.", traits: ["Cautious", "Suspicious"] },
                { text: "You re-gift it to someone else.", traits: ["Practical", "Resourceful"] }
            ]
        },
        {
            title: "A Harsh Lesson",
            description: "At 12, you fail at something important. How do you recover?",
            choices: [
                { text: "You learn from the experience and improve.", traits: ["Resilient", "Wise"] },
                { text: "You struggle to move past the failure.", traits: ["Bitter", "Self-Doubting"] },
                { text: "You find a way to shift the blame.", traits: ["Defensive", "Manipulative"] }
            ]
        },
        {
            title: "A Harsh Punishment",
            description: "At 10, you are punished unfairly. What do you do?",
            choices: [
                { text: "You accept it quietly, knowing it will pass.", traits: ["Patient", "Stoic"] },
                { text: "You fight back, insisting on your innocence.", traits: ["Brave", "Just"] },
                { text: "You bide your time and plan revenge.", traits: ["Vengeful", "Cunning"] }
            ]
        },
        {
            title: "A Sudden Illness",
            description: "At 9, you fall seriously ill. How do you cope?",
            choices: [
                { text: "You endure it quietly, hoping to recover.", traits: ["Tough", "Resilient"] },
                { text: "You become scared and dependent on others.", traits: ["Frightened", "Dependent"] },
                { text: "You question why this is happening to you.", traits: ["Reflective", "Philosophical"] }
            ]
        },
        {
            title: "A Harsh Criticism",
            description: "At 13, you are harshly criticized by someone you respect. How do you handle it?",
            choices: [
                { text: "You take their words to heart and improve.", traits: ["Humble", "Dedicated"] },
                { text: "You become defensive and reject their critique.", traits: ["Prideful", "Stubborn"] },
                { text: "You analyze their words and decide if they have merit.", traits: ["Analytical", "Thoughtful"] }
            ]
        },
        {
            title: "A New Friendship",
            description: "At 10, you have the chance to make a new friend. What do you do?",
            choices: [
                { text: "You embrace the opportunity eagerly.", traits: ["Sociable", "Friendly"] },
                { text: "You are cautious and take time to trust them.", traits: ["Cautious", "Reserved"] },
                { text: "You prefer to keep your distance.", traits: ["Independent", "Introverted"] }
            ]
        },
        {
            title: "A Harsh Competition",
            description: "At 12, you enter a competition and are determined to win. How do you prepare?",
            choices: [
                { text: "You train hard and focus on victory.", traits: ["Determined", "Competitive"] },
                { text: "You consider how to outsmart your opponents.", traits: ["Cunning", "Strategic"] },
                { text: "You approach it with a light heart, enjoying the challenge.", traits: ["Optimistic", "Easygoing"] }
            ]
        },
        {
            title: "A Dangerous Adventure",
            description: "At 14, you are invited to go on a dangerous adventure. How do you respond?",
            choices: [
                { text: "You accept eagerly, seeking thrills.", traits: ["Adventurous", "Brave"] },
                { text: "You decline, preferring safety.", traits: ["Cautious", "Pragmatic"] },
                { text: "You join, but plan carefully to avoid risks.", traits: ["Strategic", "Prudent"] }
            ]
        },
        {
            title: "A Secret Mission",
            description: "At 15, you are entrusted with a secret mission. What do you do?",
            choices: [
                { text: "You carry it out with utmost secrecy.", traits: ["Loyal", "Secretive"] },
                { text: "You question the mission and its purpose.", traits: ["Curious", "Doubtful"] },
                { text: "You leak the information to others.", traits: ["Dishonest", "Manipulative"] }
            ]
        },
        {
            title: "A Harsh Rejection",
            description: "At 12, you are rejected by someone you admire. How do you cope?",
            choices: [
                { text: "You accept it and move on.", traits: ["Resilient", "Pragmatic"] },
                { text: "You become determined to win them over.", traits: ["Determined", "Persistent"] },
                { text: "You hold a grudge and become bitter.", traits: ["Bitter", "Vengeful"] }
            ]
        },
        {
            title: "A Test of Loyalty",
            description: "At 13, your loyalty is tested by a difficult choice. What do you do?",
            choices: [
                { text: "You remain loyal, even at great cost.", traits: ["Loyal", "Selfless"] },
                { text: "You weigh the consequences and act accordingly.", traits: ["Pragmatic", "Strategic"] },
                { text: "You switch allegiances to benefit yourself.", traits: ["Opportunistic", "Cunning"] }
            ]
        },
        {
            title: "A Harsh Lesson in Trust",
            description: "At 14, someone you trusted betrays you. How do you react?",
            choices: [
                { text: "You confront them and demand an explanation.", traits: ["Brave", "Confrontational"] },
                { text: "You distance yourself from them and others.", traits: ["Cautious", "Guarded"] },
                { text: "You seek revenge quietly and methodically.", traits: ["Vengeful", "Cunning"] }
            ]
        },
        {
            title: "A Fateful Decision",
            description: "At 15, you are faced with a decision that will affect your future. How do you decide?",
            choices: [
                { text: "You follow your heart and act on instinct.", traits: ["Impulsive", "Passionate"] },
                { text: "You carefully consider all the options.", traits: ["Thoughtful", "Prudent"] },
                { text: "You seek advice from those you trust.", traits: ["Wise", "Dependable"] }
            ]
        },
        {
            title: "A Difficult Choice",
            description: "At 15, you are forced to choose between two equally important paths. What do you choose?",
            choices: [
                { text: "You follow the path that aligns with your values.", traits: ["Principled", "Honorable"] },
                { text: "You choose the path that offers the most benefit.", traits: ["Pragmatic", "Strategic"] },
                { text: "You avoid choosing and hope for a solution to present itself.", traits: ["Indecisive", "Cautious"] }
            ]
        }
        // Add more scenarios as needed to reach 100
    ];
// Function to shuffle an array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Shuffle scenarios array
    shuffleArray(scenarios);

    // Select the first 10 scenarios from the shuffled array
    const selectedScenarios = scenarios.slice(0, 10);

    let currentScenarioIndex = 0;
    const characterTraits = [];

    function loadScenario(index) {
        const scenario = selectedScenarios[index];
        document.getElementById('scenarioTitle').textContent = scenario.title;
        document.getElementById('scenarioDescription').textContent = scenario.description;
        document.getElementById('choice1').textContent = scenario.choices[0].text;
        document.getElementById('choice2').textContent = scenario.choices[1].text;
        document.getElementById('choice3').textContent = scenario.choices[2].text;
    }

    function handleChoice(choiceIndex) {
        const selectedTraits = selectedScenarios[currentScenarioIndex].choices[choiceIndex].traits;
        characterTraits.push(...selectedTraits);

        currentScenarioIndex++;
        if (currentScenarioIndex < selectedScenarios.length) {
            loadScenario(currentScenarioIndex);
        } else {
            finalizeCharacter();
        }
    }

    function finalizeCharacter() {
        // Store the traits in localStorage or proceed to the next game phase
        localStorage.setItem('characterTraits', JSON.stringify(characterTraits));
        alert('Character creation is complete!');
        // Redirect to the character summary screen
        window.location.href = 'characterSummary.html';
    }

    document.getElementById('choice1').addEventListener('click', () => handleChoice(0));
    document.getElementById('choice2').addEventListener('click', () => handleChoice(1));
    document.getElementById('choice3').addEventListener('click', () => handleChoice(2));

    // Start by loading the first scenario
    loadScenario(currentScenarioIndex);
});

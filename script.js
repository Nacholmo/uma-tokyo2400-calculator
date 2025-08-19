// --- 1. Data Extraction from Image ---
const ALL_SKILLS_DATA = [
    // Gold Skills
    { name: "Escape Artist (Front)", score: 1.29 },
    { name: "On Your Left!", score: 1.17 },
    { name: "No Stopping Me! (non-Front)", score: 0.96 },
    { name: "Unrestrained (Front)", score: 0.62 },
    { name: "Professor of Curvature", score: 0.59 },
    { name: "Sturm und Drang (End)", score: 0.54 },
    { name: "In Body and Mind", score: 0.49 },
    { name: "Killer Tunes", score: 0.44 },
    { name: "Lightning Step", score: 0.41 },
    { name: "Beeline Burst", score: 0.26 },
    { name: "Unyielding", score: 0.13 },

    // Inherited Uniques
    { name: "Let's Pump Some Iron! (for Late/End)", score: 3.42 },
    { name: "Red Shift/LP1211-M", score: 2.84 },
    { name: "Shooting for Victory!", score: 2.84 },
    { name: "Flashy☆Landing", score: 0.73 },
    { name: "Triumphant Pulse", score: 0.70 },
    { name: "Prideful King", score: 0.70 },
    { name: "Behold Thine Emperor's Divine Might", score: 0.69 },
    { name: "Genius x Bakushin = Victory", score: 0.52 },
    { name: "G00 1st. F∞;", score: 0.44 },
    { name: "Where There's a Will, There's a Way", score: 0.43 },
    { name: "Blue Rose Closer", score: 0.43 },
    { name: "Our Ticket to Win!", score: 0.43 },

    // White Skills
    { name: "Groundwork (on Fronts)", score: 1.17 },
    { name: "1,500,000 CC (Late)", score: 0.90 },
    { name: "Medium Straightaways ©", score: 0.89 },
    { name: "Style Straightaways ©", score: 0.89 },
    { name: "Medium Corners ©", score: 0.78 },
    { name: "Style Corners ©", score: 0.78 },
    { name: "Nimble Navigator (non-Front)", score: 0.64 },
    { name: "Tail Held High", score: 0.61 },
    { name: "Medium Straightaways o", score: 0.59 },
    { name: "Style Straightaways o", score: 0.59 },
    { name: "Slipstream", score: 0.51 },
    { name: "Playtime's Over!", score: 0.51 },
    { name: "Medium Corners o", score: 0.48 },
    { name: "Style Corners o", score: 0.48 },
    { name: "Ramp Up", score: 0.38 },
    { name: "Highlander", score: 0.38 },
    { name: "Groundwork (non-Front)", score: 0.38 },
    { name: "Corner Adept o", score: 0.31 },
    { name: "Thunderbolt Step", score: 0.29 },
    { name: "Masterful Gambit", score: 0.24 },
    { name: "Homestretch Haste", score: 0.22 },
    { name: "Up-Tempo", score: 0.14 },

    // Green Skills
    { name: "Left-Handed ©", score: 0.74 },
    { name: "Spring Runner ©", score: 0.74 },
    { name: "Outer Post Proficiency ©", score: 0.74 },
    { name: "Maverick © (unlikely)", score: 0.74 },
    { name: "Long Shot ©", score: 0.74 },
    { name: "Left-Handed o", score: 0.50 },
    { name: "Spring Runner o", score: 0.50 },
    { name: "Outer Post Proficiency o", score: 0.50 },
    { name: "Maverick o (unlikely)", score: 0.50 },
    { name: "Long Shot o", score: 0.50 },
    { name: "Sympathy (unlikely)", score: 0.50 },
    { name: "Lone Wolf (somewhat likely)", score: 0.50 },
    { name: "Firm Conditions ©", score: 0.48 },
    { name: "Competitive Spirit ©", score: 0.48 },
    { name: "Firm Conditions o", score: 0.32 },
    { name: "Competitive Spirit o", score: 0.32 },
    { name: "Sunny Days ©", score: 0.18 },
    { name: "Target in Sight ©", score: 0.18 },
    { name: "Sunny Days o", score: 0.12 },
    { name: "Target in Sight o", score: 0.12 },
];

// --- 2. DOM Elements ---
const skillSearchInput = document.getElementById('skillSearch');
const searchResultsDiv = document.getElementById('searchResults');
const selectedSkillsContainer = document.getElementById('selectedSkillsContainer');
const budgetInput = document.getElementById('budgetInput');
const calculateButton = document.getElementById('calculateButton');
const bestScoreOutput = document.getElementById('bestScoreOutput');
const bestCostOutput = document.getElementById('bestCostOutput');
const bestSkillsOutput = document.getElementById('bestSkillsOutput');
const calculationStatus = document.getElementById('calculationStatus');
const placeholderText = selectedSkillsContainer.querySelector('.placeholder-text');

// --- 3. State Management ---
// Use a Map to store selected skills for easy lookup and to preserve order
// Key: skill name (string), Value: { name, score, cost }
const selectedSkills = new Map();

// --- 4. UI Functions ---

function renderSearchResults(query) {
    searchResultsDiv.innerHTML = '';
    if (query.length < 2) { // Require at least 2 characters for search
        searchResultsDiv.style.display = 'none';
        return;
    }

    const lowerQuery = query.toLowerCase();
    const filteredSkills = ALL_SKILLS_DATA.filter(skill =>
        skill.name.toLowerCase().includes(lowerQuery) && !selectedSkills.has(skill.name)
    );

    if (filteredSkills.length === 0) {
        searchResultsDiv.style.display = 'none';
        return;
    }

    searchResultsDiv.style.display = 'block';
    filteredSkills.slice(0, 10).forEach(skill => { // Limit results to 10
        const item = document.createElement('div');
        item.classList.add('search-result-item');
        item.textContent = `${skill.name} (${skill.score})`;
        item.dataset.skillName = skill.name; // Store full name for selection

        item.addEventListener('click', () => {
            addSkillToSelection(skill.name, skill.score);
            skillSearchInput.value = ''; // Clear search input
            searchResultsDiv.style.display = 'none'; // Hide results
        });
        searchResultsDiv.appendChild(item);
    });
}

function addSkillToSelection(name, score) {
    if (selectedSkills.has(name)) {
        return; // Already selected
    }

    // Default cost to 100 as a reasonable placeholder
    selectedSkills.set(name, { name, score, cost: 100 });
    renderSelectedSkills();
}

function removeSkillFromSelection(name) {
    selectedSkills.delete(name);
    renderSelectedSkills();
}

function updateSkillCost(name, cost) {
    if (selectedSkills.has(name)) {
        const skill = selectedSkills.get(name);
        skill.cost = Math.max(0, parseInt(cost) || 0); // Ensure cost is non-negative integer
        selectedSkills.set(name, skill);
    }
}

function renderSelectedSkills() {
    selectedSkillsContainer.innerHTML = ''; // Clear existing
    if (selectedSkills.size === 0) {
        placeholderText.style.display = 'block';
        selectedSkillsContainer.appendChild(placeholderText);
        return;
    } else {
        placeholderText.style.display = 'none';
    }

    selectedSkills.forEach(skill => {
        const item = document.createElement('div');
        item.classList.add('selected-skill-item');

        item.innerHTML = `
            <div class="skill-info">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-score">(Score: ${skill.score})</span>
            </div>
            Cost: <input type="number" class="skill-cost-input" value="${skill.cost}" min="0">
            <button class="remove-skill-btn" data-skill-name="${skill.name}">Remove</button>
        `;
        selectedSkillsContainer.appendChild(item);

        // Add event listener for cost input
        const costInput = item.querySelector('.skill-cost-input');
        costInput.addEventListener('input', (e) => {
            updateSkillCost(skill.name, e.target.value);
        });

        // Add event listener for remove button
        const removeBtn = item.querySelector('.remove-skill-btn');
        removeBtn.addEventListener('click', (e) => {
            removeSkillFromSelection(e.target.dataset.skillName);
        });
    });
}

function displayResults(bestScore, bestCost, bestSkills) {
    bestScoreOutput.textContent = `Best Score: ${bestScore.toFixed(2)}`;
    bestCostOutput.textContent = `Total Cost: ${bestCost}`;
    bestSkillsOutput.innerHTML = ''; // Clear previous results

    if (bestSkills.length === 0) {
        bestSkillsOutput.innerHTML = '<p>No combination found within budget or no skills selected.</p>';
        return;
    }

    const ul = document.createElement('ul');
    bestSkills.forEach(skillName => {
        const li = document.createElement('li');
        const skillData = ALL_SKILLS_DATA.find(s => s.name === skillName);
        if (skillData) {
            li.textContent = `${skillName} (Score: ${skillData.score}, Cost: ${selectedSkills.get(skillName)?.cost || 'N/A'})`;
        } else {
            li.textContent = skillName; // Fallback if data not found (shouldn't happen)
        }
        ul.appendChild(li);
    });
    bestSkillsOutput.appendChild(ul);
}

// --- 5. Monte Carlo Simulation Logic ---

/**
 * Shuffles an array in-place using Fisher-Yates algorithm.
 * @param {Array} array The array to shuffle.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Runs a Monte Carlo simulation to find the best skill combination.
 * @param {Array<Object>} skills An array of skill objects ({ name, score, cost }).
 * @param {number} budget The total skill point budget.
 * @param {number} iterations The number of random combinations to test.
 * @returns {Object} An object containing bestScore, bestCost, and bestSkills (array of names).
 */
function runMonteCarloSimulation(skills, budget, iterations) {
    let bestScore = 0;
    let bestCost = 0;
    let bestSkills = [];

    if (skills.length === 0 || budget <= 0) {
        return { bestScore: 0, bestCost: 0, bestSkills: [] };
    }

    const availableSkillsArray = Array.from(skills.values()); // Convert Map values to array

    for (let i = 0; i < iterations; i++) {
        let currentScore = 0;
        let currentCost = 0;
        let currentCombination = [];

        // Shuffle a copy of the available skills for each iteration
        const shuffledSkills = [...availableSkillsArray];
        shuffleArray(shuffledSkills);

        for (const skill of shuffledSkills) {
            if (skill.cost !== undefined && skill.cost >= 0 && currentCost + skill.cost <= budget) {
                currentCost += skill.cost;
                currentScore += skill.score;
                currentCombination.push(skill.name);
            }
        }

        if (currentScore > bestScore) {
            bestScore = currentScore;
            bestCost = currentCost;
            bestSkills = currentCombination;
        }
    }

    return { bestScore, bestCost, bestSkills };
}


// --- 6. Event Listeners ---

skillSearchInput.addEventListener('input', (e) => {
    renderSearchResults(e.target.value);
});

// Hide search results if clicking outside
document.addEventListener('click', (e) => {
    if (!searchResultsDiv.contains(e.target) && e.target !== skillSearchInput) {
        searchResultsDiv.style.display = 'none';
    }
});

calculateButton.addEventListener('click', () => {
    const budget = parseInt(budgetInput.value);
    const numIterations = 500000; // You can adjust this number based on desired accuracy vs. performance

    if (isNaN(budget) || budget < 0) {
        alert("Please enter a valid non-negative budget.");
        return;
    }

    if (selectedSkills.size === 0) {
        alert("Please add some skills first.");
        return;
    }

    calculateButton.disabled = true;
    calculationStatus.textContent = `Calculating... (running ${numIterations.toLocaleString()} simulations)`;
    bestSkillsOutput.innerHTML = '<p>Calculating...</p>';

    // Use setTimeout to allow UI to update before heavy computation
    setTimeout(() => {
        const { bestScore, bestCost, bestSkills } = runMonteCarloSimulation(selectedSkills, budget, numIterations);
        displayResults(bestScore, bestCost, bestSkills);
        calculationStatus.textContent = `Calculation complete! (${numIterations.toLocaleString()} simulations)`;
        calculateButton.disabled = false;
    }, 50); // Small delay
});

// Initial render to show placeholder
renderSelectedSkills();
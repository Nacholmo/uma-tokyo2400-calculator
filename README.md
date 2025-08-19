# Uma Musume Skill Optimizer for Tokyo 2400m Champions Meeting

A web-based tool to help Uma Musume players optimize their skill point allocation for the Tokyo 2400m Champions Meeting. Find the highest-scoring skill combination within your given skill point budget using a Monte Carlo simulation.

## ✨ Try it Live!

Experience the optimizer directly on GitHub Pages:
[**https://nacholmo.github.io/uma-tokyo2400-calculator/**](https://nacholmo.github.io/uma-tokyo2400-calculator/)

## 📝 Project Overview

This application addresses the challenge of maximizing skill performance in Uma Musume, specifically for the Tokyo 2400m Champions Meeting. Given a predefined list of skills with their base scores, and allowing users to input the dynamic skill point cost for *their specific build*, the tool employs a Monte Carlo simulation to find the best possible set of skills that fits within a specified budget.

## 🚀 Features

*   **Comprehensive Skill Database:** Includes Gold, Inherited Unique, White, and Green skills with their base scores, transcribed from an in-game screenshot/table.
*   **Fuzzy Skill Search:** Quickly find and add desired skills using a smart, type-ahead search bar.
*   **Custom Skill Costs:** Input the exact skill point cost for each selected skill, reflecting the varied costs encountered in-game based on your training.
*   **Budget-Constrained Optimization:** Set your total available skill points as a budget for the calculation.
*   **Monte Carlo Optimization:** Utilizes a Monte Carlo simulation to efficiently discover a high-scoring skill combination without exceeding your budget.
*   **Clear Results:** Displays the optimal total score achievable, the total cost of that combination, and a list of all skills included in the best build.

## 💡 Why Monte Carlo?

The problem of selecting skills to maximize total score under a budget constraint is akin to the classic Knapsack Problem. For a large number of available skills, finding the *absolute exact* optimal solution can be computationally intensive (NP-hard).

Monte Carlo simulation provides a practical and efficient heuristic approach. By randomly sampling and evaluating many different combinations, it rapidly converges on a very good, near-optimal solution within a reasonable time, making it ideal for a responsive, client-side web application. While not guaranteed to be the global optimum, it provides a highly effective solution for practical use.

## 📊 Skill Data Used

The base scores for the skills are transcribed from the following in-game data:

```
Gold Skills
1.29 Escape Artist (Front)
1.17 On Your Left! (Late)
0.96 No Stopping Me! (non-Front)
0.62 Unrestrained (Front)
0.59 Professor of Curvature
0.54 Sturm und Drang (End)
0.49 In Body and Mind
0.44 Killer Tunes
0.41 Lightning Step
0.26 Beeline Burst
0.13 Unyielding

Inherited Uniques
3.42 Let's Pump Some Iron! (for Late/End)
2.84 Red Shift/LP1211-M
2.84 Shooting for Victory!
0.73 Flashy☆Landing
0.70 Triumphant Pulse
0.70 Prideful King
0.69 Behold Thine Emperor's Divine Might
0.52 Genius x Bakushin = Victory
0.44 G00 1st. F∞;
0.43 Where There's a Will, There's a Way
0.43 Blue Rose Closer
0.43 Our Ticket to Win!

White Skills
1.17 Groundwork (on Fronts)
0.90 1,500,000 CC (Late)
0.89 Medium Straightaways ©
0.89 Style Straightaways ©
0.78 Medium Corners ©
0.78 Style Corners ©
0.64 Nimble Navigator (non-Front)
0.61 Tail Held High
0.59 Medium Straightaways o
0.59 Style Straightaways o
0.51 Slipstream
0.51 Playtime's Over!
0.48 Medium Corners o
0.48 Style Corners o
0.38 Ramp Up
0.38 Highlander
0.38 Groundwork (non-Front)
0.31 Corner Adept o
0.29 Thunderbolt Step
0.24 Masterful Gambit
0.22 Homestretch Haste
0.14 Up-Tempo

Green Skills
0.74 Left-Handed ©
0.74 Spring Runner ©
0.74 Outer Post Proficiency ©
0.74 Maverick © (unlikely)
0.74 Long Shot ©
0.50 Left-Handed o
0.50 Spring Runner o
0.50 Outer Post Proficiency o
0.50 Maverick o (unlikely)
0.50 Long Shot o
0.50 Sympathy (unlikely)
0.50 Lone Wolf (somewhat likely)
0.48 Firm Conditions ©
0.48 Competitive Spirit ©
0.32 Firm Conditions o
0.32 Competitive Spirit o
0.18 Sunny Days ©
0.18 Target in Sight ©
0.12 Sunny Days o
0.12 Target in Sight o
```

## 🎮 How to Use

1.  **Access the Tool:** Visit the [live demo link](https://nacholmo.github.io/uma-tokyo2400-calculator/).
2.  **Add Skills:** In the "Input Your Available Skills" section, use the search bar to find skills you want to consider for your build. Type a few letters, and matching skills will appear. Click on a skill to add it to your selection.
3.  **Set Skill Costs:** For each skill you've added, carefully input its specific skill point cost in the provided input field next to its name. **Remember:** These costs are dynamic in-game and are crucial for accurate optimization.
4.  **Set Your Budget:** In the "Set Your Skill Point Budget" section, enter your total available skill points for this build.
5.  **Calculate:** Click the "Calculate Best Score" button. The tool will run a Monte Carlo simulation.
6.  **Review Results:** The "Best Combination Found" section will display:
    *   The highest total score achievable with your selected skills and budget.
    *   The total cost of that optimal combination.
    *   A list of all the skills included in the recommended build.

## 🛠️ Technologies Used

*   **HTML5:** For the page structure and content.
*   **CSS3:** For styling and a clean, intuitive user interface.
*   **JavaScript:** Powers the fuzzy search, dynamic UI updates, and the Monte Carlo optimization algorithm.

## 🧑‍💻 Development

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/nacholmo/uma-tokyo2400-calculator.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd uma-tokyo2400-calculator
    ```
3.  **Open `index.html`** in your preferred web browser.

## 🤝 Contributing

Contributions are welcome! If you find any bugs, have suggestions for new features, or want to improve the code, feel free to open an issue or submit a pull request.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

yes, gemini wrote this lmao

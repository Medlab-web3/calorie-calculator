# calorie-calculator

A dynamic web application for calculating caloric needs, macronutrient distribution, and other health metrics like BMI, water, and fiber intake based on user inputs. This tool is built using HTML, CSS, and JavaScript.

---

## Features
- **User-Friendly Interface:** Switch seamlessly between metric and imperial units.
- **Caloric Needs:** Calculates BMR (Basal Metabolic Rate) using multiple formulas (Mifflin-St Jeor, Harris-Benedict, etc.).
- **TDEE and Goal Adjustment:** Adjusts caloric recommendations based on activity level and fitness goals (lose, maintain, or gain weight).
- **Macronutrient Breakdown:** Provides protein, fat, and carbohydrate recommendations.
- **Additional Metrics:** Calculates BMI, fiber intake, and water recommendations.
- **Error Validation:** Highlights input errors for user-friendly troubleshooting.

---

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Inputs](#inputs)
4. [Results](#results)
5. [Technologies Used](#technologies-used)
6. [Contributing](#contributing)
7. [License](#license)
8. [Contact](#Contact)
---

## Installation

1. Clone the repository:
```bash
   git clone https://github.com/Medlab-web3/calorie-calculator.git
```
2. Navigate to the project directory:
```bash 
cd calorie-calculator
```

3. Open index.html in your browser to run the application.


---

## Usage

1. Open the application in a web browser.
2. Input your:
   - **Age**
   - **Height** (in cm, feet, or inches)
   - **Weight** (in kg or lbs)
   - **Gender**
   - **Activity level**
   - **Fitness goal** (Lose, Maintain, or Gain weight)
3. Optional: Choose a specific formula for BMR calculation or toggle advanced settings (e.g., body fat percentage).
4. View the results, which include caloric needs, macronutrients, BMI, water, and fiber recommendations.

---

## Inputs

### Required Fields:
- **Age**: A number between 1-120.
- **Height**: Accepts either metric (cm) or imperial (feet + inches).
- **Weight**: Accepts either metric (kg) or imperial (lbs).
- **Activity Level**: Select from sedentary to very active.
- **Fitness Goal**: Choose between Lose, Maintain, or Gain.

### Optional Settings:
- **Gender**: Toggle between male and female.
- **BMR Formula**: Mifflin-St Jeor, Harris-Benedict, Katch-McArdle, WHO, or Cunningham.
- **Body Fat Percentage**: For more accurate lean mass calculations (if applicable).

---
## Results

### Outputs:
- **Calories**: Total daily caloric expenditure.
- **BMR**: Basal Metabolic Rate.
- **TDEE**: Total Daily Energy Expenditure.
- **Macros**:
  - **Protein**: Recommended intake in grams.
  - **Fat**: Recommended intake in grams.
  - **Carbs**: Recommended intake in grams.
- **BMI**: Body Mass Index.
- **Fiber**: Recommended intake in grams.
- **Water**: Recommended intake in liters.

### Display:
Results are presented in an organized grid format with clear labels for each metric.

---

## Technologies Used

- **HTML5**: Structuring the webpage.
- **CSS3**: Styling and responsive design.
- **JavaScript**: Dynamic calculations and DOM manipulation.

---
## Contributing

We welcome contributions from developers of all skill levels! Whether you want to report bugs, suggest features, or contribute code, here’s how you can get involved:

### How to Contribute

1. **Fork the Repository**  
   - Click the "Fork" button at the top of this repository to create your copy.

2. **Clone Your Fork**  
   - Clone your forked repository to your local machine:  
     ```bash
     git clone https://github.com/Medlab-web3/calorie-calculator.git
     ```

3. **Create a New Branch**  
   - Create a branch for your feature or bug fix:  
     ```bash
     git checkout -b feature-name
     ```

4. **Make Changes**  
   - Implement your changes in the codebase. Follow the coding standards and add comments where necessary.

5. **Test Your Changes**  
   - Ensure your changes do not break existing functionality. Add new tests if applicable.

6. **Commit Your Changes**  
   - Write a descriptive commit message:  
     ```bash
     git commit -m "Add feature-name: description of changes"
     ```

7. **Push to Your Branch**  
   - Push your changes to GitHub:  
     ```bash
     git push origin feature-name
     ```

8. **Submit a Pull Request**  
   - Navigate to the original repository and click "Compare & pull request."  
   - Provide a clear and concise description of your changes in the pull request.

### Guidelines

- **Code Quality**: Ensure your code is clean, well-documented, and adheres to best practices.
- **Commit Messages**: Use clear and concise commit messages that describe what and why changes were made.
- **Respect Existing Code**: Avoid unnecessary changes to unrelated parts of the code.
- **Tests**: If applicable, include unit or integration tests for your changes.

  ## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the license terms.

---

## Contact

For questions, suggestions, or issues, feel free to reach out:

- **Email**: [mohamed.labdaoui@gmail.com](mailto:mohamed.labdaoui@gmail.com)

We appreciate your feedback and contributions to improve this project!

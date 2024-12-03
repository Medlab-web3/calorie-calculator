// Constants for calculations
const PROTEIN_PER_KG = 2.2;
const FAT_PER_KG = 1;
const FIBER_PER_1000_KCAL = 14;
const WATER_PER_KG = 0.033;

// Unit conversion constants
const LBS_TO_KG = 0.453592;
const IN_TO_CM = 2.54;
const FT_TO_IN = 12;
const CM_TO_IN = 0.393701;

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    // Input elements
    const heightMetric = document.querySelector('.height-metric');
    const heightImperial = document.querySelector('.height-imperial');
    const heightCm = document.getElementById('height-cm');
    const heightFt = document.getElementById('height-ft');
    const heightIn = document.getElementById('height-in');
    
    const ageInput = document.getElementById('age');
    const weightInput = document.getElementById('weight');
    const activitySelect = document.getElementById('activity');
    const workoutsInput = document.getElementById('workouts');
    const goalSelect = document.getElementById('goal');
    const genderToggle = document.getElementById('gender-toggle');
    const unitToggle = document.getElementById('unit-toggle');
    const bodyFatToggle = document.getElementById('body-fat-toggle');
    const formulaInputs = document.querySelectorAll('input[name="formula"]');

    // Add event listeners
    const inputs = [heightCm, heightFt, heightIn, ageInput, weightInput, 
                   activitySelect, workoutsInput, goalSelect, 
                   genderToggle, unitToggle];
    
    inputs.forEach(input => {
        if (input) {
            input.addEventListener('change', calculateAll);
            if (input.type === 'number') {
                input.addEventListener('input', calculateAll);
            }
        }
    });

    formulaInputs.forEach(input => {
        input.addEventListener('change', calculateAll);
    });

    // Add unit toggle listener
    unitToggle.addEventListener('change', function() {
        const isMetric = this.checked;
        updateUnitDisplay(isMetric);
        calculateAll();
    });

    // Initial unit setup
    updateUnitDisplay(unitToggle.checked);

    // Ajouter des écouteurs d'événements pour effacer les erreurs lors de la saisie
    const inputsToClearErrors = document.querySelectorAll('input[type="number"]');
    inputsToClearErrors.forEach(input => {
        input.addEventListener('input', function() {
            this.classList.remove('error');
            if (document.querySelectorAll('.error').length === 0) {
                clearErrors();
            }
        });
    });
});

function updateUnitDisplay(isMetric) {
    const heightMetric = document.querySelector('.height-metric');
    const heightImperial = document.querySelector('.height-imperial');
    const weightUnit = document.querySelector('#weight').nextElementSibling;
    const weightInput = document.querySelector('#weight');

    if (isMetric) {
        // Switch to metric display
        heightMetric.style.display = 'block';
        heightImperial.style.display = 'none';
        weightUnit.textContent = 'kg';
        weightInput.placeholder = 'kg';
        
        // Convert values if they exist
        const currentHeight = getHeightInCm();
        if (currentHeight) {
            document.getElementById('height-cm').value = Math.round(currentHeight);
        }
        
        const currentWeight = getWeightInKg();
        if (currentWeight) {
            weightInput.value = Math.round(currentWeight);
        }
    } else {
        // Switch to imperial display
        heightMetric.style.display = 'none';
        heightImperial.style.display = 'block';
        weightUnit.textContent = 'lbs';
        weightInput.placeholder = 'lbs';
        
        // Convert values if they exist
        const heightCm = parseFloat(document.getElementById('height-cm').value);
        if (heightCm) {
            const totalInches = heightCm / IN_TO_CM;
            const feet = Math.floor(totalInches / 12);
            const inches = Math.round(totalInches % 12);
            
            document.getElementById('height-ft').value = feet;
            document.getElementById('height-in').value = inches;
        }
        
        const weightKg = parseFloat(weightInput.value);
        if (weightKg) {
            weightInput.value = Math.round(weightKg / LBS_TO_KG);
        }
    }
}

function getHeightInCm() {
    const isMetric = document.getElementById('unit-toggle').checked;
    
    if (isMetric) {
        return parseFloat(document.getElementById('height-cm').value) || 0;
    } else {
        const feet = parseFloat(document.getElementById('height-ft').value) || 0;
        const inches = parseFloat(document.getElementById('height-in').value) || 0;
        return ((feet * FT_TO_IN) + inches) * IN_TO_CM;
    }
}

function getWeightInKg() {
    const weight = parseFloat(document.getElementById('weight').value) || 0;
    return document.getElementById('unit-toggle').checked ? weight : weight * LBS_TO_KG;
}

function validateInputs() {
    const height = getHeightInCm();
    const weight = getWeightInKg();
    const age = parseInt(document.getElementById('age').value) || 0;
    const workouts = parseInt(document.getElementById('workouts').value) || 0;

    let errors = [];

    // Vérification de la hauteur
    if (height <= 0) {
        errors.push("Please enter a valid height");
        highlightError('height-cm');
        highlightError('height-ft');
        highlightError('height-in');
    }

    // Vérification du poids
    if (weight <= 0) {
        errors.push("Please enter a valid weight");
        highlightError('weight');
    }

    // Vérification de l'âge
    if (age <= 0 || age > 120) {
        errors.push("Please enter a valid age (1-120)");
        highlightError('age');
    }

    // Vérification des séances d'entraînement
    if (workouts < 0 || workouts > 7) {
        errors.push("Please enter a valid number of workouts (0-7)");
        highlightError('workouts');
    }

    // Si des erreurs existent, les afficher
    if (errors.length > 0) {
        showErrors(errors);
        return false;
    }

    clearErrors();
    return true;
}

function highlightError(inputId) {
    const input = document.getElementById(inputId);
    if (input) {
        input.classList.add('error');
    }
}

function clearErrors() {
    // Supprimer toutes les classes d'erreur
    document.querySelectorAll('.error').forEach(element => {
        element.classList.remove('error');
    });

    // Cacher le message d'erreur s'il existe
    const errorContainer = document.querySelector('.error-container');
    if (errorContainer) {
        errorContainer.style.display = 'none';
    }
}

function showErrors(errors) {
    // Créer ou réutiliser le conteneur d'erreurs
    let errorContainer = document.querySelector('.error-container');
    
    if (!errorContainer) {
        errorContainer = document.createElement('div');
        errorContainer.className = 'error-container';
        document.querySelector('.input-section').insertAdjacentElement('beforebegin', errorContainer);
    }

    // Afficher les erreurs
    errorContainer.innerHTML = `
        <div class="error-content">
            <h3>Please correct the following errors:</h3>
            <ul>
                ${errors.map(error => `<li>${error}</li>`).join('')}
            </ul>
        </div>
    `;
    errorContainer.style.display = 'block';

    // Cacher les résultats s'ils sont affichés
    document.querySelector('.results-section').style.display = 'none';
}

function calculateAll() {
    // Vérifier les inputs avant de calculer
    if (!validateInputs()) {
        return;
    }

    const height = getHeightInCm();
    const weight = getWeightInKg();
    const age = parseInt(document.getElementById('age').value) || 0;
    const isMale = !document.getElementById('gender-toggle').checked;
    const activity = parseFloat(document.getElementById('activity').value) || 1.2;
    const goal = document.getElementById('goal').value;
    const formula = document.querySelector('input[name="formula"]:checked').value;

    // Calculate BMR based on selected formula
    const bmr = calculateBMR(weight, height, age, isMale, formula);
    
    // Calculate TDEE
    const tdee = calculateTDEE(bmr, activity);
    
    // Calculate goal-adjusted calories
    const calories = adjustCaloriesForGoal(tdee, goal);
    
    // Calculate macros
    const { protein, fat, carbs } = calculateMacros(weight, calories);
    
    // Calculate BMI
    const bmi = calculateBMI(weight, height);
    
    // Calculate fiber and water recommendations
    const fiber = calculateFiber(calories);
    const water = calculateWater(weight);

    // Update results
    updateResults({
        calories,
        bmr,
        tdee,
        protein,
        fat,
        carbs,
        bmi,
        fiber,
        water
    });

    // Show results section
    document.querySelector('.results-section').style.display = 'grid';
}

function calculateBMR(weight, height, age, isMale, formula) {
    switch (formula) {
        case 'mifflin':
            return (10 * weight) + (6.25 * height) - (5 * age) + (isMale ? 5 : -161);
        case 'harris':
            if (isMale) {
                return 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
            }
            return 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
        case 'katch':
            const bodyFat = document.getElementById('body-fat-toggle').checked ? 
                          parseFloat(prompt('Enter your body fat percentage:')) || 20 : 20;
            const leanMass = weight * (1 - (bodyFat / 100));
            return 370 + (21.6 * leanMass);
        case 'cunningham':
            return 500 + (22 * weight);
        case 'who':
            if (isMale) {
                return (11.3 * weight) + (16 * height / 100) + 901;
            }
            return (8.7 * weight) - (25 * height / 100) + 865;
        case 'average':
            const allFormulas = ['mifflin', 'harris', 'katch', 'cunningham', 'who'];
            const sum = allFormulas.reduce((acc, f) => acc + calculateBMR(weight, height, age, isMale, f), 0);
            return sum / allFormulas.length;
        default:
            return 0;
    }
}

function calculateTDEE(bmr, activityLevel) {
    return bmr * activityLevel;
}

function adjustCaloriesForGoal(tdee, goal) {
    switch (goal) {
        case 'lose':
            return tdee - 500;
        case 'gain':
            return tdee + 500;
        default:
            return tdee;
    }
}

function calculateMacros(weight, calories) {
    const protein = weight * PROTEIN_PER_KG;
    const fat = weight * FAT_PER_KG;
    const proteinCalories = protein * 4;
    const fatCalories = fat * 9;
    const carbCalories = calories - proteinCalories - fatCalories;
    const carbs = carbCalories / 4;

    return { protein, fat, carbs };
}

function calculateBMI(weight, height) {
    return (weight / Math.pow(height / 100, 2)).toFixed(1);
}

function calculateFiber(calories) {
    return (calories / 1000 * FIBER_PER_1000_KCAL).toFixed(1);
}

function calculateWater(weight) {
    return (weight * WATER_PER_KG).toFixed(1);
}

function updateResults(results) {
    document.getElementById('calories-result').textContent = `${Math.round(results.calories)} kcal`;
    document.getElementById('bmr-result').textContent = `${Math.round(results.bmr)} kcal`;
    document.getElementById('tdee-result').textContent = `${Math.round(results.tdee)} kcal`;
    document.getElementById('protein-result').textContent = `${Math.round(results.protein)} g`;
    document.getElementById('fat-result').textContent = `${Math.round(results.fat)} g`;
    document.getElementById('carbs-result').textContent = `${Math.round(results.carbs)} g`;
    document.getElementById('bmi-result').textContent = results.bmi;
    document.getElementById('fiber-result').textContent = `${results.fiber} g`;
    document.getElementById('water-result').textContent = `${results.water} L`;
}

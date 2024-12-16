// Function to show recipe details when clicked
function showRecipe(recipeName) {
    const recipeDetailSection = document.getElementById('recipe-detail');
    const recipeDescription = document.getElementById('recipe-description');

    // Show recipe detail section
    recipeDetailSection.style.display = 'block';

    if (recipeName === 'adobo') {
        recipeDescription.innerHTML = `
            <h3>Adobo Recipe</h3>
            <h4>Ingredients:</h4>
            <ul>
                <li>Chicken or Pork (1 kg)</li>
                <li>Soy sauce (1/2 cup)</li>
                <li>Vinegar (1/2 cup)</li>
                <li>Garlic (6-8 cloves, minced)</li>
                <li>Bay leaves (2-3)</li>
                <li>Black peppercorns (1 tsp)</li>
                <li>Water (1 cup)</li>
                <li>Sugar (1 tbsp, optional)</li>
            </ul>
            <h4>Instructions:</h4>
            <p>Marinate the meat with soy sauce, vinegar, garlic, bay leaves, and peppercorns. Cook over medium heat until tender. Serve with steamed rice.</p>
        `;
    } else if (recipeName === 'spaghetti') {
        recipeDescription.innerHTML = `
            <h3>Spaghetti Recipe</h3>
            <h4>Ingredients:</h4>
            <ul>
                <li>Spaghetti pasta (500g)</li>
                <li>Tomato sauce (2 cups)</li>
                <li>Ground beef (250g)</li>
                <li>Garlic (2 cloves, minced)</li>
                <li>Onion (1 medium, chopped)</li>
                <li>Olive oil (2 tbsp)</li>
                <li>Salt and pepper to taste</li>
            </ul>
            <h4>Instructions:</h4>
            <p>Cook the pasta. In a pan, sauté garlic and onion in olive oil. Add ground beef and cook until browned. Add tomato sauce, salt, and pepper. Simmer for 15 minutes and serve over pasta.</p>
        `;
    } else if (recipeName === 'tortangTalong') {
        recipeDescription.innerHTML = `
            <h3>Tortang Talong Recipe</h3>
            <h4>Ingredients:</h4>
            <ul>
                <li>Eggplant (2 medium-sized)</li>
                <li>Eggs (2 large)</li>
                <li>Garlic (2 cloves, minced)</li>
                <li>Onion (1 medium, chopped)</li>
                <li>Ground pork (100g, optional)</li>
                <li>Soy sauce (1 tbsp)</li>
                <li>Salt and pepper to taste</li>
            </ul>
            <h4>Instructions:</h4>
            <p>Grill the eggplant until the skin is charred. Peel off the skin and flatten the flesh. In a pan, sauté garlic, onion, and ground pork. Add soy sauce and season with salt and pepper. Mix with the flattened eggplant and dip in beaten eggs. Fry until golden brown.</p>
        `;
    } else if (recipeName === 'sinigang') {
        recipeDescription.innerHTML = `
            <h3>Sinigang Recipe</h3>
            <h4>Ingredients:</h4>
            <ul>
                <li>Pork belly or shrimp (500g)</li>
                <li>Tamarind paste (2 tbsp)</li>
                <li>Tomato (2 medium, quartered)</li>
                <li>Onion (1 medium, quartered)</li>
                <li>Long green beans (1 cup)</li>
                <li>Radish (1 medium, sliced)</li>
                <li>Water (6 cups)</li>
                <li>Fish sauce or salt to taste</li>
            </ul>
            <h4>Instructions:</h4>
            <p>In a large pot, bring water to a boil. Add pork belly and simmer until tender. Add tamarind paste, tomato, onion, and vegetables. Season with fish sauce or salt and cook until vegetables are tender. Serve hot.</p>
        `;
    } else if (recipeName === 'paella') {
        recipeDescription.innerHTML = `
            <h3>Paella Recipe</h3>
            <h4>Ingredients:</h4>
            <ul>
                <li>Rice (2 cups, short-grain)</li>
                <li>Chicken thighs (4 pieces)</li>
                <li>Shrimp (200g)</li>
                <li>Chorizo (100g, sliced)</li>
                <li>Bell peppers (2, sliced)</li>
                <li>Peas (1 cup)</li>
                <li>Saffron (a pinch)</li>
                <li>Vegetable broth (4 cups)</li>
                <li>Olive oil (2 tbsp)</li>
                <li>Garlic (3 cloves, minced)</li>
            </ul>
            <h4>Instructions:</h4>
            <p>In a paella pan, heat olive oil and sauté garlic, chorizo, and chicken until browned. Add rice and stir in saffron, followed by vegetable broth. Simmer until the rice is cooked. Add shrimp, bell peppers, and peas. Cook for another 5 minutes and serve.</p>
        `;
    } else if (recipeName === 'sushi') {
        recipeDescription.innerHTML = `
            <h3>Sushi Recipe</h3>
            <h4>Ingredients:</h4>
            <ul>
                <li>Sushi rice (2 cups)</li>
                <li>Rice vinegar (1/4 cup)</li>
                <li>Sugar (2 tbsp)</li>
                <li>Nori sheets (8 pieces)</li>
                <li>Salmon or tuna (100g, sliced)</li>
                <li>Wasabi and soy sauce</li>
            </ul>
            <h4>Instructions:</h4>
            <p>Cook sushi rice according to package instructions. Mix rice vinegar and sugar, then season the rice with this mixture. Place a nori sheet on a bamboo mat, spread a thin layer of rice, add fish slices, and roll tightly. Serve with wasabi and soy sauce.</p>
        `;
    } else if (recipeName === 'mochi') {
        recipeDescription.innerHTML = `
            <h3>Mochi Recipe</h3>
            <h4>Ingredients:</h4>
            <ul>
                <li>Glutinous rice flour (2 cups)</li>
                <li>Water (1 cup)</li>
                <li>Sugar (1/4 cup)</li>
                <li>Red bean paste (optional, for filling)</li>
            </ul>
            <h4>Instructions:</h4>
            <p>Mix glutinous rice flour, sugar, and water in a bowl. Steam for 30 minutes, then knead until smooth. Divide into small portions, and if desired, fill with red bean paste. Roll into small balls and serve.</p>
        `;
    }
}


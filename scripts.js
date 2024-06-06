// -------------------------------------------------- Array of all recipes --------------------------------------------------
const recipes = [
    {
        recipeName: "Classic Spaghetti",
        category: "Main Dish",
        ingredients:
            "Spaghetti (200g),,, Guanciale or Pancetta (100g) , Eggs (2), Pecorino Romano Cheese (50g), Black Pepper, Salt",
        instructions:
            "Cook spaghetti in boiling salted water until al dente.In a separate pan, fry the guanciale or pancetta until golden and crisp.In a bowl, whisk together eggs, pecorino romano cheese, and black pepper.Drain spaghetti and add it to the pan with guanciale.Quickly add the egg mixture to the spaghetti and toss until the sauce thickens.Serve immediately with additional pecorino romano cheese and black pepper on top",
        imageURL: "images/spaghetti.jpg",
    },
{
    recipeName: "Lemon Chicken",
    category: "Main Dish",
    ingredients:
        "Chicken Breast (4), Lemon (1), Garlic (3 cloves), Fresh Herbs, Black Pepper, Olive Oil, Salt",
    instructions:
        "In a bowl, combine olive oil, minced garlic, chopped herbs, lemon juice, salt, and black pepper. Marinate chicken breasts in the mixture for at least 30 minutes. Preheat grill to medium-high heat. Grill chicken for 6-8 minutes on each side, or until cooked through. Serve with lemon wedges and garnish with additional herbs",
    imageURL: "images/grilled-lemon-herb-chicken-.jpg",
},

{
    recipeName: "Grilled Steak",
    category: "Main Dish",
    ingredients:
        "Ribeye steak (1 inch thick, 2 steaks), Olive oil (2 tablespoons), Salt (1 teaspoon), Black pepper (1/2 teaspoon), Garlic powder (1/2 teaspoon), Onion powder (1/2 teaspoon), Paprika (1/2 teaspoon)",
    instructions:
        "Preheat grill to high heat. In a small bowl, mix together olive oil, salt, black pepper, garlic powder, onion powder, and paprika. Rub the seasoning mixture over both sides of the steaks. Place steaks on the grill and cook for 4-5 minutes per side for medium-rare, or until desired doneness is reached. Remove steaks from the grill and let them rest for 5 minutes before serving",
    imageURL: "images/grilled_steak.jpg",
},

{
    recipeName: "Lasagna",
    category: "Main Dish",
    ingredients:
        "Lasagna, Ground beef (1 pound), Onion (1 diced), Garlic (3 cloves), Tomato sauce (24 ounces), Italian seasoning, Ricotta cheese, Mozzarella cheese (2 cups shredded), Parmesan cheese (1/2 cup grated), Fresh basil leaves (for garnish)",
    instructions:
        "Preheat the oven to 375°F (190°C). Cook lasagna noodles according to package instructions, then drain and set aside. In a large skillet, cook ground beef over medium heat until browned. Add diced onion and minced garlic, and cook until onion is translucent. Drain excess fat if necessary. Stir in tomato sauce, tomato paste, Italian seasoning, salt, and black pepper. Simmer for 10 minutes",
    imageURL: "images/lasagna.jpg",
},

{
    recipeName: "Cheeseburger",
    category: "Main Dish",
    ingredients:
        "Ground beef (200g), Hamburger buns (2), Cheese slices (2), Lettuce, Tomato slices, Onion slices, Pickles, Ketchup, Mustard, Salt, Black pepper",
    instructions:
        "Divide the ground beef into two equal portions and shape them into patties. Season the patties with salt and pepper. Preheat a grill or skillet over medium-high heat. Cook the patties for 4-5 minutes on each side, or until desired doneness. Toast the hamburger buns on the grill or skillet until lightly browned. Place a slice of cheese on each patty during the last minute of cooking to melt",
    imageURL: "images/cheeseburger.jpg",
},

{
    recipeName: "Caprese Salad",
    category: "Salad",
    ingredients:
        "Tomatoes (2), Fresh Mozzarella Cheese (200g), Fresh Basil Leaves, Balsamic Glaze, Extra Virgin Olive Oil, Salt, Black Pepper",
    instructions:
        "Slice tomatoes and fresh mozzarella cheese into 1/4-inch slices. Arrange tomato and mozzarella slices alternately on a plate. Tuck fresh basil leaves between the slices. Drizzle with balsamic glaze and extra virgin olive oil. Season with salt and black pepper to taste. Serve immediately",
    imageURL: "images/Capresse_salad.jpg",
},

{
    recipeName: "Shrimp Salad",
    category: "Salad",
    ingredients:
        "Large Shrimp (200g), Mixed Greens (2 cups), Cherry Tomatoes (1 cup), Cucumber (1/2 sliced), Avocado (1/2 diced), Red Onion (1/4 thinly sliced), Feta Cheese (50g crumbled), Lemon (1 juiced), Olive Oil (2 tablespoons), Dijon Mustard (1 teaspoon), Honey (1 teaspoon), Salt, Black Pepper",
    instructions:
        "In a large bowl, combine mixed greens, cherry tomatoes, sliced cucumber, diced avocado, thinly sliced red onion, and crumbled feta cheese. In a small bowl, whisk together lemon juice, olive oil, Dijon mustard, honey, salt, and black pepper to make the dressing. Season shrimp with salt and black pepper. Heat olive oil in a skillet over medium-high heat. Add shrimp and cook for 2-3 minutes per side until pink and cooked through. Add cooked shrimp to the salad bowl. Drizzle dressing over the salad and toss gently to coat. Serve immediately",
    imageURL: "images/shrimp_salad.jpg",
},

{
    recipeName: "Egg Salad",
    category: "Salad",
    ingredients:
        "Eggs (6), Mayonnaise (1/4 cup), Dijon Mustard (1 tablespoon), Green Onion (2 chopped), Celery (1 stalk finely chopped), Fresh Dill (1 tablespoon chopped), Lemon Juice (1 teaspoon), Salt, Black Pepper",
    instructions:
        "Place eggs in a saucepan and cover with cold water. Bring to a boil, then cover, remove from heat, and let eggs sit in hot water for 10-12 minutes. Transfer eggs to a bowl of ice water and let cool completely. Peel and chop eggs. In a large bowl, mix together mayonnaise, Dijon mustard, chopped green onion, chopped celery, chopped fresh dill, lemon juice, salt, and black pepper. Add chopped eggs to the bowl and stir until well combined. Taste and adjust seasoning if needed. Serve immediately, or chill in the refrigerator for a few hours before serving",
    imageURL: "images/egg_salad.jpg",
},

{
    recipeName: "Vegetable Stir-Fry",
    category: "Salad",
    ingredients:
        "Mixed Vegetables, Firm Tofu (200g), Soy Sauce, Sesame Oil, Garlic (2 cloves), Ginger (1 tspo), Vegetable Broth, Cornstarch (1 tbsp), Cooked Rice(1 cup)",
    instructions:
        "Heat sesame oil in a large skillet or wok over medium-high heat. Add minced garlic and grated ginger, and saute for 1 minute. Add mixed vegetables and tofu to the skillet. In a small bowl, whisk together soy sauce, vegetable broth, and cornstarch. Pour the sauce over the vegetables and tofu. Stir-fry until the vegetables are tender-crisp and the sauce has thickened. Serve hot over cooked rice",
    imageURL: "images/Vegetable-Stir-Fry.jpg",
},

{
    recipeName: "Tabbouleh",
    category: "Salad",
    ingredients:
        "Bulgur wheat (1 cup), Fresh parsley (1 bunch), Fresh mint leaves (1/2 bunch), Tomatoes (2), Green onions (3), Lemon (1), Extra virgin olive oil (1/4 cup), Salt, Black pepper",
    instructions:
        "Rinse bulgur wheat under cold water and drain. Place bulgur wheat in a bowl and cover with boiling water. Let it sit for 20-30 minutes until tender. Finely chop parsley and mint leaves. Dice tomatoes and slice green onions. Fluff the bulgur wheat with a fork and transfer it to a large mixing bowl. Add chopped parsley, mint, tomatoes, and green onions to the bowl. Squeeze lemon juice over the mixture and drizzle with extra virgin olive oil. Season with salt and black pepper to taste. Toss everything together until well combined. Chill in the refrigerator for at least 1 hour before serving",
    imageURL: "images/tabbouleh.jpg",
},

{
    recipeName: "Chocolate Lava Cake",
    category: "Dessert",
    ingredients:
        "Dark Chocolate (100g), Butter (100g), Eggs (2),  Sugar (50g), Flour (30g), Vanilla Extract",
    instructions:
        "Preheat in oven. Grease ramekins and dust with cocoa powder. Melt chocolate and butter together. In a bowl, whisk eggs, sugar, and vanilla extract. Gradually add melted chocolate mixture to the egg mixture. Fold in flour until just combined. Pour batter into ramekins and bake for 10-12 minutes. Serve immediately with a dusting of powdered sugar and a scoop of vanilla ice cream",
    imageURL: "images/Chocolate_lava_cake.jpg",
},

{
    recipeName: "Vanilla Ice Cream",
    category: "Dessert",
    ingredients:
        "Heavy Cream (1 cup), Whole Milk (1 cup), Granulated Sugar (3/4 cup), Egg Yolks (4), Vanilla Bean (1, split and scraped), Salt (1/4 teaspoon)",
    instructions:
        "In a saucepan, combine heavy cream, whole milk, and half of the granulated sugar. Heat over medium-low heat, stirring occasionally, until sugar is dissolved and mixture is hot but not boiling. In a separate bowl, whisk together egg yolks and remaining sugar until pale and thick. Gradually pour the hot cream mixture into the egg yolks, whisking constantly to temper the eggs. Return the mixture to the saucepan and cook over low heat, stirring constantly, until it thickens enough to coat the back of a spoon (do not let it boil). Remove from heat and stir in scraped vanilla bean seeds and salt",
    imageURL: "images/vanilla_ice_cream.jpg",
},

{
    recipeName: "Lotus Cake",
    category: "Dessert",
    ingredients:
        "All-Purpose Flour (1 1/2 cups), Baking Powder (1 1/2 teaspoons), Salt (1/4 teaspoon), Unsalted Butter (1/2 cup, softened), Granulated Sugar (1 cup), Eggs (3), Vanilla Extract (1 teaspoon), Milk (1/2 cup), Lotus Biscoff Spread (1/2 cup)",
    instructions:
        "Preheat oven to 350°F (175°C). Grease and flour a 9-inch round cake pan. In a medium bowl, sift together all-purpose flour, baking powder, and salt. Set aside. In a large bowl, cream together softened unsalted butter and granulated sugar until light and fluffy. Beat in eggs, one at a time, then stir in vanilla extract. Gradually add the dry ingredients to the wet ingredients, alternating with milk, until well combined. Pour half of the batter into the prepared cake pan",
    imageURL: "images/lotus_cake.jpg",
},

{
    recipeName: "Tiramisu",
    category: "Dessert",
    ingredients:
        "Egg yolks (4), Sugar (100g), Mascarpone cheese (250g), Ladyfingers (200g), Espresso (1 cup), Dark rum (2 tbsp), Cocoa powder (2 tbsp)",
    instructions:
        "Prepare espresso and let it cool. In a heatproof bowl, whisk egg yolks and sugar over a double boiler until pale and thick. Remove from heat and whisk in mascarpone cheese until smooth. Dip ladyfingers in espresso and arrange them in a single layer in a serving dish. Drizzle with dark rum. Spread half of the mascarpone mixture over the ladyfingers. Repeat with another layer of dipped ladyfingers and mascarpone mixture. Cover and refrigerate for at least 4 hours or overnight. Before serving, dust with cocoa powder",
    imageURL: "images/Classic_tiramisu.jpg",
},

{
    recipeName: "Lazy Chocolate Cake",
    category: "Dessert",
    ingredients:
        "Biscuits (200g), Cocoa powder (3 tbsp), Sweetened condensed milk (200g), Butter (50g), Chopped nuts or dried fruits (optional)",
    instructions:
        "Crush biscuits into fine crumbs using a food processor or by placing them in a plastic bag and crushing them with a rolling pin. In a microwave-safe bowl, melt butter and sweetened condensed milk together until smooth. Mix in cocoa powder until well combined. Add crushed biscuits and chopped nuts or dried fruits (if using) to the mixture and stir until evenly coated. Press the mixture into a lined baking dish or cake tin, smoothing the top with a spatula. Refrigerate for at least 2 hours or until set. Once set, cut into squares and serve.",
    imageURL: "images/lazy_cake.jpg",
},
];



























// ------------------------------------------- Function to create a div element for a recipe -------------------------------------------
// ------------------------------------------- Function to create a div element for a recipe -------------------------------------------
// ------------------------------------------- Function to create a div element for a recipe -------------------------------------------





// ----- Getting the recipes div element which is a div made for recipes -----
const recipesDiv = document.getElementById("recipes");









// ----- Function to create a recipe when we give it the JSON element recipeData -----
function createRecipe(recipeData) {


    // creating a div element for this recipe
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");



    




    // creating an image element for the recipe image 
    const img = document.createElement("img");
    img.src = recipeData.imageURL;
    recipeDiv.appendChild(img);


    // creating a div element for all the text after the image
    const divText = document.createElement("div");
    divText.classList.add("recipeText")

    // creating an h2 element for the name of the recipe
    const h2 = document.createElement("h2");
    h2.innerHTML = recipeData.recipeName;
    divText.appendChild(h2);

    // creating a p element for the category
    const category = document.createElement("p");
    category.innerHTML = recipeData.category;
    if (recipeData.category == "Main Dish")	//checking which category to choose the proper class (color)
    {
	category.classList.add("mainCategory");
    }
    else if (recipeData.category == "Salad")
    {
	category.classList.add("saladCategory");
    }
    else
    {
	category.classList.add("dessertCategory");
    }
    divText.appendChild(category);




    // creating a p element for the ingredients
    const ingredients = document.createElement("p");
	
	let ingArr = recipeData.ingredients.split(',');  // creating an array for each comma seperated
	ingArr = ingArr.filter( (ing) => ing != "");
	const ingUl = document.createElement("ul"); // creating the ul element
	ingUl.classList.add("ul");
	for (ing of ingArr) // looping through the created array and creating new li elements
	{
		const ingLi = document.createElement("li");
    		ingLi.textContent = ing;
    		ingUl.appendChild(ingLi);
	}
    ingredients.innerHTML = '<span class="subtitle">Ingredients:</span>';
    ingredients.appendChild(ingUl);
    divText.appendChild(ingredients);



    // creating a p element for the instruction
    const instructions = document.createElement("p");

    let insArr = recipeData.instructions.split('.');	// creating an array for each point seperated
    insArr = insArr.filter( (ins) => ins != "");
    const insOl = document.createElement("ol");  // creating the ol element
    //insOl.type="1"; 
    for(ins of insArr)   // looping through the created array and creating new li elements
    {
		const insLi = document.createElement("li");
		insLi.textContent = ins;
    		insOl.appendChild(insLi);
    }
    instructions.innerHTML = '<span class="subtitle">Instructions:</span>';
    instructions.appendChild(insOl);
    divText.appendChild(instructions);




    // to remove element
    const closeButton = document.createElement("button");
    closeButton.classList.add("close-button");
    closeButton.innerText = "Remove";

    // adding an event listener to this button on click
    closeButton.addEventListener("click", () => {
        // creating a boolean and filling it with the answer of the window.confirm
        const confirmed = window.confirm("Are you sure you want to delete?");
        if (confirmed) {
            // getting the index of this recipe from the recipes array
            indexToRemove = recipes.lastIndexOf(recipeData);
            // removing this recipe by using splice
            recipes.splice(indexToRemove, 1);
            // deleting the html div element
            recipeDiv.remove();
        }
    });
    // adding the close button to the div element
    divText.appendChild(closeButton);




	recipeDiv.appendChild(divText);
    return recipeDiv;
}























// ---------------- Function to loop inside the array of recipes and create them all and send them to the HTML file ----------------
// ---------------- Function to loop inside the array of recipes and create them all and send them to the HTML file ----------------
// ---------------- Function to loop inside the array of recipes and create them all and send them to the HTML file ----------------


function displayRecipes(recipes) {
    // looping through the array of JSON elements and creating and adding each element to the HTML
    recipes.forEach((recipe) => {
        recipesDiv.appendChild(createRecipe(recipe));
    });
}


// calling this function
displayRecipes(recipes);
























// --------------------------------------------- Navigation Bar Functionalities ---------------------------------------------
// --------------------------------------------- Navigation Bar Functionalities ---------------------------------------------
// --------------------------------------------- Navigation Bar Functionalities ---------------------------------------------



// getting al the buttons / a elements
const buttonAll = document.getElementById("buttonAll");
const buttonMains = document.getElementById("buttonMains");
const buttonSalads = document.getElementById("buttonSalads");
const buttonDesserts = document.getElementById("buttonDesserts");
const buttonContactUs = document.getElementById("buttonContactUs");
const buttonAddRecipe = document.getElementById("buttonAddRecipe");



// this block is used for smaller screens
// when the user open the menu
// when he clicks on a <a> element
// it will uncheck the checkbox
// so the menu will close using css properties
document.addEventListener('DOMContentLoaded', () => {  // this will be executed after all elements have been loaded
     // get the hidden checkbox element
    const menuCheck = document.getElementById("check");


    // for every button, this will uncheck the checkbox and the menu will close using css properties
    buttonAll.addEventListener('click', () => {
        menuCheck.checked = false;
    })
    buttonMains.addEventListener('click', () => {
        menuCheck.checked = false;
    })
    buttonSalads.addEventListener('click', () => {
        menuCheck.checked = false;
    })
    buttonDesserts.addEventListener('click', () => {
        menuCheck.checked = false;
    })
    buttonContactUs.addEventListener('click', () => {
        menuCheck.checked = false;
    })
    buttonAddRecipe.addEventListener('click', () => {
        menuCheck.checked = false;
    })
    /*							buttonSearch.addEventListener('click', () => {
        								menuCheck.checked = false;
    									})

*/


});








// button all
buttonAll.addEventListener("click", () => {
    // styling the current button
    buttonAll.classList.add("active");
    buttonMains.classList.remove("active");
    buttonSalads.classList.remove("active");
    buttonDesserts.classList.remove("active");

    // emptying the recipesContainer
    recipesDiv.innerHTML = "";
    // displaying the whole array
    displayRecipes(recipes);

    // smoothening the scroll to the desired section
    recipesDiv.scrollIntoView({ behavior: "smooth" });
    searchInput.value="";
});




// button Mains
buttonMains.addEventListener("click", () => {
    // styling the current button
    buttonMains.classList.add("active");
    buttonAll.classList.remove("active");
    buttonSalads.classList.remove("active");
    buttonDesserts.classList.remove("active");

    // filtering the array
    const mainsArr = recipes.filter((recipe) => recipe.category === "Main Dish");
    // emptying the recipesContainer
    recipesDiv.innerHTML = "";
    // displaying the filtered array
    displayRecipes(mainsArr);

    // smoothening the scroll to the desired section
    recipesDiv.scrollIntoView({ behavior: "smooth" });
    searchInput.value="";
});




//button Salads
buttonSalads.addEventListener("click", () => {
    // styling the current button
    buttonSalads.classList.add("active");
    buttonAll.classList.remove("active");
    buttonMains.classList.remove("active");
    buttonDesserts.classList.remove("active");

    // filtering the array
    const saladsArr = recipes.filter((recipe) => recipe.category === "Salad");
    // emptying the recipesContainer
    recipesDiv.innerHTML = "";
    // displaying the filtered array
    displayRecipes(saladsArr);

    // smoothening the scroll to the desired section
    recipesDiv.scrollIntoView({ behavior: "smooth" });
    searchInput.value="";
});



//button Desserts
buttonDesserts.addEventListener("click", () => {
    // styling the current button
    buttonDesserts.classList.add("active");
    buttonAll.classList.remove("active");
    buttonMains.classList.remove("active");
    buttonSalads.classList.remove("active");

    // filtering the array
    const dessertsArr = recipes.filter((recipe) => recipe.category === "Dessert");
    // emptying the recipesContainer
    recipesDiv.innerHTML = "";
    // displaying the filtered array
    displayRecipes(dessertsArr);

    // smoothening the scroll to the desired section
    recipesDiv.scrollIntoView({ behavior: "smooth" });
    searchInput.value="";
});





const contactUsDiv = document.getElementById("contact");

//button Contact Us
buttonContactUs.addEventListener("click", () => {

    // smoothening the scroll to the desired section
    contactUsDiv.scrollIntoView({ behavior: "smooth" });
});




const addRecipeDiv = document.getElementById("addRecipe");

//button Add Recipe
buttonAddRecipe.addEventListener("click", () => {

    // smoothening the scroll to the desired section
    addRecipeDiv.scrollIntoView({ behavior: "smooth" });
});


























// ********************** submit add recipe **********************

const recipeForm = document.getElementById("addRecipeForm");

recipeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const recipeName = document.getElementById("recipeName").value;
    const category = document.getElementById("category").value;
    const ingredients = document.getElementById("ingredients").value;
    const instructions = document.getElementById("instructions").value;
    const imageLink = document.getElementById("imageURL").value;

    const recipe = {
        recipeName: recipeName,
        category: category,
        ingredients: ingredients,
        instructions: instructions,
    };

    if (imageLink == "") recipe.imageURL = "https://via.placeholder.com/250";
    else recipe.imageURL = imageLink;

    recipes.push(recipe);
    recipesDiv.innerHTML = "";
    displayRecipes(recipes);

    window.alert("recipe added");

    buttonAll.classList.add("active");
    buttonMains.classList.remove("active");
    buttonSalads.classList.remove("active");
    buttonDesserts.classList.remove("active");
});

// ********************** /submit add recipe **********************





// ********************** /search **********************
// getting the textfield element
const searchInput = document.getElementById("searchInput");

// Listen for input event on the search input field
searchInput.addEventListener("input", () => {
    // Get the search term entered by the user
    const searchTerm = searchInput.value.toLowerCase();

    // Filter recipes based on the search term
    const filteredRecipes = recipes.filter((recipe) => {
        return (
            recipe.recipeName.toLowerCase().includes(searchTerm) ||
            recipe.category.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.toLowerCase().includes(searchTerm) ||
            recipe.instructions.toLowerCase().includes(searchTerm)
        );
    });
	
    // Clear the existing recipes in the container
    recipesDiv.innerHTML = "";

    // Display the filtered recipes
    displayRecipes(filteredRecipes);


    //putting the button ALL RECIPES as active
    buttonAll.classList.add("active");
    buttonMains.classList.remove("active");
    buttonSalads.classList.remove("active");
    buttonDesserts.classList.remove("active");

    // Scroll to the recipes container with smooth behavior
    recipesDiv.scrollIntoView({ behavior: "smooth" });
});
// ********************** /search **********************

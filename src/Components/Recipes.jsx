import React, { useState } from "react";

const Recipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipes = [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      description: "Enjoy a delicious Italian classic with a rich tomato-based sauce.",
      ingredients: [
        "250g spaghetti",
        "200g ground beef",
        "1 onion (chopped)",
        "2 cloves garlic (minced)",
        "400g canned tomatoes",
        "1 tsp oregano",
        "Salt and pepper to taste",
      ],
      image: "https://source.unsplash.com/500x300/?spaghetti",
    },
    {
      id: 2,
      title: "Chicken Curry",
      description: "A flavorful and spicy curry made with tender chicken and aromatic spices.",
      ingredients: [
        "500g chicken (cut into pieces)",
        "2 onions (chopped)",
        "3 tomatoes (pureed)",
        "1 tbsp ginger-garlic paste",
        "1 tsp turmeric powder",
        "1 tsp garam masala",
        "Salt to taste",
      ],
      image: "https://source.unsplash.com/500x300/?chicken-curry",
    },
    {
      id: 3,
      title: "Chocolate Cake",
      description: "A moist, rich chocolate cake that's perfect for dessert lovers.",
      ingredients: [
        "2 cups flour",
        "1 cup cocoa powder",
        "1.5 cups sugar",
        "1 tsp baking powder",
        "2 eggs",
        "1 cup milk",
        "100g dark chocolate",
      ],
      image: "https://source.unsplash.com/500x300/?chocolate-cake",
    },
    {
      id: 4,
      title: "Caesar Salad",
      description: "A fresh, crispy salad with romaine lettuce, croutons, and Caesar dressing.",
      ingredients: [
        "1 head romaine lettuce",
        "50g parmesan cheese",
        "Croutons",
        "Caesar dressing",
        "Salt and pepper to taste",
      ],
      image: "https://source.unsplash.com/500x300/?caesar-salad",
    },
    {
      id: 5,
      title: "Sushi Rolls",
      description: "A Japanese dish with vinegared rice, seafood, and vegetables wrapped in seaweed.",
      ingredients: [
        "2 cups sushi rice",
        "4 sheets nori (seaweed)",
        "100g fresh salmon",
        "1 cucumber (sliced)",
        "Soy sauce and wasabi",
      ],
      image: "https://source.unsplash.com/500x300/?sushi",
    },
    {
      id: 6,
      title: "Pancakes",
      description: "Fluffy pancakes served with syrup and fresh berries.",
      ingredients: [
        "2 cups flour",
        "1 tbsp baking powder",
        "2 tbsp sugar",
        "1.5 cups milk",
        "2 eggs",
        "Butter for cooking",
      ],
      image: "https://source.unsplash.com/500x300/?pancakes",
    },
    {
      id: 7,
      title: "Grilled Steak",
      description: "Perfectly grilled steak with a smoky flavor and juicy texture.",
      ingredients: [
        "300g beef steak",
        "Salt and pepper",
        "1 tbsp olive oil",
        "1 tsp garlic powder",
        "Rosemary (optional)",
      ],
      image: "https://source.unsplash.com/500x300/?grilled-steak",
    },
    {
      id: 8,
      title: "Vegetable Stir Fry",
      description: "A colorful mix of stir-fried vegetables in a savory sauce.",
      ingredients: [
        "1 bell pepper (sliced)",
        "1 carrot (julienned)",
        "1 zucchini (sliced)",
        "2 tbsp soy sauce",
        "1 tsp sesame oil",
      ],
      image: "https://source.unsplash.com/500x300/?stir-fry",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Recipe Section</h1>

      <div style={styles.content}>
        {/* Left Side - Recipe List */}
        <div style={styles.recipeList}>
          {recipes.map((recipe) => (
            <div key={recipe.id} style={styles.recipeCard} onClick={() => setSelectedRecipe(recipe)}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          ))}
        </div>

        {/* Right Side - Recipe Details */}
        <div style={styles.recipeDetails}>
          {selectedRecipe ? (
            <>
              <h2>{selectedRecipe.title}</h2>
              <img src={selectedRecipe.image} alt={selectedRecipe.title} style={styles.image} />
              <h4>Ingredients:</h4>
              <ul style={styles.ingredientsList}>
                {selectedRecipe.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          ) : (
            <p style={styles.selectMessage}>Select a recipe to see details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f4f4f4",
    height: "100vh",
  },
  heading: {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  content: {
    display: "flex",
    height: "calc(100vh - 80px)",
  },
  recipeList: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    overflowY: "auto",
  },
  recipeCard: {
    backgroundColor: "#fff",
    padding: "15px",
    width: "80%",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.2s",
  },
  recipeDetails: {
    width: "60%",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    maxHeight: "300px",
    borderRadius: "8px",
    margin: "10px 0",
    objectFit: "cover",
  },
  ingredientsList: {
    textAlign: "left",
    listStyleType: "disc",
    paddingLeft: "20px",
  },
  selectMessage: {
    fontSize: "18px",
    color: "#666",
  },

  // Responsive Styles
  "@media (max-width: 768px)": {
    content: {
      flexDirection: "column",
      height: "auto",
    },
    recipeList: {
      width: "100%",
    },
    recipeDetails: {
      width: "100%",
      marginTop: "20px",
    },
  },
};

export default Recipes;

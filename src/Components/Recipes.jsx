import React, { useState } from "react";

const Recipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipes = [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      description:
        "Enjoy a delicious Italian classic with a rich tomato-based sauce.",
      details:
        "Spaghetti Bolognese is made with ground beef, onions, garlic, tomatoes, and Italian herbs. It's a hearty, comforting dish served over perfectly cooked spaghetti.",
    },
    {
      id: 2,
      title: "Chicken Curry",
      description:
        "A flavorful and spicy curry made with tender chicken and aromatic spices.",
      details:
        "Our Chicken Curry is cooked with tender chicken in a rich and spicy gravy of tomatoes, onions, garlic, and an assortment of aromatic spices like turmeric, cumin, and garam masala.",
    },
    {
      id: 3,
      title: "Chocolate Cake",
      description:
        "A moist, rich chocolate cake that's perfect for dessert lovers.",
      details:
        "This moist chocolate cake is made with cocoa powder, dark chocolate, and buttermilk. It's layered with a rich chocolate ganache that will melt in your mouth.",
    },
  ];

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div style={styles.container}>
      <h1>Recipes Page</h1>
      <p>Here are some delicious recipes for you!</p>

      <div style={styles.recipeList}>
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={styles.recipeCard}
            onClick={() => handleRecipeClick(recipe)}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>

      {/* Recipe Details */}
      {selectedRecipe && (
        <div style={styles.recipeDetails}>
          <h2>{selectedRecipe.title}</h2>
          <p>{selectedRecipe.details}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f4f4f4",
    justifyContent: "space-between",
  },
  recipeList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
    width: "40%",
  },
  recipeCard: {
    backgroundColor: "#fff",
    padding: "20px",
    marginBottom: "15px",
    width: "300px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    cursor: "pointer",
  },
  recipeDetails: {
    backgroundColor: "#fff",
    padding: "20px",
    width: "50%",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    marginLeft: "20px",
    textAlign: "center",
  },
};

export default Recipes;

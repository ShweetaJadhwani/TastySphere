import { Link } from "react-router-dom";

const TopRestaurants = () => {
  const styles = {
    container: {
      width: "100%",
      minHeight: "100vh",
      backgroundColor: "#f8f8f8",
      textAlign: "center",
      padding: "50px 20px",
    },
    heading: {
      fontSize: "48px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#ff6347",
    },
    restaurantGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
      justifyContent: "center",
      marginTop: "30px",
    },
    card: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    img: {
      width: "100%",
      borderRadius: "10px",
      marginBottom: "10px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#ff6347",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      textDecoration: "none",
      display: "inline-block",
      marginTop: "10px",
    },
  };

  const restaurants = [
    {
      name: "The Gourmet Spot",
      image: "https://source.unsplash.com/300x200/?fine-dining,restaurant",
      description: "A luxurious experience with world-class chefs.",
    },
    {
      name: "Street Bites",
      image: "https://source.unsplash.com/300x200/?street-food,restaurant",
      description: "Experience the best of street food flavors.",
    },
    {
      name: "Ocean's Delight",
      image: "https://source.unsplash.com/300x200/?seafood,restaurant",
      description: "Fresh seafood dishes straight from the ocean.",
    },
    {
      name: "Spicy Affair",
      image: "https://source.unsplash.com/300x200/?spicy-food,restaurant",
      description: "A paradise for spice lovers with exotic flavors.",
    },
    {
      name: "Vegan Haven",
      image: "https://source.unsplash.com/300x200/?vegan,restaurant",
      description: "Delicious plant-based dishes for healthy living.",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Top Restaurants</h1>
      <p>Explore the best places to dine in your city.</p>

      <div style={styles.restaurantGrid}>
        {restaurants.map((restaurant, index) => (
          <div key={index} style={styles.card}>
            <img src={restaurant.image} alt={restaurant.name} style={styles.img} />
            <h3>{restaurant.name}</h3>
            <p>{restaurant.description}</p>
            <Link to="/reservations" style={styles.button}>
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRestaurants;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgimg from "../assets/BackgroundImg.jpg";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const styles = {
    container: {
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      backgroundImage: `url(${bgimg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
      padding: "20px",
      position: "relative",
    },
    content: {
      position: "relative",
      zIndex: 1,
      maxWidth: "800px",
    },
    heading: {
      fontSize: "48px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    subheading: {
      fontSize: "20px",
      marginBottom: "20px",
    },
    button: {
      padding: "12px 24px",
      fontSize: "18px",
      color: "#fff",
      backgroundColor: "#ff6347",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      textDecoration: "none",
    },
    sections: {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      marginTop: "50px",
    },
    sectionCard: {
      width: "300px",
      margin: "20px",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
      backgroundColor: "#fff",
      color: "#333",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
      position: "relative",
      zIndex: 2,
    },
    sectionImg: {
      width: "100%",
      borderRadius: "10px",
      marginBottom: "10px",
    },
  };

  const closeModalAndNavigate = () => {
    setIsModalOpen(false);
    navigate("/recipes");
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Welcome to Flavorville</h1>
        <p style={styles.subheading}>
          Explore the best recipes, restaurants, and culinary experiences.
        </p>
        <Link to="/recipes" style={styles.button}>
          Discover More
        </Link>
      </div>

      {/* Sections */}
      <div style={styles.sections}>
        <div style={styles.sectionCard} onClick={() => setIsModalOpen(true)}>
          <img
            src="https://source.unsplash.com/300x200/?recipe,food"
            alt="Recipes"
            style={styles.sectionImg}
          />
          <h3>Delicious Recipes</h3>
          <p>Find the best recipes from around the world, curated for you.</p>
        </div>

        <div style={styles.sectionCard} onClick={() => navigate("/top-restaurants")}>
  <img
    src="https://source.unsplash.com/300x200/?restaurant,food"
    alt="Restaurants"
    style={styles.sectionImg}
  />
  <h3>Top Restaurants</h3>
  <p>
    Discover highly-rated restaurants near you for an amazing dining experience.
  </p>
</div>


        <div style={styles.sectionCard}>
          <img
            src="https://source.unsplash.com/300x200/?blog,food"
            alt="Food Blog"
            style={styles.sectionImg}
          />
          <h3>Food Blog</h3>
          <p>Read exciting food stories, cooking tips, and chef insights.</p>
        </div>

        {/* New Sections */}
        <div style={styles.sectionCard}>
          <img
            src="https://source.unsplash.com/300x200/?cooking,kitchen"
            alt="Cooking Tips"
            style={styles.sectionImg}
          />
          <h3>Cooking Tips & Tricks</h3>
          <p>Master new cooking techniques and enhance your skills.</p>
        </div>

        <div style={styles.sectionCard}>
          <img
            src="https://source.unsplash.com/300x200/?chef,kitchen"
            alt="Popular Chefs"
            style={styles.sectionImg}
          />
          <h3>Meet the Chefs</h3>
          <p>Learn from top chefs and get their secret recipes.</p>
        </div>

        <div style={styles.sectionCard}>
          <img
            src="https://source.unsplash.com/300x200/?discount,offer"
            alt="Special Offers"
            style={styles.sectionImg}
          />
          <h3>Special Offers & Deals</h3>
          <p>Exclusive discounts on cooking classes, restaurants, and more.</p>
        </div>

        <div style={styles.sectionCard}>
          <img
            src="https://source.unsplash.com/300x200/?cooking,challenge"
            alt="Cooking Challenges"
            style={styles.sectionImg}
          />
          <h3>Cooking Challenges</h3>
          <p>Compete in fun challenges and showcase your cooking skills!</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              width: "400px",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              color: "#333",
              position: "relative",
            }}
          >
            <button
              style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                fontSize: "20px",
                cursor: "pointer",
                background: "none",
                border: "none",
                color: "#ff6347",
              }}
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>
            <h2>Delicious Recipes</h2>
            <p>
              Discover a variety of handpicked recipes from different cuisines.
              Whether you're a fan of spicy Indian curries, Italian pasta, or
              French desserts, we have something for everyone!
            </p>
            <button style={styles.button} onClick={closeModalAndNavigate}>
              Explore Recipes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

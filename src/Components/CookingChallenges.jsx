import { useNavigate } from "react-router-dom";

const CookingChallenges = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      width: "100%",
      minHeight: "100vh",
      backgroundColor: "#f4f4f4",
      padding: "50px 20px",
      textAlign: "center",
    },
    heading: {
      fontSize: "42px",
      fontWeight: "bold",
      color: "#ff5722",
      marginBottom: "10px",
    },
    subheading: {
      fontSize: "20px",
      color: "#555",
      marginBottom: "30px",
    },
    challengeContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
      justifyContent: "center",
      marginTop: "20px",
    },
    challengeCard: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s",
      cursor: "pointer",
    },
    challengeCardHover: {
      transform: "scale(1.05)",
    },
    challengeImage: {
      width: "100%",
      height: "250px",
      borderRadius: "10px",
      objectFit: "cover",
      marginBottom: "15px",
    },
    button: {
      padding: "12px 24px",
      fontSize: "18px",
      color: "#fff",
      backgroundColor: "#ff5722",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "30px",
    },
  };

  const challenges = [
    {
      id: 1,
      title: "Mystery Box Challenge",
      image: "https://source.unsplash.com/400x300/?chef,ingredients",
      details: "Use surprise ingredients to create a unique dish in 30 minutes!",
    },
    {
      id: 2,
      title: "Vegan Masterchef",
      image: "https://source.unsplash.com/400x300/?vegan,food",
      details: "Make the best plant-based dish using fresh and organic ingredients.",
    },
    {
      id: 3,
      title: "Spicy Fire Challenge",
      image: "https://source.unsplash.com/400x300/?spicy,food",
      details: "Create the spiciest dish you can handle! Dare to taste?",
    },
    {
      id: 4,
      title: "Dessert Art Battle",
      image: "https://source.unsplash.com/400x300/?dessert,cake",
      details: "Show off your plating skills with a stunning dessert masterpiece.",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Cooking Challenges</h1>
      <p style={styles.subheading}>
        Compete in fun and exciting cooking challenges to test your skills!
      </p>

      <div style={styles.challengeContainer}>
        {challenges.map((challenge) => (
          <div key={challenge.id} style={styles.challengeCard}>
            <img src={challenge.image} alt={challenge.title} style={styles.challengeImage} />
            <h3>{challenge.title}</h3>
            <p>{challenge.details}</p>
          </div>
        ))}
      </div>

      <button style={styles.button} onClick={() => navigate("/")}>
        Go Back Home
      </button>
    </div>
  );
};

export default CookingChallenges;

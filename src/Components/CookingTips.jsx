import { useNavigate } from "react-router-dom";

const CookingTips = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      width: "100%",
      minHeight: "100vh",
      backgroundColor: "#fff8f0",
      padding: "50px 20px",
      textAlign: "center",
    },
    heading: {
      fontSize: "42px",
      fontWeight: "bold",
      color: "#ff7f50",
      marginBottom: "10px",
    },
    subheading: {
      fontSize: "20px",
      color: "#555",
      marginBottom: "30px",
    },
    tipsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
      justifyContent: "center",
      marginTop: "20px",
    },
    tipCard: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s",
      cursor: "pointer",
    },
    tipCardHover: {
      transform: "scale(1.05)",
    },
    tipImage: {
      width: "100%",
      height: "200px",
      borderRadius: "10px",
      objectFit: "cover",
      marginBottom: "15px",
    },
    button: {
      padding: "12px 24px",
      fontSize: "18px",
      color: "#fff",
      backgroundColor: "#ff7f50",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "30px",
    },
  };

  const tips = [
    {
      id: 1,
      title: "Master the Art of Knife Skills",
      image: "https://source.unsplash.com/400x250/?knife,cooking",
      description: "Learn how to chop, dice, and julienne like a pro chef.",
    },
    {
      id: 2,
      title: "Secrets to Perfectly Fluffy Rice",
      image: "https://source.unsplash.com/400x250/?rice,cooking",
      description: "Never end up with mushy or hard rice again with these tips.",
    },
    {
      id: 3,
      title: "How to Balance Flavors in Dishes",
      image: "https://source.unsplash.com/400x250/?spices,food",
      description: "Discover the perfect balance between sweet, salty, sour, and umami.",
    },
    {
      id: 4,
      title: "The Right Way to Store Fresh Herbs",
      image: "https://source.unsplash.com/400x250/?herbs,kitchen",
      description: "Keep your herbs fresh for weeks with these easy storage tricks.",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Cooking Tips & Tricks</h1>
      <p style={styles.subheading}>Elevate your cooking skills with these expert tips.</p>

      <div style={styles.tipsContainer}>
        {tips.map((tip) => (
          <div key={tip.id} style={styles.tipCard}>
            <img src={tip.image} alt={tip.title} style={styles.tipImage} />
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
          </div>
        ))}
      </div>

      <button style={styles.button} onClick={() => navigate("/")}>Go Back Home</button>
    </div>
  );
};

export default CookingTips;

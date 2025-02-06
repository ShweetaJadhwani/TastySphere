import { useNavigate } from "react-router-dom";

const MeetTheChefs = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      width: "100%",
      minHeight: "100vh",
      backgroundColor: "#fff5eb",
      padding: "50px 20px",
      textAlign: "center",
    },
    heading: {
      fontSize: "42px",
      fontWeight: "bold",
      color: "#d35400",
      marginBottom: "10px",
    },
    subheading: {
      fontSize: "20px",
      color: "#555",
      marginBottom: "30px",
    },
    chefsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
      justifyContent: "center",
      marginTop: "20px",
    },
    chefCard: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s",
      cursor: "pointer",
    },
    chefCardHover: {
      transform: "scale(1.05)",
    },
    chefImage: {
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
      backgroundColor: "#d35400",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "30px",
    },
  };

  const chefs = [
    {
      id: 1,
      name: "Gordon Ramsay",
      image: "https://source.unsplash.com/400x300/?chef,restaurant",
      specialty: "Master of fine dining and Michelin-starred cuisine.",
    },
    {
      id: 2,
      name: "Jamie Oliver",
      image: "https://source.unsplash.com/400x300/?chef,kitchen",
      specialty: "Passionate about healthy, home-cooked meals.",
    },
    {
      id: 3,
      name: "Sanjeev Kapoor",
      image: "https://source.unsplash.com/400x300/?chef,food",
      specialty: "Bringing authentic Indian flavors to the world.",
    },
    {
      id: 4,
      name: "Christina Tosi",
      image: "https://source.unsplash.com/400x300/?bakery,chef",
      specialty: "Innovative dessert creations and baked delights.",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Meet the Chefs</h1>
      <p style={styles.subheading}>
        Get to know the world's top chefs and their culinary secrets.
      </p>

      <div style={styles.chefsContainer}>
        {chefs.map((chef) => (
          <div key={chef.id} style={styles.chefCard}>
            <img src={chef.image} alt={chef.name} style={styles.chefImage} />
            <h3>{chef.name}</h3>
            <p>{chef.specialty}</p>
          </div>
        ))}
      </div>

      <button style={styles.button} onClick={() => navigate("/")}>
        Go Back Home
      </button>
    </div>
  );
};

export default MeetTheChefs;

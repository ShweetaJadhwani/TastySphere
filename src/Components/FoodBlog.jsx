import { useNavigate } from "react-router-dom";

const FoodBlog = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      width: "100%",
      minHeight: "100vh",
      backgroundColor: "#f8f9fa",
      padding: "50px 20px",
      textAlign: "center",
    },
    heading: {
      fontSize: "42px",
      fontWeight: "bold",
      color: "#ff6347",
      marginBottom: "10px",
    },
    subheading: {
      fontSize: "20px",
      color: "#555",
      marginBottom: "30px",
    },
    blogContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
      justifyContent: "center",
      marginTop: "20px",
    },
    blogCard: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s",
      cursor: "pointer",
    },
    blogCardHover: {
      transform: "scale(1.05)",
    },
    blogImage: {
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
      backgroundColor: "#ff6347",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "30px",
    },
  };

  const blogs = [
    {
      id: 1,
      title: "The Secret Behind Perfect Pasta",
      image: "https://source.unsplash.com/400x250/?pasta,food",
      description: "Discover how to cook restaurant-style pasta at home.",
    },
    {
      id: 2,
      title: "Top 10 Must-Try Desserts",
      image: "https://source.unsplash.com/400x250/?dessert,cake",
      description: "Explore the sweetest and most delightful desserts.",
    },
    {
      id: 3,
      title: "A Guide to Exotic Spices",
      image: "https://source.unsplash.com/400x250/?spices,food",
      description: "Learn about rare spices and how to use them in your cooking.",
    },
    {
      id: 4,
      title: "Healthy Eating: Myths vs Facts",
      image: "https://source.unsplash.com/400x250/?healthy,food",
      description: "Debunking common myths about healthy food choices.",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Food Blog</h1>
      <p style={styles.subheading}>Get the latest food trends, recipes, and expert tips.</p>

      <div style={styles.blogContainer}>
        {blogs.map((blog) => (
          <div key={blog.id} style={styles.blogCard}>
            <img src={blog.image} alt={blog.title} style={styles.blogImage} />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>

      <button style={styles.button} onClick={() => navigate("/")}>Go Back Home</button>
    </div>
  );
};

export default FoodBlog;

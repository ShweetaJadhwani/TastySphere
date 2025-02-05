import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    navbar: {
      backgroundColor: "#fff",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "center", // Center the navbar content
      alignItems: "center",
      position: "fixed",
      width: "100%",
      top: 0,
      zIndex: 1000,
    },
    logo: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#333",
      textDecoration: "none",
      position: "absolute", // Keep logo on the left side
      left: "20px",
    },
    menuBtn: {
      fontSize: "24px",
      background: "none",
      border: "none",
      cursor: "pointer",
      display: isMobile ? "block" : "none",
    },
    navLinks: {
      listStyle: "none",
      display: "flex",
      gap: "30px", // Increased gap for better spacing
      margin: 0,
      padding: 0,
      alignItems: "center",
      justifyContent: "center", // Centered links horizontally
      flexDirection: isMobile ? "column" : "row",
      position: "static", // Remove the absolute positioning for the links
    },
    link: {
      textDecoration: "none",
      color: "#555",
      fontSize: "18px", // Increased font size
      fontWeight: "bold", // Bold text
      padding: isMobile ? "10px 20px" : "0",
      borderBottom: isMobile ? "1px solid #ddd" : "none",
    },
  };

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>
        Flavorville
      </Link>

      {/* Mobile Menu Button */}
      <button
        style={styles.menuBtn}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Navigation Links */}
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/recipes" style={styles.link}>Recipes</Link></li>
        <li><Link to="/restaurants" style={styles.link}>Restaurants</Link></li>
        <li><Link to="/blog" style={styles.link}>Blog</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

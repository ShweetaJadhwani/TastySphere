import { useNavigate } from "react-router-dom";

const SpecialOffers = () => {
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
      color: "#d63384",
      marginBottom: "10px",
    },
    subheading: {
      fontSize: "20px",
      color: "#555",
      marginBottom: "30px",
    },
    offersContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
      justifyContent: "center",
      marginTop: "20px",
    },
    offerCard: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s",
      cursor: "pointer",
    },
    offerCardHover: {
      transform: "scale(1.05)",
    },
    offerImage: {
      width: "100%",
      height: "250px",
      borderRadius: "10px",
      objectFit: "cover",
      marginBottom: "15px",
    },
    discountTag: {
      backgroundColor: "#ff4757",
      color: "#fff",
      padding: "5px 10px",
      borderRadius: "5px",
      fontSize: "14px",
      fontWeight: "bold",
      position: "absolute",
      top: "10px",
      right: "10px",
    },
    button: {
      padding: "12px 24px",
      fontSize: "18px",
      color: "#fff",
      backgroundColor: "#d63384",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "30px",
    },
  };

  const offers = [
    {
      id: 1,
      title: "50% Off on Gourmet Restaurants",
      image: "https://source.unsplash.com/400x300/?restaurant,dining",
      details: "Enjoy fine dining with an exclusive 50% discount at select restaurants.",
    },
    {
      id: 2,
      title: "Buy 1 Get 1 Free on Cooking Classes",
      image: "https://source.unsplash.com/400x300/?cooking,class",
      details: "Learn from expert chefs and bring a friend for free!",
    },
    {
      id: 3,
      title: "Flat 30% Off on Food Delivery",
      image: "https://source.unsplash.com/400x300/?food,delivery",
      details: "Order your favorite meals and save big with a 30% discount.",
    },
    {
      id: 4,
      title: "Special Discounts on Kitchen Appliances",
      image: "https://source.unsplash.com/400x300/?kitchen,appliances",
      details: "Upgrade your kitchen with top appliances at unbeatable prices.",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Special Offers & Deals</h1>
      <p style={styles.subheading}>
        Grab these limited-time deals and make the most of your culinary journey!
      </p>

      <div style={styles.offersContainer}>
        {offers.map((offer) => (
          <div key={offer.id} style={styles.offerCard}>
            <img src={offer.image} alt={offer.title} style={styles.offerImage} />
            <h3>{offer.title}</h3>
            <p>{offer.details}</p>
          </div>
        ))}
      </div>

      <button style={styles.button} onClick={() => navigate("/")}>
        Go Back Home
      </button>
    </div>
  );
};

export default SpecialOffers;

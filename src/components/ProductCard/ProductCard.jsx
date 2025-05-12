import "./ProductCard.css";

const ProductCard = () => {
  return (
    <section className="product-card">
      <div className="content">
        <h2>Xbox Game Pass Ultimate</h2>
        <p>
          Xbox Game Pass Ultimate Xbox Live Gold and over 100 high-quality
          console and PC games. Play together with friends and discover your
          next favorite game.
        </p>
        <a href="#" className="btn dark">
          Join Now
          <i className="bi bi-chevron-right"></i>
        </a>
      </div>
    </section>
  );
};

export default ProductCard;

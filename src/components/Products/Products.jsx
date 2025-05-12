import "./Products.css";

const Products = () => {
  return (
    <section className="products">
      <div>
        <img src="img/product/product1.png" alt="" />
        <h3>New Surface Pro 7</h3>
        <p>
          See how Katie Sowers, Asst. Coach for the 49ers, uses Surface Pro 7 to
          put her plans into play.
        </p>
        <a href="#">
          Learn More
          <i className="bi bi-chevron-right"></i>
        </a>
      </div>
      <div>
        <img src="img/product/product2.png" alt="" />
        <h3>New Surface Laptop 3</h3>
        <p>
          Express yourself powerfully with a thin, light, and elegant design,
          faster performance, and up to 11.5 hours battery life.
        </p>
        <a href="#">
          Learn More
          <i className="bi bi-chevron-right"></i>
        </a>
      </div>
      <div>
        <img src="img/product/product3.png" alt="" />
        <h3>Save $150 + free controller</h3>
        <p>
          Buy an Xbox One X console and double your fun with a free select extra
          controller. Starting at $349.
        </p>
        <a href="#">
          Learn More
          <i className="bi bi-chevron-right"></i>
        </a>
      </div>
      <div>
        <img src="img/product/product4.png" alt="" />
        <h3>The new Microsoft Edge</h3>
        <p>
          Expect more. World class performance, with more privacy, more
          productivity, and more value.
        </p>
        <a href="#">
          Learn More
          <i className="bi bi-chevron-right"></i>
        </a>
      </div>
    </section>
  );
};

export default Products;

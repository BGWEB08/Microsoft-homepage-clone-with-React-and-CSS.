import "./InfoCard.css";

const InfoCard = () => {
  return (
    <section className="info-card">
      <div className="content">
        <h2>Commiting To Carbon Negative</h2>
        <p>
          Microsoft will be carbon negative by 2030 and by 2050 we will remove
          all carbon the company has emitted since it was founded in 1975
        </p>
        <a href="#" className="btn">
          Learn More
          <i className="bi bi-chevron-right"></i>
        </a>
      </div>
    </section>
  );
};

export default InfoCard;

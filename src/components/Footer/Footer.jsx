import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-menus">
        <ul>
          <li><h3>What's New</h3></li>
          <li><a href="#">Surface Pro X</a></li>
          <li><a href="#">Surface Laptop 3</a></li>
          <li><a href="#">Surface Pro 7</a></li>
          <li><a href="#">Windows 10 apps</a></li>
          <li><a href="#">Office apps</a></li>
        </ul>
        <ul>
          <li><h3>Microsoft Store</h3></li>
          <li><a href="#">Account Profile</a></li>
          <li><a href="#">Download Center</a></li>
          <li><a href="#">Microsoft Store support</a></li>
          <li><a href="#">Returns</a></li>
          <li><a href="#">Order tracking</a></li>
        </ul>
        <ul>
          <li><h3>Education</h3></li>
          <li><a href="#">Microsoft in education</a></li>
          <li><a href="#">Office for students</a></li>
          <li><a href="#">Office 365 for schools</a></li>
          <li><a href="#">Deals for students</a></li>
          <li><a href="#">Microsoft Azure</a></li>
        </ul>
        <ul>
          <li><h3>Enterprise</h3></li>
          <li><a href="#">Azure</a></li>
          <li><a href="#">AppSource</a></li>
          <li><a href="#">Automotive</a></li>
          <li><a href="#">Government</a></li>
          <li><a href="#">Healthcare</a></li>
        </ul>
        <ul>
          <li><h3>Developer</h3></li>
          <li><a href="#">Visual Studio</a></li>
          <li><a href="#">Windows Dev Center</a></li>
          <li><a href="#">Developer Network</a></li>
          <li><a href="#">TechNet</a></li>
          <li><a href="#">Microsoft Developer</a></li>
        </ul>
        <ul>
          <li><h3>Company</h3></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">About Microsoft</a></li>
          <li><a href="#">Company news</a></li>
          <li><a href="#">Privacy at Microsoft</a></li>
          <li><a href="#">Investors</a></li>
        </ul>
      </div>
      <div className="container">
      <div className="footer-info">
        <div>
        <i className="bi bi-globe"></i>
        English (United States)
        </div>
        <ul>
          <li><a href="#">Sitemap</a></li>
          <li><a href="#">Contact Microsoft</a></li>
          <li><a href="#">Privacy & cookies</a></li>
          <li><a href="#">Terms of use</a></li>
          <li><a href="#">Trademarks</a></li>
          <li><a href="#">Safety & eco</a></li>
          <li><a href="#">About our ads</a></li>
          <li><a href="#">&copy; Microsoft 2020</a></li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Footer;

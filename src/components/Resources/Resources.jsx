import "./Resources.css";

const Resources = () => {
  return (
    <section className="resources">
      <div>
        <img src="img/resource/resource1.png" alt="" />
        <h3>Microsoft Teams</h3>
        <p>Unleash the power of your team.</p>
        <a href="#">
          Shop Now
          <i className="bi bi-chevron-right"></i>
        </a>
      </div>
      <div>
        <img src="img/resource/resource2.png" alt="" />
        <h3>Unlock the power of learning</h3>
        <p>
          Get students future-ready with Windows 10 devices. Starting at $219.
        </p>
        <a href="#">
          Shop Now
          <i className="bi bi-chevron-right"></i>
        </a>
      </div>
      <div>
        <img src="img/resource/resource3.png" alt="" />
        <h3>Windows 10 Enterprise</h3>
        <p>Download the free 90-day evaluation for IT professionals.</p>
        <a href="#">
          Download Now
          <i className="bi bi-chevron-right"></i>
        </a>
      </div>
      <div>
        <img src="img/resource/resource4.png" alt="" />
        <h3>Explore Kubernetes</h3>
        <p>
          Learn how Kubernetes works and get started with cloud native app
          development today.
        </p>
        <a href="#">
          Get Started
          <i className="bi bi-chevron-right"></i>
        </a>
      </div>
    </section>
  );
};

export default Resources;

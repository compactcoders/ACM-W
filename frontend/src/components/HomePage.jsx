import React from "react";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>ACM W SIST <span className="highlight">STUDENT CHAPTER</span></h1>
          <p>Empowering Women in Computing and Beyond</p>
        </div>
      </header>

      <section className="about-us">
        <h2>ABOUT US</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          libero euismod efficitur magna lacus suscipit.
        </p>
        <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="achievements">
        <h2>OUR ACHIEVEMENTS</h2>
        <div className="achievement-slider">
          <div className="achievement-card">ACM-W Achievements</div>
          <div className="achievement-card">More Achievements</div>
          <div className="achievement-card">Another Milestone</div>
        </div>
      </section>

      <section className="share-thoughts">
        <h2>SHARE YOUR THOUGHTS</h2>
        <p>We value your opinions and suggestions.</p>
        <a href="#">Click here</a>
      </section>

      <footer className="contact-us">
        <h2>Contact Us</h2>
        <div className="social-icons">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fas fa-envelope"></i>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
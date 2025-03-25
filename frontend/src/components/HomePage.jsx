import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import aboutVideo from "../assets/about-video.mp4";
import leftImage from "../assets/acm-logo-removebg-preview.png"; // ✅ Import left image
import rightImage from "../assets/sist-removebg-preview.png"; // ✅ Import right image

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          {/* Left Image */}
          <img src={leftImage} alt="Left Decoration" className="hero-img-left" />

          <h1>ACM-W <span>SATHYABAMA</span> <span>STUDENT CHAPTER</span>
          </h1>

          {/* Right Image */}
          <img src={rightImage} alt="Right Decoration" className="hero-img-right" />

          <p>Empowering Women in Computing and Beyond</p>
        </div>
      </section>

      {/* Other Sections (No Changes) */}
      <section className="about-section">
        <h2>ABOUT US</h2>
        <div className="about-content">
          <h3>OUR VISION</h3>
          <p>
            ACM-W (Association for Computing Machinery, Women) in Sathyabama is a student chapter of the global ACM-W
            organization, dedicated to supporting, empowering, and promoting women in computing within the college
            community...
          </p>
          {/* Video Section */}
          <video src={aboutVideo} autoPlay loop controls playsInline className="about-video"></video>
        </div>
      </section>

      {/* Footer */}
      <footer className="contact-us">
        <h2>Contact Us</h2>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:example@email.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p>Copyright 2023 @ Sathyabama Institute of Science and Technology.</p>
        <p>All rights reserved.</p>
      </footer>
    </>
  );
};

export default HomePage;

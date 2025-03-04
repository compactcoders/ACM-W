import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "../styles/HomePage.css";
import homeBg from "../assets/home_bg.png"; // Background image
import aboutVideo from "../assets/about-video.mp4"; // Video file

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>ACM-W SIST <span>STUDENT CHAPTER</span></h1>
          <p>Empowering Women in Computing and Beyond</p>
        </div>
        <img src={homeBg} alt="Background" className="hero-image" />
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <h2>ABOUT US</h2>
        <div className="about-content">
          <h3>OUR VISION</h3>
          <p>ACM-W (Association for Computing Machinery, Women) in Sathyabama is a student chapter of the global ACM-W organization, dedicated to supporting, empowering, and promoting women in computing within the college community. The chapter aims to create a supportive community for women in computing to connect, share experiences, and learn from each other.</p>
          <p>Through various activities, ACM-W in Sathyabama provides opportunities for women to develop their technical skills, network with professionals, and learn about career opportunities in computing. Guest lectures by industry professionals and researchers, workshops and tutorials on various computing topics, hackathons and coding challenges, and mentorship programs are just a few examples of the events and activities organized by the chapter.
          </p>
          <p>Furthermore, ACM-W in college offers leadership opportunities for students to develop their skills by taking on roles within the chapter, such as president, vice president, or event coordinator. By joining ACM-W, students can become part of a vibrant community that is passionate about promoting diversity and inclusion in computing, and supporting the advancement of women in the field.
          </p>

          {/* Video Section */}
          <video src={aboutVideo} autoPlay loop controls playsInline className="about-video"></video>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <h2>OUR ACHIEVEMENTS</h2>
        <div className="achievement-slider">
          <div className="achievement-card"> 
            <p className="date">dd/mm/yy</p>
            <h3>ACM-W Achievements</h3>
            <p className="description">Description</p>
          </div>
          <div className="achievement-card"> 
            <p className="date">dd/mm/yy</p>
            <h3>ACM-W Achievements</h3>
            <p className="description">Description</p>
          </div>
          <div className="achievement-card"> 
            <p className="date">dd/mm/yy</p>
            <h3>ACM-W Achievements</h3>
            <p className="description">Description</p>
          </div>
        </div>
      </section>

      {/* Share Your Thoughts Section */}
      <section className="share-thoughts">
        <h2>SHARE YOUR THOUGHTS</h2>
        <p>As we strive to create a supportive community for women in computing, we want to hear from you! Your thoughts and opinions are invaluable in helping us shape the future of our ACM-W Sathyabama chapter. Take a minute to share your feedback on our website - what do you like about our resources and events? What can we improve on? Your input will help us create a better experience for our community and empower women in computing to succeed.
        </p>
        <Link to="/share-your-thoughts" className="share-link">Click here</Link> {/* ✅ Updated Link */}
      </section>

      {/* Footer Section */}
      {/* Footer Section */}
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
  <p>Copyright 2023 @ Sathyabama
Institute of Science and Technology.
</p>
<p>
All rights reserved.
</p>
</footer>

    </>
  );
};

export default HomePage;

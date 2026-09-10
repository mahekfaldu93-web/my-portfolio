import React from "react";
import "./App.css";

function App() {
  return (
    <div className="portfolio">

      <nav className="navbar">
        <div className="logo">
          <span>Portfolio</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#works">Works</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="hire-btn">
          Hire Me
        </a>
      </nav>

      <section className="hero" id="home">

        <div className="hero-content">
          <p className="intro">I AM MAHEK</p>

          <h1>Full Stack Web Developer</h1>

          <p className="hero-text">
            I create modern, responsive and user-friendly websites
            with clean design and powerful functionality.
          </p>

          <div className="hero-buttons">
            <a href="#works" className="main-btn">
              View My Work ↗
            </a>

            <a href="#contact" className="outline-btn">
              Contact Me
            </a>
          </div>

          <div className="stats">

            <div className="stat">
              <h3>14+</h3>
              <p>Web Projects</p>
            </div>

            <div className="stat">
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>

            <div className="stat">
              <h3>1.5K+</h3>
              <p>Project Hours</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-circle"></div>

          <img
            src="https://t3.ftcdn.net/jpg/06/46/90/42/360_F_646904227_k0RmrloUIQKSOEdvjJfkfjTXLJXywCOo.jpg"
            alt="Profile"/>

          <div className="glow"></div>
        </div>
      </section>

      <section className="services section" id="services">

        <div className="section-title">
          <p>WHAT I DO</p>
          <h2>My Quality Services</h2>
        </div>

        <div className="service-grid">

          <div className="service-card">
            <div className="service-icon">01</div>
            <h3>Frontend Development</h3>
            <p>
              Modern and responsive websites using HTML, CSS,
              JavaScript and React.js.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">02</div>
            <h3>Responsive Web Design</h3>
            <p>
              Clean and mobile-friendly websites that work
              perfectly on all screen sizes.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">03</div>
            <h3>Website Development</h3>
            <p>
              Fast, functional and user-friendly websites
              built according to your needs.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">04</div>
            <h3>UI & Website Optimization</h3>
            <p>
              Improving website design, performance, usability
              and overall user experience.
            </p>
          </div>
        </div>
      </section>

      <section className="works section" id="works">

        <div className="section-title">
          <p>MY PORTFOLIO</p>

          <h2>
            My Recent <span>Works</span>
          </h2>

          <div className="title-line"></div>
        </div>
        <div className="work-grid">

       <div className="work-card work-one">
      <div className="work-photo">
        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
        alt="E-Commerce Website"/>
      </div>

      <div className="work-details">
        <span className="work-number">01</span>

        <h3>E-Commerce Website</h3>
        <p>Web Development</p>
      </div>
    </div>

        <div className="work-card">
        <div className="work-photo">
         <img src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80"
         alt="Weather Website"/> </div>

           <div className="work-details">
           <span className="work-number">02</span>
           <h3>Weather Website</h3>
           <p>Web Development</p>
        </div>
       </div>

          <div className="work-card work-three">

          <div className="work-photo">
          <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80"
          alt="Bootstrap Design"/>
      </div>

          <div className="work-details">
          <span className="work-number">03</span>
          <h3>Bootstrap Design</h3>
          <p>Bootstrap</p>
        </div>
      </div>

    <div className="work-card work-four">
      <div className="work-photo">
        <img
          src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80"
          alt="Creative Website"/>
      </div>

      <div className="work-details">
        <span className="work-number">04</span>
        <h3>Creative Website</h3>
        <p>Frontend Development</p>
          </div>
        </div>
      </div>
    </section>

      <section className="skills section" id="skills">
        <div className="section-title">
          <p>MY EXPERTISE</p>

          <h2>
            My <span>Skills</span>
          </h2>
        </div>

        <div className="skill-grid">

          <div className="skill-card">
            <div className="skill-logo html">HTML</div>
            <h3>HTML</h3>
            <p>95%</p>
          </div>

          <div className="skill-card">
            <div className="skill-logo css">CSS</div>
            <h3>CSS</h3>
            <p>90%</p>
          </div>

          <div className="skill-card">
            <div className="skill-logo js">JS</div>
            <h3>JavaScript</h3>
            <p>85%</p>
          </div>

          <div className="skill-card">
            <div className="skill-logo react">R</div>
            <h3>React</h3>
            <p>85%</p>
          </div>

          <div className="skill-card">
            <div className="skill-logo bootstrap">B</div>
            <h3>Bootstrap</h3>
            <p>90%</p>
          </div>

          <div className="skill-card">
            <div className="skill-logo cpp">C++</div>
            <h3>C++</h3>
            <p>80%</p>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-content">
          <p className="intro">GET IN TOUCH</p>

          <h2>
            Let's create
            <br />
            something <span>amazing.</span>
          </h2>

          <p>
            Have a project in mind? Let's work together and
            create something beautiful.
          </p>

          <a
            href="mailto:mahek@example.com"
            className="main-btn">
            Say Hello ↗
          </a>
        </div>

        <div className="contact-card">
          <h3>Contact Information</h3>

          <div className="contact-item">
            <span>✉</span>
            <div>
              <small>Email</small>
              <p>mahek@example.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>☎</span>
            <div>
              <small>Phone</small>
              <p>+91 8320127387</p>
            </div>
          </div>

          <div className="contact-item">
            <span>⌖</span>
            <div>
              <small>Location</small>
              <p>India</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Mahek. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
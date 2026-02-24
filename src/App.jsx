import React, { useEffect } from "react";
import "./App.css";

import cafe1 from "./Cafe Content/cafe_1.mp4";
import cafe2 from "./Cafe Content/cafe_2.mp4";
import cafe3 from "./Cafe Content/cafe_3.mp4";
import cafe4 from "./Cafe Content/cafe_4.mp4";
import cafe5 from "./Cafe Content/cafe_5.mp4";

import brand1 from "./Brands/Picsart_26-02-20_12-22-19-143.jpg.jpeg";
import brand2 from "./Brands/Picsart_26-02-20_12-24-21-015.jpg.jpeg";
import brand3 from "./Brands/Picsart_26-02-20_12-26-38-852.jpg.jpeg";
import brand4 from "./Brands/Picsart_26-02-20_12-28-17-115.png";
import brand5 from "./Brands/Picsart_26-02-20_12-30-23-316.jpg.jpeg";
import brand6 from "./Brands/Picsart_26-02-20_12-34-11-670.jpg.jpeg";
import brand7 from "./Brands/Picsart_26-02-20_12-35-05-284.jpg.jpeg";
import brand8 from "./Brands/Picsart_26-02-20_12-39-42-516.jpg.jpeg";
import brand9 from "./Brands/Picsart_26-02-20_12-51-45-636.jpg (1).jpeg";
import brand10 from "./Brands/Picsart_26-02-20_12-53-45-234.jpg.jpeg";
import brand11 from "./Brands/Picsart_26-02-20_12-55-30-651.jpg.jpeg";
import brand12 from "./Brands/Picsart_26-02-20_12-57-55-379.jpg.jpeg";
import brand13 from "./Brands/Picsart_26-02-20_12-59-48-667.jpg.jpeg";
import brand14 from "./Brands/Picsart_26-02-20_13-01-44-210.jpg.jpeg";
import brand15 from "./Brands/Picsart_26-02-20_13-11-56-135.png";
import brand16 from "./Brands/Picsart_26-02-20_13-13-55-320 (1).png";
import brand17 from "./Brands/Picsart_26-02-20_13-16-12-487 (1).png";
import brand18 from "./Brands/Picsart_26-02-20_13-55-47-859 (1).png";
import brand19 from "./Brands/Picsart_26-02-20_13-56-24-761.png";
import brand20 from "./Brands/Picsart_26-02-20_13-57-57-901 (1).png";
import brand21 from "./Brands/Picsart_26-02-20_14-07-26-504.jpg (1).jpeg";
import brand22 from "./Brands/Picsart_26-02-20_14-11-41-610 (1).png";
import brand23 from "./Brands/Picsart_26-02-20_14-14-40-335.png";
import brand24 from "./Brands/Picsart_26-02-20_14-17-34-465.png";
import brand25 from "./Brands/Picsart_26-02-20_14-23-11-465 (1).png";
import brand26 from "./Brands/Picsart_26-02-20_14-30-51-791.png";
import brand27 from "./Brands/Picsart_26-02-20_14-34-28-568 (1).png";
import brand28 from "./Brands/Picsart_26-02-20_14-37-46-848.png";
import brand29 from "./Brands/Picsart_26-02-20_14-43-58-038.png";
import brand30 from "./Brands/Picsart_26-02-20_14-45-12-779 (1).png";

const brandLogos = [
  brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10,
  brand11, brand12, brand13, brand14, brand15, brand16, brand17, brand18, brand19, brand20,
  brand21, brand22, brand23, brand24, brand25, brand26, brand27, brand28, brand29, brand30
];

const App = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav>
        <div className="nav-logo">STEVEVIJAY</div>
        <div className="nav-links">
          <a
            href="https://www.instagram.com/_.stevehh._"
            target="_blank"
            rel="noreferrer"
            className="nav-icon"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@GoddamnSteve"
            target="_blank"
            rel="noreferrer"
            className="nav-icon"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          <a href="mailto:stevevijay360@gmail.com" className="nav-icon">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
          <a href="#contact" className="nav-cta">
            ✦ WORK WITH ME
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <p className="hero-subtitle">Content Creation &amp; Creative Strategy</p>
          <h1 className="hero-name">
            STEVE
            <br />
            VIJAY
          </h1>
          <a href="mailto:stevevijay360@gmail.com" className="hero-email">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            STEVEVIJAY360@GMAIL.COM
          </a>
        </div>

        <div className="hero-center">
          <div className="hero-img-wrap">
            <div className="hero-img-placeholder">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z" />
              </svg>
              <span>Your Photo</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <p className="creator-badge">UGC CREATOR</p>
          <p className="location-tag">BASED IN THRISSUR, KERALA, INDIA</p>
          <div className="social-icons-large">
            <a
              href="https://www.instagram.com/_.stevehh._"
              target="_blank"
              rel="noreferrer"
              className="soc-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@GoddamnSteve"
              target="_blank"
              rel="noreferrer"
              className="soc-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
          <div className="hero-bio">
            I'm Steve Vijay — a fashion and lifestyle creator focused on aesthetic storytelling,
            styling, and high-impact visual content. From outfit transformations to café features and
            product showcases, I create content that feels natural, visually refined, and built to
            convert attention into trust.
          </div>
        </div>
      </section>

      {/* WHY ME */}
      <section className="why-me">
        <div className="why-bg-text">WHY ME?</div>
        <h2 className="section-heading reveal">WHY WORK WITH ME?</h2>
        <div className="why-grid reveal">
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div className="stat-pill">
                <span className="num">50+</span>
                <span className="label">Clients Worked With</span>
              </div>
              <div className="stat-pill">
                <span className="num">200+</span>
                <span className="label">Videos Created</span>
              </div>
              <div className="stat-pill">
                <span className="num">3+</span>
                <span className="label">Years of Experience</span>
              </div>
            </div>
          </div>
          <div className="video-embed">
            <div className="play-btn">▶</div>
            <p>A BIT ABOUT ME</p>
            <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)" }}>
              Watch my intro video on YouTube
            </p>
          </div>
          <div>
            <div className="analytics-grid">
              <div className="analytics-row">
                <span>▶ VIEWS &nbsp; ♥ LIKES &nbsp; 💬 COMMENTS</span>
              </div>
              <div className="analytics-row">
                <span>▶ Reach</span>
                <strong>1.2M+</strong>
              </div>
              <div className="analytics-row">
                <span>♥ Engagement Rate</span>
                <strong>8.4%</strong>
              </div>
              <div className="analytics-row">
                <span>▶ Avg Views/Video</span>
                <strong>45K+</strong>
              </div>
              <div className="analytics-row">
                <span>💬 Comments</span>
                <strong>1.2K+</strong>
              </div>
              <div className="analytics-row">
                <span>↗ Shares</span>
                <strong>890+</strong>
              </div>
              <div className="analytics-row">
                <span>🔖 Saves</span>
                <strong>3.1K+</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT LIST */}
      <section className="clients-section">
        <h2 className="section-heading-dark reveal visible">BRANDS I'VE WORKED WITH</h2>
        <div className="clients-grid reveal visible">
          {brandLogos.map((logo, index) => (
            <div key={index} className={`client-logo ${index % 2 === 1 ? 'light' : ''}`}>
              <img
                src={logo}
                alt="Brand Logo"
                className="brand-img"
              />
            </div>
          ))}
        </div>
        <p
          style={{
            textAlign: "right",
            marginTop: "20px",
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "2px",
          }}
        >
          + MORE!
        </p>
      </section>

      {/* CLIENT FEEDBACK */}
      <section className="feedback-section">
        <h2 className="feedback-heading reveal">CLIENT LOVE</h2>
        <div className="testimonials-track">
          <div className="testimonial-card">
            <div className="t-header">
              <div className="t-avatar">A</div>
              <div>
                <div className="t-name">Arun Menon</div>
                <div className="t-brand">Fashion Brand Kerala</div>
              </div>
            </div>
            <div className="t-stars">★★★★★</div>
            <p className="t-text">
              Working with Steve was an absolute pleasure. His aesthetic sensibility is unmatched —
              he understood our brand voice immediately and delivered content that surpassed our
              expectations. Our engagement went up 40% the week we posted his content.
            </p>
          </div>

          <div className="testimonial-card">
            <div className="t-header">
              <div className="t-avatar" style={{ background: "#c8a96e" }}>
                P
              </div>
              <div>
                <div className="t-name">Priya Nair</div>
                <div className="t-brand">The Artisan Café, Thrissur</div>
              </div>
            </div>
            <div className="t-stars">★★★★★</div>
            <p className="t-text">
              Steve's café content was stunning. He has this natural gift for capturing atmosphere
              and mood. Our weekend footfall increased noticeably after his reel went viral. Will
              definitely work with him again!
            </p>
          </div>

          <div className="testimonial-card">
            <div className="t-header">
              <div className="t-avatar" style={{ background: "#2d2d2d", color: "#fff" }}>
                R
              </div>
              <div>
                <div className="t-name">Rahul Sharma</div>
                <div className="t-brand">HomeDecor Brand</div>
              </div>
            </div>
            <div className="t-stars">★★★★★</div>
            <p className="t-text">
              We hired Steve for our home decor campaign and the results were beyond what we
              imagined. Professional, on-time, and incredibly creative. His content felt genuine and
              our audience connected with it instantly.
            </p>
          </div>

          <div className="testimonial-card">
            <div className="t-header">
              <div className="t-avatar" style={{ background: "#8b6914" }}>
                S
              </div>
              <div>
                <div className="t-name">Sara Thomas</div>
                <div className="t-brand">Lifestyle Brand, Bangalore</div>
              </div>
            </div>
            <div className="t-stars">★★★★★</div>
            <p className="t-text">
              Steve is not just a creator — he's a strategic thinker. He asked smart questions about
              our goals, created a concept, and executed it beautifully. The video felt natural and
              showcased our product's personality perfectly.
            </p>
          </div>

          <div className="testimonial-card">
            <div className="t-header">
              <div className="t-avatar" style={{ background: "#1a5276", color: "#fff" }}>
                M
              </div>
              <div>
                <div className="t-name">Meera Krishnan</div>
                <div className="t-brand">Fashion Week Kerala</div>
              </div>
            </div>
            <div className="t-stars">★★★★★</div>
            <p className="t-text">
              Exceptional work! Steve covered our event beautifully. His eye for detail, lighting,
              and composition is remarkable. We'd absolutely recommend him to any brand looking for
              impactful UGC content.
            </p>
          </div>
        </div>
      </section>

      {/* MY WORK */}
      <section className="work-section">
        <h2 className="work-heading reveal">MY WORK</h2>

        {/* Fashion */}
        <div className="reveal">
          <div className="category-heading">✦ FASHION CONTENT</div>
          <div className="videos-grid">
            <div className="video-thumb">
              <video src={cafe1} autoPlay loop muted playsInline className="thumb-colors" style={{ objectFit: 'cover' }} />
              <div className="brand-badge">CAFE</div>
              <div className="thumb-overlay">
                <div className="thumb-play">▶</div>
                <span>View Project</span>
              </div>
              <div className="thumb-label">LUXE BISTRO</div>
            </div>
            <div className="video-thumb">
              <video src={cafe2} autoPlay loop muted playsInline className="thumb-colors" style={{ objectFit: 'cover' }} />
              <div className="brand-badge">CAFE</div>
              <div className="thumb-overlay">
                <div className="thumb-play">▶</div>
                <span>View Project</span>
              </div>
              <div className="thumb-label">ROASTOWN</div>
            </div>
            <div className="video-thumb">
              <video src={cafe3} autoPlay loop muted playsInline className="thumb-colors" style={{ objectFit: 'cover' }} />
              <div className="brand-badge">CAFE</div>
              <div className="thumb-overlay">
                <div className="thumb-play">▶</div>
                <span>View Project</span>
              </div>
              <div className="thumb-label">2D ART CAFE</div>
            </div>
            <div className="video-thumb">
              <video src={cafe4} autoPlay loop muted playsInline className="thumb-colors" style={{ objectFit: 'cover' }} />
              <div className="brand-badge">CAFE</div>
              <div className="thumb-overlay">
                <div className="thumb-play">▶</div>
                <span>View Project</span>
              </div>
              <div className="thumb-label">JUST LOAF</div>
            </div>
            <div className="video-thumb">
              <video src={cafe5} autoPlay loop muted playsInline className="thumb-colors" style={{ objectFit: 'cover' }} />
              <div className="brand-badge">CAFE</div>
              <div className="thumb-overlay">
                <div className="thumb-play">▶</div>
                <span>View Project</span>
              </div>
              <div className="thumb-label">CRUMBZ CAFE</div>
            </div>
          </div>
        </div>

        {/* Home Decor */}
        <div className="reveal">
          <div className="category-heading">🏠 HOME DECOR CONTENT</div>
          <div className="videos-grid">
            <div
              className="video-thumb"
              style={{ background: "linear-gradient(135deg,#d4c5b2,#8b7355)" }}
            >
              <div className="brand-badge">IKEA</div>
              <div className="thumb-overlay">
                <div className="thumb-play">▶</div>
                <span>View Project</span>
              </div>
              <div className="thumb-label">IKEA</div>
            </div>
            <div
              className="video-thumb"
              style={{ background: "linear-gradient(135deg,#2d4a3e,#c8a96e)" }}
            >
              <div className="brand-badge">PEPPERFRY</div>
              <div className="thumb-overlay">
                <div className="thumb-play">▶</div>
                <span>View Project</span>
              </div>
              <div className="thumb-label">PEPPERFRY</div>
            </div>
            <div
              className="video-thumb"
              style={{ background: "linear-gradient(135deg,#e8d5a3,#5a3e2b)" }}
            >
              <div className="brand-badge">URBAN LADDER</div>
              <div className="thumb-overlay">
                <div className="thumb-play">▶</div>
                <span>View Project</span>
              </div>
              <div className="thumb-label">URBAN LADDER</div>
            </div>
            <div
              className="video-thumb"
              style={{ background: "linear-gradient(135deg,#3d3d3d,#e8c87a)" }}
            >
              <div className="brand-badge">GODREJ INTERIO</div>
              <div className="thumb-overlay">
                <div className="thumb-play">▶</div>
                <span>View Project</span>
              </div>
              <div className="thumb-label">GODREJ INTERIO</div>
            </div>
          </div>
        </div>

        {/* Paid Ads */}
        <div className="reveal">
          <div className="category-heading">📱 PAID ADS</div>
          <div className="videos-grid">
            <div
              className="video-thumb"
              style={{ background: "linear-gradient(135deg,#1a1a1a,#c8a96e)" }}
            >
              <div className="brand-badge">NYKAA</div>
              <div className="thumb-overlay">
                <div className="thumb-play">▶</div>
                <span>View Project</span>
              </div>
              <div className="thumb-label">NYKAA</div>
            </div>
            <div
              className="video-thumb"
              style={{ background: "linear-gradient(135deg,#0d3b6e,#e8d5a3)" }}
            >
              <div className="brand-badge">BOAT</div>
              <div className="thumb-overlay">
                <div className="thumb-play">▶</div>
                <span>View Project</span>
              </div>
              <div className="thumb-label">BOAT</div>
            </div>
            <div
              className="video-thumb"
              style={{ background: "linear-gradient(135deg,#4a0080,#c8a96e)" }}
            >
              <div className="brand-badge">NOISE</div>
              <div className="thumb-overlay">
                <div className="thumb-play">▶</div>
                <span>View Project</span>
              </div>
              <div className="thumb-label">NOISE</div>
            </div>
            <div
              className="video-thumb"
              style={{ background: "linear-gradient(135deg,#1c4a2b,#e8d5a3)" }}
            >
              <div className="brand-badge">PLUM</div>
              <div className="thumb-overlay">
                <div className="thumb-play">▶</div>
                <span>View Project</span>
              </div>
              <div className="thumb-label">PLUM</div>
            </div>
            <div
              className="video-thumb"
              style={{ background: "linear-gradient(135deg,#5c1010,#c8a96e)" }}
            >
              <div className="brand-badge">BEWAKOOF</div>
              <div className="thumb-overlay">
                <div className="thumb-play">▶</div>
                <span>View Project</span>
              </div>
              <div className="thumb-label">BEWAKOOF</div>
            </div>
          </div>
        </div>

        {/* Organic Content */}
        <div className="reveal">
          <div className="category-heading">🌿 ORGANIC CONTENT</div>
          <div className="videos-grid">
            <div
              className="video-thumb"
              style={{ background: "linear-gradient(135deg,#2d5a27,#c8a96e)" }}
            >
              <div className="brand-badge">WESTSIDE</div>
              <div className="thumb-overlay">
                <div className="thumb-play">▶</div>
                <span>View Project</span>
              </div>
              <div className="thumb-label">WESTSIDE</div>
            </div>
            <div
              className="video-thumb"
              style={{ background: "linear-gradient(135deg,#1a3a5c,#e8d5a3)" }}
            >
              <div className="brand-badge">CAMPUS SUTRA</div>
              <div className="thumb-overlay">
                <div className="thumb-play">▶</div>
                <span>View Project</span>
              </div>
              <div className="thumb-label">CAMPUS SUTRA</div>
            </div>
            <div
              className="video-thumb"
              style={{ background: "linear-gradient(135deg,#5a2d82,#c8a96e)" }}
            >
              <div className="brand-badge">SNITCH</div>
              <div className="thumb-overlay">
                <div className="thumb-play">▶</div>
                <span>View Project</span>
              </div>
              <div className="thumb-label">SNITCH</div>
            </div>
            <div
              className="video-thumb"
              style={{ background: "linear-gradient(135deg,#3d1a00,#e8d5a3)" }}
            >
              <div className="brand-badge">LENSKART</div>
              <div className="thumb-overlay">
                <div className="thumb-play">▶</div>
                <span>View Project</span>
              </div>
              <div className="thumb-label">LENSKART</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="contact-bg">
          <div className="contact-left">
            <h2 className="contact-heading">
              LET'S
              <br />
              WORK
              <br />
              TOGETHER
            </h2>
            <a href="mailto:stevevijay360@gmail.com" className="contact-email">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              STEVEVIJAY360@GMAIL.COM
            </a>
            <a href="mailto:stevevijay360@gmail.com" className="contact-btn">
              GET IN TOUCH
            </a>
          </div>
          <div className="contact-right">
            <div className="contact-socials">
              <a
                href="https://www.instagram.com/_.stevehh._"
                target="_blank"
                rel="noreferrer"
                className="contact-soc"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@GoddamnSteve"
                target="_blank"
                rel="noreferrer"
                className="contact-soc"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
            <p className="contact-soc-label">STEVEVIJAY360@GMAIL.COM</p>
          </div>
        </div>
        <div className="footer">
          <p
            className="nav-logo"
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "16px",
              letterSpacing: "4px",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            STEVEVIJAY
          </p>
          <p>© 2026 STEVE VIJAY. ALL RIGHTS RESERVED.</p>
        </div>
      </section>
    </>
  );
};

export default App;

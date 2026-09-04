import React, { useEffect } from "react";
import "./App.css";

import {
  cafe1, cafe2, cafe3, cafe4, cafe5,
  introVideo,
  fashion1, fashion2, fashion3, fashion4, fashion5, fashion6,
  fashion7, fashion8, fashion9, fashion10, fashion11, fashion12,
  decor1, decor2, decor3, decor4, decor5, decor6,
  brandLogos,
  steveHero, steveAesthetic,
  handleMediaError
} from "./assets.js";

const VideoModalContext = React.createContext({ openVideo: () => {} });

const VideoCard = ({ src, badge, label }) => {
  const [aspectRatio, setAspectRatio] = React.useState(null);
  const { openVideo } = React.useContext(VideoModalContext);

  const handleLoadedMetadata = (e) => {
    const { videoWidth, videoHeight } = e.target;
    if (videoWidth && videoHeight) {
      setAspectRatio(videoWidth / videoHeight);
    }
  };

  const handleOpen = () => {
    if (openVideo) {
      openVideo(src, label, badge);
    }
  };

  return (
    <div
      className="video-thumb"
      style={aspectRatio ? { aspectRatio: `${aspectRatio}` } : {}}
      onClick={handleOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleOpen();
        }
      }}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onError={handleMediaError}
        onLoadedMetadata={handleLoadedMetadata}
        className="thumb-colors"
        style={{ objectFit: 'cover' }}
      />
      {badge && <div className="brand-badge">{badge}</div>}
      <div className="thumb-overlay">
        <div className="thumb-play">▶</div>
        <span>View Project</span>
      </div>
      {label && <div className="thumb-label">{label}</div>}
    </div>
  );
};

const App = () => {
  const [introRatio, setIntroRatio] = React.useState(null);
  const [activeVideo, setActiveVideo] = React.useState(null);

  const openVideo = (src, label, badge) => {
    setActiveVideo({ src, label, badge });
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeVideo();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
    <VideoModalContext.Provider value={{ openVideo }}>
      {/* NAVBAR */}
      <nav>
        <div className="nav-logo">STEVE VIJAY</div>
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
          <p className="hero-subtitle">Content Creator &amp; UGC Influncer</p>
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
            <img
              src={steveHero}
              alt="Steve Vijay"
              className="hero-img"
              onError={handleMediaError}
            />
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
            I’m Steve Vijay, a fashion and lifestyle creator focused on aesthetic storytelling, styling, and high-impact visual content.
            As a content creator, editor, and UGC influencer, I craft visuals from concept to final cut, ensuring every frame feels natural, visually refined, and built to convert attention into trust.
            From outfit transformations to café features and product showcases, I create content that doesn’t just look good, it connects.
          </div>
        </div>
      </section>

      {/* WHY ME */}
      <section className="why-me">
        <div className="why-bg-text">WHY ME?</div>
        <img
          src={steveAesthetic}
          alt="Steve Aesthetic"
          className="why-steve-img"
          onError={handleMediaError}
        />
        <h2 className="section-heading reveal">WHY WORK WITH ME?</h2>
        <div className="why-grid reveal">
          <div className="why-stats-col">
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="stat-info">
                <span className="num">30+</span>
                <span className="label">Brand Partners</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m16 16 3-8 3 8c-.87.06-1.7.21-2.5.44l-1.5 3.56-1.5-3.56c-.8-.23-1.63-.38-2.5-.44Z" />
                  <path d="M7 21h10" />
                  <path d="M12 21V11" />
                  <path d="M15 11h-6" />
                  <path d="M12 7V3" />
                  <path d="M12 3H8" />
                  <path d="m22 21-2-5" />
                  <path d="m2 21 2-5" />
                </svg>
              </div>
              <div className="stat-info">
                <span className="num">100+</span>
                <span className="label">Assets Delivered</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="stat-info">
                <span className="num">2</span>
                <span className="label">Years Expertise</span>
              </div>
            </div>
          </div>
          <div
            className="video-embed"
            style={{
              padding: 0,
              overflow: 'hidden',
              aspectRatio: introRatio || '16 / 9'
            }}
          >
            <video
              src={introVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              onError={handleMediaError}
              onLoadedMetadata={(e) => {
                const { videoWidth, videoHeight } = e.target;
                if (videoWidth && videoHeight) {
                  setIntroRatio(videoWidth / videoHeight);
                }
              }}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <div className="analytics-grid">
              <div className="analytics-row">
                <span>▶ VIEWS &nbsp; ♥ LIKES &nbsp; 💬 COMMENTS</span>
              </div>
              <div className="analytics-row">
                <span>▶ Reach</span>
                <strong>200K+</strong>
              </div>
              <div className="analytics-row">
                <span>♥ Engagement Rate</span>
                <strong>8.4%</strong>
              </div>
              <div className="analytics-row">
                <span>▶ Avg Views/Video</span>
                <strong>8K+</strong>
              </div>
              <div className="analytics-row">
                <span>💬 Comments</span>
                <strong>50+</strong>
              </div>
              <div className="analytics-row">
                <span>↗ Shares</span>
                <strong>750+</strong>
              </div>
              <div className="analytics-row">
                <span>🔖 Saves</span>
                <strong>250+</strong>
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
            <div key={index} className="client-logo">
              <img
                src={logo}
                alt="Brand Logo"
                className="brand-img"
                onError={handleMediaError}
                loading="lazy"
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

      {/* MY WORK */}
      <section className="work-section">
        <h2 className="work-heading reveal">MY WORK</h2>

        <div className="reveal">
          <div className="category-heading">✦ FASHION CONTENT</div>
          <div className="videos-grid">
            <VideoCard src={fashion1} badge="STYLE" label="FARWEST" />
            <VideoCard src={fashion3} badge="STYLE" label="RAWBARE" />
            <VideoCard src={fashion4} badge="STYLE" label="FIT PICKS" />
            <VideoCard src={fashion5} badge="STYLE" label="JERSEY TREND" />
            <VideoCard src={fashion6} badge="STYLE" label="CROSCROW" />
            <VideoCard src={fashion7} badge="STYLE" label="MIDNIGHT GOTHIC" />
            <VideoCard src={fashion8} badge="STYLE" label="KNYARI" />
            <VideoCard src={fashion9} badge="STYLE" label="URBAN FIT" />
            <VideoCard src={fashion10} badge="STYLE" label="STREET LOOK" />
            <VideoCard src={fashion11} badge="STYLE" label="DAILY FITS" />
            <VideoCard src={fashion12} badge="STYLE" label="IZFWORLD" />
            <VideoCard src={fashion2} badge="STYLE" label="HOODIE DROP" />
          </div>
        </div>

        <div className="reveal">
          <div className="category-heading">☕ CAFE CONTENT</div>
          <div className="videos-grid">
            <VideoCard src={cafe1} badge="CAFE" label="ROASTOWN" />
            <VideoCard src={cafe2} badge="CAFE" label="2D ART CAFE" />
            <VideoCard src={cafe3} badge="CAFE" label="JUST LOAF" />
            <VideoCard src={cafe4} badge="CAFE" label="CRUMBZ CAFE" />
            <VideoCard src={cafe5} badge="CAFE" label="LUXE BISTRO" />
          </div>
        </div>

        <div className="reveal">
          <div className="category-heading">🏠 HOME DECOR CONTENT</div>
          <div className="videos-grid">
            <VideoCard src={decor1} badge="DECOR" label="IKEA STYLE" />
            <VideoCard src={decor2} badge="DECOR" label="PEPPERFRY" />
            <VideoCard src={decor3} badge="DECOR" label="URBAN LADDER" />
            <VideoCard src={decor4} badge="DECOR" label="GODREJ" />
            <VideoCard src={decor5} badge="DECOR" label="HOME SETUP" />
            <VideoCard src={decor6} badge="DECOR" label="MINIMALIST" />
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

      {/* Video Modal Lightbox */}
      {activeVideo && (
        <div className="video-modal-backdrop" onClick={closeVideo}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal-header">
              <div className="video-modal-title-wrap">
                {activeVideo.badge && (
                  <span className="video-modal-badge">{activeVideo.badge}</span>
                )}
                <span className="video-modal-title">{activeVideo.label || "Project Preview"}</span>
              </div>
              <button
                className="video-modal-close"
                onClick={closeVideo}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="video-modal-player-wrap">
              <video
                src={activeVideo.src}
                controls
                autoPlay
                playsInline
                onError={handleMediaError}
              />
            </div>
          </div>
        </div>
      )}
    </VideoModalContext.Provider>
  );
};

export default App;

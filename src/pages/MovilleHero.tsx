import React from 'react';
import './MovilleHero.css';

const MovilleHero: React.FC = () => {
  return (
    <section className="moville-hero">

      {/* Background image */}
      <div
        className="hero-background"
        style={{ backgroundImage: `url('/movillelightcleanday.png')` }}
      />

      {/* Readability gradient — sky only, lighthouse untouched */}
      <div className="hero-readability-gradient" />

      {/* Hero content */}
      <div className="hero-content">
        <div className="hero-text-group">
          <h1 className="hero-title">
            MOVILLE<br />SUMMER FESTIVAL
          </h1>
          <p className="hero-date">8–12 JULY</p>
        </div>

        <div className="hero-button-row">
          <button
            className="hero-button"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            FESTIVAL INFO
          </button>
        </div>
      </div>

    </section>
  );
};

export default MovilleHero;
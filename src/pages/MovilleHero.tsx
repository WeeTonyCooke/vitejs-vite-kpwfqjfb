import React, { useEffect, useState } from 'react';
import './MovilleHero.css';

const DAY_IMG = '/movillelightcleanday.png';
const NIGHT_IMG = '/movillelightcleannight.png';

const getIsNight = () => {
  const hour = new Date().getHours();
  return hour >= 19 || hour < 7;
};

const MovilleHero: React.FC = () => {
  const [isNight, setIsNight] = useState(getIsNight());

  useEffect(() => {
    const updateTimeTheme = () => {
      setIsNight(getIsNight());
    };

    updateTimeTheme();

    const interval = window.setInterval(updateTimeTheme, 60 * 1000);

    return () => window.clearInterval(interval);
  }, []);

  const heroImage = isNight ? NIGHT_IMG : DAY_IMG;

  return (
    <section
      className="moville-hero"
      style={{
        backgroundImage: `url('${heroImage}')`,
      }}
    >
      <div className="moville-hero__overlay" />

      <div className="moville-hero__content">
        <h1 className="moville-hero__title">Moville Festival</h1>

        <p className="moville-hero__copy">
          Music, atmosphere and a festival weekend on the Inishowen coast.
          Full details and announcements coming soon.
        </p>

        <div className="moville-hero__actions">
          <a className="moville-hero__button" href="#updates">
            Latest Updates
          </a>
          <a
            className="moville-hero__button moville-hero__button--ghost"
            href="#about"
          >
            About the Festival
          </a>
        </div>
      </div>
    </section>
  );
};

export default MovilleHero;
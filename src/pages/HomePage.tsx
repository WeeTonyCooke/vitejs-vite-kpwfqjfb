import React from 'react';
import Nav from '../components/Nav';
import MovilleHero from './MovilleHero';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Nav transparent />
      <MovilleHero />

      <main>
        <section id="about" className="content-section">
          <div className="section-container">
            <h2 className="section-heading">About</h2>
            <div className="section-content">
              <p className="section-lead">
                Moville Festival is returning with another weekend of music,
                atmosphere and community on the Inishowen coast.
              </p>
              <p>
                We’re currently putting the finishing touches to the next
                edition of the festival. More announcements, event details and
                practical information will be shared soon.
              </p>
            </div>
          </div>
        </section>

        <section id="visit" className="content-section content-section--alt">
          <div className="section-container">
            <h2 className="section-heading">Visit</h2>
            <div className="section-content">
              <div className="info-grid">
                <article className="info-card">
                  <h3>Dates</h3>
                  <p>Festival weekend details will be announced shortly.</p>
                </article>

                <article className="info-card">
                  <h3>Location</h3>
                  <p>
                    Moville, County Donegal — a festival setting on the edge of
                    Lough Foyle.
                  </p>
                </article>

                <article className="info-card">
                  <h3>Planning Ahead</h3>
                  <p>
                    If you’re thinking of visiting, keep an eye on local
                    accommodation and travel options as more festival
                    information is released.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="updates" className="content-section">
          <div className="section-container">
            <h2 className="section-heading">Updates</h2>
            <div className="section-content">
              <p className="section-lead">
                Full festival information is on the way.
              </p>
              <p>
                The full programme, venues, food and pop-ups, accommodation
                suggestions and travel guidance will be published once
                confirmed.
              </p>
              <p>
                For now, this site is a holding page while the remaining
                details are finalised.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <p className="footer-title">Moville Festival</p>
          <p className="footer-copy">
            A weekend of music, place and festival atmosphere in Moville.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
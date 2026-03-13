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
                Moville Festival celebrates music, place and community on the
                Inishowen Peninsula.
              </p>
              <p>
                Set on the western shore of Lough Foyle, the festival brings
                together live music, local food, pop-ups and gatherings across
                the town of Moville.
              </p>
              <p>
                The weekend unfolds across the waterfront, the promenade and
                venues throughout the town — with the surrounding coastline and
                hills never far away.
              </p>
              <p>
                Further details about artists, venues and events will be
                announced as the programme develops.
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
                  <h3>Festival Setting</h3>
                  <p>
                    A waterfront town on the edge of Lough Foyle, with the
                    promenade, shoreline and surrounding landscape shaping the
                    atmosphere of the weekend.
                  </p>
                </article>

                <article className="info-card">
                  <h3>Town Venues</h3>
                  <p>
                    Events and gatherings will take place across Moville as
                    plans are confirmed, making the town itself part of the
                    festival experience.
                  </p>
                </article>

                <article className="info-card">
                  <h3>Planning Ahead</h3>
                  <p>
                    If you’re thinking of visiting, it’s worth keeping an eye on
                    local accommodation and travel options while details are
                    being finalised.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="getting-here" className="content-section">
          <div className="section-container">
            <h2 className="section-heading">Getting Here</h2>
            <div className="section-content">
              <p className="section-lead">
                Moville is located on the Inishowen Peninsula in County
                Donegal, on the western shore of Lough Foyle — about 25 minutes
                from Derry city centre.
              </p>

              <div className="info-grid">
                <article className="info-card">
                  <h3>From Derry / Londonderry</h3>
                  <p>
                    Follow the R238 along the Foyle shore. The drive takes
                    around 25–30 minutes.
                  </p>
                </article>

                <article className="info-card">
                  <h3>From Belfast</h3>
                  <p>
                    Allow around two hours via the A6 to Derry, then continue
                    along the R238 to Moville.
                  </p>
                </article>

                <article className="info-card">
                  <h3>From Dublin</h3>
                  <p>
                    Allow approximately 3.5 to 4 hours via the M1 motorway and
                    onward through Monaghan or via Derry.
                  </p>
                </article>

                <article className="info-card">
                  <h3>The Foyle Ferry</h3>
                  <p>
                    A seasonal ferry operates between Magilligan Point in County
                    Derry and Greencastle, just 10 minutes south of Moville.
                    It’s one of the most scenic ways to arrive in Inishowen.
                    Check current timetables before travelling.
                  </p>
                </article>

                <article className="info-card">
                  <h3>City of Derry Airport</h3>
                  <p>
                    Located about 30 minutes from Moville, with routes from
                    London Heathrow, Stansted, Manchester, Glasgow and
                    Edinburgh. Car hire is available at the airport.
                  </p>
                </article>

                <article className="info-card">
                  <h3>The Wild Atlantic Way</h3>
                  <p>
                    Moville sits on the northern reaches of the Wild Atlantic
                    Way. The drive up the Inishowen Peninsula from Buncrana
                    makes for a particularly beautiful approach.
                  </p>
                </article>
              </div>

              <p className="section-note">
                Further transport details will be added here as plans develop.
              </p>
            </div>
          </div>
        </section>

        <section id="updates" className="content-section content-section--alt">
          <div className="section-container">
            <h2 className="section-heading">Updates</h2>
            <div className="section-content">
              <p className="section-lead">
                The full programme will be announced shortly.
              </p>
              <p>
                Music, food, pop-ups and more details will appear here as plans
                are confirmed.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <p className="footer-title">Moville Festival 2026</p>
          <p className="footer-copy">
            Music, place and community on the Inishowen Peninsula.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
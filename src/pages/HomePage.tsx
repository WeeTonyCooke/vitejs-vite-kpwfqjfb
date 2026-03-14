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
              <p>
                Moville Festival takes place in Moville on the Inishowen Peninsula.
              </p>
              <p>
                A long-standing part of Inishowen’s summer calendar, Moville
                Festival brings live music, food and events from 8–12 July 2026.
              </p>
              <p>Programme and artist announcements will follow soon.</p>
            </div>
          </div>
        </section>

        <section id="visit" className="content-section content-section--alt">
          <div className="section-container">
            <h2 className="section-heading">Visit</h2>
            <div className="section-content">
              <p>
                Moville sits on the Inishowen Peninsula on Ireland’s Wild Atlantic
                Way.
              </p>
              <p>
                The town is a good base for exploring the peninsula, including the
                Inishowen 100 coastal drive and the towns, villages and beaches of
                Inishowen.
              </p>
              <p>
                Accommodation in Moville and nearby towns fills quickly during
                festival week.
              </p>
            </div>
          </div>
        </section>

        <section id="getting-here" className="content-section">
          <div className="section-container">
            <h2 className="section-heading">Getting Here</h2>
            <div className="section-content">
              <p>
                Moville is on the Inishowen Peninsula in County Donegal, around 25
                minutes from Derry.
              </p>
              <p>
                The town can be reached by road from Derry, Belfast and Dublin.
                City of Derry Airport, about 30 minutes away, is the nearest
                airport.
              </p>
              <p>
                The Magilligan–Greencastle ferry provides a crossing from the north
                coast for visitors travelling via the Antrim Coast.
              </p>

              <div className="info-grid">
                <article className="info-card">
                  <h3>From Derry</h3>
                  <p>
                    Follow the R238 along the Foyle shore. The drive takes around
                    25–30 minutes.
                  </p>
                </article>

                <article className="info-card">
                  <h3>From Belfast</h3>
                  <p>
                    Allow around two hours via the A6 to Derry, then continue along
                    the R238 to Moville.
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
                    A seasonal ferry operates between Magilligan Point and
                    Greencastle, just 10 minutes south of Moville. Check current
                    timetables before travelling.
                  </p>
                </article>

                <article className="info-card">
                  <h3>City of Derry Airport</h3>
                  <p>
                    Located about 30 minutes from Moville, with routes from London
                    Heathrow, Stansted, Manchester, Glasgow and Edinburgh. Car hire
                    is available at the airport.
                  </p>
                </article>

                <article className="info-card">
                  <h3>The Wild Atlantic Way</h3>
                  <p>
                    Moville sits on the Inishowen stretch of the Wild Atlantic Way,
                    with the Inishowen 100 scenic route passing nearby.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="updates" className="content-section content-section--alt">
          <div className="section-container">
            <h2 className="section-heading">Updates</h2>
            <div className="section-content">
              <p>The full programme will be announced shortly.</p>
              <p>Music, food and more details will appear here as plans are confirmed.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
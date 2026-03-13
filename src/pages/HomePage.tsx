import React from 'react';
import MovilleHero from './MovilleHero';
import Nav from '../components/Nav';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Nav transparent />
      <MovilleHero />

      {/* ── About the Festival ── */}
      <section id="about" className="content-section">
        <div className="section-container">
          <h2 className="section-heading">About the Festival</h2>
          <div className="section-body">
            <p>Moville Summer Festival takes place from 8–12 July.</p>
            <p>The full festival programme will be announced shortly.</p>
            <p>Events will take place across Moville throughout the weekend, including music, local food, pop-ups and community events.</p>
            <p className="section-note">More information will be added here as details are confirmed.</p>
          </div>
        </div>
      </section>

      {/* ── Programme ── */}
      <section id="programme" className="content-section content-section--alt">
        <div className="section-container">
          <h2 className="section-heading">Programme</h2>
          <div className="section-body">
            <p>The full festival programme will be announced shortly.</p>
            <p className="section-note">Events will take place across Moville from 8–12 July. Please check back soon for the full schedule.</p>
          </div>
        </div>
      </section>

      {/* ── Food & Pop-Ups ── */}
      <section id="food" className="content-section">
        <div className="section-container">
          <h2 className="section-heading">Food &amp; Pop-Ups</h2>
          <div className="section-body">
            <p>Local food vendors, cafés and festival pop-ups will be announced soon.</p>
            <p className="section-note">More details will be added here as vendors are confirmed.</p>
          </div>
        </div>
      </section>

      {/* ── Accommodation ── */}
      <section id="accommodation" className="content-section content-section--alt">
        <div className="section-container">
          <h2 className="section-heading">Accommodation</h2>
          <div className="section-body">
            <p>Visitors travelling to Moville for the festival are encouraged to book accommodation early.</p>
            <p className="section-note">Details of local hotels, guesthouses and nearby stays will be added shortly.</p>
          </div>
        </div>
      </section>

      {/* ── Getting Here ── */}
      <section id="getting-here" className="content-section">
        <div className="section-container">
          <h2 className="section-heading">Getting Here</h2>
          <div className="section-body">
            <p>Moville is located on the Inishowen Peninsula in County Donegal, on the western shore of Lough Foyle — about 25 minutes from Derry city centre.</p>
            <p>By car from Derry / Londonderry: Follow the R238 along the Foyle shore. The drive takes around 25–30 minutes.</p>
            <p>By car from Dublin: Approximately 3.5 to 4 hours via the M1 motorway and onward through Monaghan or via Derry.</p>
            <p>By car from Belfast: Allow around 2 hours via the A6 to Derry, then onward to Moville.</p>
            <p>The Foyle Ferry: A seasonal ferry runs between Magilligan Point in Co. Derry and Greencastle, just 10 minutes south of Moville — one of the most scenic ways to arrive. Check current timetables before travel.</p>
            <p>City of Derry Airport: Located just 30 minutes from Moville, with routes from London Heathrow, Stansted, Manchester, Glasgow and Edinburgh. Car hire available at the airport.</p>
            <p>The Wild Atlantic Way: Moville sits on the northern reaches of the Wild Atlantic Way. The drive up the Inishowen Peninsula from Buncrana makes for a stunning approach.</p>
            <p className="section-note">Further transport details will be added here as confirmed.</p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>© Moville Summer Festival 2025 · Moville, Co. Donegal</p>
      </footer>
    </div>
  );
};

export default HomePage;
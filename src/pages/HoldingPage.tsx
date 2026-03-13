import React from 'react';
import './HoldingPage.css';

const HoldingPage: React.FC = () => {
  return (
    <main className="holding-page">
      <section className="holding-panel">
        <p className="holding-kicker">Moville Festival 2026</p>
        <h1 className="holding-title">Programme</h1>
        <p className="holding-copy">
          The full programme will be announced shortly.
        </p>
        <p className="holding-copy">
          Music, food, pop-ups and more details will appear here as plans are
          confirmed.
        </p>
      </section>
    </main>
  );
};

export default HoldingPage;
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import './HoldingPage.css';

interface HoldingPageProps {
  title: string;
  paragraphs: string[];
}

const HoldingPage: React.FC<HoldingPageProps> = ({ title, paragraphs }) => {
  return (
    <div className="holding-page">
      <Nav />
      <main className="holding-main">
        <div className="holding-container">
          <h1 className="holding-title">{title}</h1>
          <div className="holding-body">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Link to="/" className="holding-back">← Back to Festival</Link>
        </div>
      </main>
      <footer className="site-footer holding-footer">
        <p>© Moville Summer Festival 2025 · Moville, Co. Donegal</p>
      </footer>
    </div>
  );
};

export default HoldingPage;
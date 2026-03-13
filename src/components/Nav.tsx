import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Nav.css';

interface NavProps {
  transparent?: boolean;
}

const NAV_LINKS = [
  { label: 'Home', anchor: null, path: '/' },
  { label: 'About', anchor: 'about', path: '/' },
  { label: 'Getting Here', anchor: 'getting-here', path: '/' },
  { label: 'Updates', anchor: 'updates', path: '/' },
];

const Nav: React.FC<NavProps> = ({ transparent = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!transparent) return;

    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [transparent]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollToAnchor = (anchor: string) => {
    const target = document.getElementById(anchor);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    anchor: string | null,
    path: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);

    if (!anchor) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (location.pathname === path) {
      scrollToAnchor(anchor);
    } else {
      navigate(`${path}#${anchor}`);
    }
  };

  const isSolid = !transparent || scrolled;

  return (
    <>
      <nav
        className={`site-nav ${
          isSolid ? 'site-nav--solid' : 'site-nav--transparent'
        }`}
      >
        <div className="nav-inner">
          <div className="nav-spacer" aria-hidden="true" />

          <ul className="nav-links">
            {NAV_LINKS.map(({ label, anchor, path }) => (
              <li key={label}>
                <a
                  href={anchor ? `${path}#${anchor}` : path}
                  onClick={(e) => handleClick(e, anchor, path)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`nav-hamburger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            type="button"
          >
            <span className="bar bar-1" />
            <span className="bar bar-2" />
            <span className="bar bar-3" />
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`nav-drawer ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className="nav-drawer-links">
          {NAV_LINKS.map(({ label, anchor, path }) => (
            <li key={label}>
              <a
                href={anchor ? `${path}#${anchor}` : path}
                onClick={(e) => handleClick(e, anchor, path)}
                tabIndex={menuOpen ? 0 : -1}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <div
          className="nav-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Nav;
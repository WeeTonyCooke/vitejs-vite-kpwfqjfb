
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProgrammePage.css';

type FestivalDay = 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN';

const PROGRAMME_DATA = {
  WED: [
    {
      time: '21:00',
      title: 'Festival Bingo',
      venue: "St Eugene's Hall",
      type: 'Community event',
    },
  ],
  THU: [
    {
      time: '20:00',
      title: 'Festival Queen',
      venue: "Annie's Bar",
      type: 'Festival event',
    },
  ],
  FRI: [
    {
      time: '19:00',
      title: 'Street Frolics',
      venue: 'Market Square',
      type: 'Street event',
    },
    {
      time: '20:00',
      title: "All Folk'd Up",
      venue: 'Market Square',
      type: 'Live music',
    },
  ],
  SAT: [
    {
      time: '11:00',
      title: 'Pet Show',
      venue: 'The Green',
      type: 'Family event',
    },
    {
      time: '14:00',
      title: 'Bonny Baby',
      venue: "St Eugene's Hall",
      type: 'Community event',
    },
    {
      time: '16:00',
      title: 'Treasure Hunt',
      venue: "McGettigan's",
      type: 'Festival event',
    },
    {
      time: '18:00',
      title: 'Marty Healy Band',
      venue: 'Market Square',
      type: 'Live music',
    },
    {
      time: '21:00',
      title: 'Bagatelle',
      venue: 'Market Square',
      type: 'Live music',
    },
  ],
  SUN: [
    {
      time: '12:00',
      title: 'Moville Celtic Sports',
      venue: 'Glencrow',
      type: 'Sports',
    },
    {
      time: '17:30',
      title: 'Ball Drop',
      venue: 'The Green',
      type: 'Festival event',
    },
    {
      time: '17:30',
      title: 'The Two Bucks',
      venue: 'Market Square',
      type: 'Live music',
    },
    {
      time: '20:30',
      title: 'ABBA Tribute',
      venue: 'Market Square',
      type: 'Live music',
    },
  ],
} as const;

const FESTIVAL_DATES: Record<FestivalDay, string> = {
  WED: '2026-07-08',
  THU: '2026-07-09',
  FRI: '2026-07-10',
  SAT: '2026-07-11',
  SUN: '2026-07-12',
};

function getInitialFestivalDay(): FestivalDay {
  const today = new Date();
  const localDateString = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, '0'),
    String(today.getDate()).padStart(2, '0'),
  ].join('-');

  const matchedDay = (Object.entries(FESTIVAL_DATES) as [FestivalDay, string][])
    .find(([, date]) => date === localDateString);

  return matchedDay ? matchedDay[0] : 'WED';
}

export default function ProgrammePage() {
  const navigate = useNavigate();
  const [activeDay, setActiveDay] = useState<FestivalDay>(getInitialFestivalDay());

  return (
    <div className="programme-page">
      <header className="programme-header">
        <button
          type="button"
          className="programme-back"
          onClick={() => navigate('/')}
          aria-label="Back to homepage"
        >
          ←
        </button>

        <p className="programme-eyebrow">Moville Festival 2026 · 8–12 July</p>

        <h1 className="programme-title">Programme</h1>

        <p className="programme-intro">
          This is the early programme for Moville Festival 2026. More events and
          artists will be added in the coming weeks.
        </p>
      </header>

      <nav className="programme-nav" aria-label="Festival days">
        {(Object.keys(PROGRAMME_DATA) as FestivalDay[]).map((day) => (
          <button
            key={day}
            type="button"
            className={`programme-tab ${activeDay === day ? 'active' : ''}`}
            onClick={() => setActiveDay(day)}
          >
            {day}
          </button>
        ))}
      </nav>

      <section className="programme-events">
        {PROGRAMME_DATA[activeDay].map((event, i) => (
          <article className="programme-event" key={`${activeDay}-${i}`}>
            <div className="event-time">{event.time}</div>

            <div className="event-body">
              <h2 className="event-title">{event.title}</h2>
              <div className="event-meta">
                {event.venue} <span className="event-separator">·</span> {event.type}
              </div>
            </div>
          </article>
        ))}
      </section>

      <div className="programme-social">
        <div className="programme-social__label">Follow the festival</div>

        <div className="programme-social__links">
          <a
            href="https://instagram.com/movillefestival"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <span>·</span>
          <a
            href="https://facebook.com/MovilleFestival"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <span>·</span>
          <a
            href="https://tiktok.com/@moville.festival"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>
        </div>
      </div>
    </div>
  );
}
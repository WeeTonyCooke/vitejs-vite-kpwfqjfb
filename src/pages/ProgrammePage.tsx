import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProgrammePage.css';

type FestivalDay = 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN';

const PROGRAMME_DATA = {
  WED: [
    {
      time: '21:00',
      title: 'Festival Bingo',
      venue: "St Eugene's Hall",
      kind: 'Community event',
    },
  ],
  THU: [
    {
      time: '20:00',
      title: 'Festival Queen',
      venue: "Annie's Bar",
      kind: 'Festival event',
    },
  ],
  FRI: [
    {
      time: '19:00',
      title: 'Street Frolics',
      venue: 'Market Square',
      kind: 'Street event',
    },
    {
      time: '20:00',
      title: "All Folk'd Up",
      venue: 'Market Square',
      kind: 'Live music',
    },
  ],
  SAT: [
    {
      time: '11:00',
      title: 'Pet Show',
      venue: 'The Green',
      kind: 'Family event',
    },
    {
      time: '14:00',
      title: 'Bonny Baby',
      venue: "St Eugene's Hall",
      kind: 'Community event',
    },
    {
      time: '16:00',
      title: 'Treasure Hunt',
      venue: "McGettigan's Bar",
      kind: 'Festival event',
    },
    {
      time: '18:00',
      title: 'Marty Healy Band',
      venue: 'Market Square',
      kind: 'Live music',
    },
    {
      time: '21:00',
      title: 'Bagatelle',
      venue: 'Market Square',
      kind: 'Live music',
    },
  ],
  SUN: [
    {
      time: '12:00',
      title: 'Moville Celtic Sports',
      venue: 'Glencrow',
      kind: 'Sports event',
    },
    {
      time: '17:30',
      title: 'Ball Drop',
      venue: 'The Green',
      kind: 'Festival event',
    },
    {
      time: '17:30',
      title: 'The Two Bucks',
      venue: 'Market Square',
      kind: 'Live music',
    },
    {
      time: '20:30',
      title: 'ABBA Tribute',
      venue: 'Market Square',
      kind: 'Live music',
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

const isEventLive = (eventTime: string) => {
  const now = new Date();
  const [hours, minutes] = eventTime.split(':').map(Number);
  const eventDate = new Date();
  eventDate.setHours(hours, minutes, 0, 0);
  const diff = (now.getTime() - eventDate.getTime()) / 1000 / 60;
  return diff >= 0 && diff < 90;
};

function ProgrammePage() {
  const navigate = useNavigate();
  const [activeDay, setActiveDay] = useState<FestivalDay>(getInitialFestivalDay());
  const [isNight, setIsNight] = useState(false);
  const [isRaining] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const hour = new Date().getHours();
      setIsNight(hour >= 18 || hour < 6);
    };

    checkTime();
    const timer = setInterval(checkTime, 60000);
    return () => clearInterval(timer);
  }, []);

  const weatherLine = isRaining
    ? 'A day for the high stool.'
    : isNight
      ? 'Perfect night for music.'
      : 'Great day for a shore walk.';

  return (
    <div className={`programme-page ${isNight ? 'theme-night' : 'theme-day'}`}>
      <div className="programme-page__bg" aria-hidden="true" />

      <div className="programme-page__content">
        <header className="programme-header">
          <button
            className="programme-back"
            onClick={() => navigate('/')}
            type="button"
            aria-label="Back to homepage"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="programme-header__text">
            <p className="programme-kicker">Moville Festival 2026 · 8–12 July</p>
            <h1 className="programme-title">Programme</h1>
            <p className="programme-intro">
              This is the early programme for Moville Festival 2026. More events and
              artists will be added in the coming weeks.
            </p>
          </div>
        </header>

        <nav className="programme-day-nav" aria-label="Festival days">
          <div className="programme-day-nav__inner">
            {(Object.keys(PROGRAMME_DATA) as FestivalDay[]).map((day) => (
              <button
                key={day}
                className={`programme-day-pill ${activeDay === day ? 'is-active' : ''}`}
                onClick={() => setActiveDay(day)}
                type="button"
              >
                {day}
              </button>
            ))}
          </div>
        </nav>

        <main className="programme-main">
          <div className="programme-weather-card">
            <div className="programme-weather-card__text">
              <span className="programme-weather-card__temp">
                {isNight ? '14°C' : '18°C'} in Moville
              </span>
              <span className="programme-weather-card__desc">{weatherLine}</span>
            </div>
          </div>

          <section className="programme-schedule" aria-label={`${activeDay} schedule`}>
            {PROGRAMME_DATA[activeDay].map((event, idx) => (
              <article className="programme-event" key={`${activeDay}-${idx}`}>
                <div className="programme-event__time-col">
                  <span className="programme-event__time">{event.time}</span>
                  {activeDay === 'SAT' && isEventLive(event.time) && (
                    <span className="programme-event__live">Live</span>
                  )}
                </div>

                <div className="programme-event__details">
                  <h2 className="programme-event__title">{event.title}</h2>
                  <div className="programme-event__meta">
                    <span className="programme-event__venue">{event.venue}</span>
                    <span className="programme-event__dot" aria-hidden="true">
                      ·
                    </span>
                    <span className="programme-event__kind">{event.kind}</span>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default ProgrammePage;
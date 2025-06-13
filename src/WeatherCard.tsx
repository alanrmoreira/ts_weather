import React from 'react';

interface Hourly {
  hour: string;
  temp: number;
  code: number;
}

interface WeatherCardProps {
  day: string;
  temp: number;
  iconCode: number;
  hourly: Hourly[];
}

const getIcon = (code: number): string => {
  if ([0].includes(code)) return '☀️';
  if ([1, 2, 3].includes(code)) return '⛅';
  if ([45, 48].includes(code)) return '🌫️';
  if ([51, 53, 55, 56, 57, 61, 63, 65].includes(code)) return '🌧️';
  if ([71, 73, 75, 77, 85, 86].includes(code)) return '❄️';
  if ([80, 81, 82].includes(code)) return '🌦️';
  if ([95, 96, 99].includes(code)) return '⛈️';
  return '❓';
};

const TemperatureCurve = ({ temps }: { temps: number[] }) => {
  const points = temps.map((t, i) => `${i * 60},${100 - t}`).join(' ');
  return (
    <svg viewBox="0 0 300 100" width="100%" height="60">
      <polyline
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        points={points}
      />
    </svg>
  );
};

const WeatherCard = ({ day, temp, iconCode, hourly }: WeatherCardProps): JSX.Element => {
  return (
    <div className="card">
      <div className="top-section">
        <div className="day">{day}</div>
        <div className="icon">{getIcon(iconCode)}</div>
        <div className="temp">{temp}°</div>
      </div>
      <div className="curve">
        <TemperatureCurve temps={hourly.map(h => h.temp)} />
      </div>
      <div className="hourly-scroll">
        {hourly.map((h, idx) => (
          <div key={idx} className="hour">
            <div className="hour-time">{h.hour}</div>
            <div className="hour-icon">{getIcon(h.code)}</div>
            <div className="hour-temp">{h.temp}°</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;
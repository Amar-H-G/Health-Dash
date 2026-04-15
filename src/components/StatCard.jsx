import React from "react";
import "../styles/DiagnosisHistory.css";
import heartIcon from "../assets/HeartBPM1.svg";

// ── Inline SVG Icons for stat cards ─────────────────────────

const LungsIcon = () => (
  <svg width="110" height="110" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="45" cy="45" r="45" fill="#FFFFFF" />
    <g transform="translate(18, 17)">
      <path
        d="M27 12c0-3.314-2.686-6-6-6s-6 2.686-6 6v4c-4.418 0-9 4-9 10 0 8 4 16 9 16h12V12z"
        fill="#6FC8F0"
        stroke="#072635"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 12c0-3.314 2.686-6 6-6s6 2.686 6 6v4c4.418 0 9 4 9 10 0 8-4 16-9 16H27V12z"
        fill="#6FC8F0"
        stroke="#072635"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="27" y1="6" x2="27" y2="12" stroke="#072635" strokeWidth="2.6" strokeLinecap="round" />
      <path
        d="M21 6 Q27 3 33 6"
        fill="none"
        stroke="#072635"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

const ThermometerIcon = () => (
  <svg width="110" height="110" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="45" cy="45" r="45" fill="#FFFFFF" />
    <g transform="translate(27, 15)">
      <rect x="13" y="0" width="10" height="40" rx="5" fill="#FFFFFF" stroke="#072635" strokeWidth="2.1" />
      <rect x="15" y="16" width="6" height="24" rx="3" fill="#FF6B6B" />
      <circle cx="18" cy="44" r="8.5" fill="#FF6B6B" stroke="#072635" strokeWidth="2.1" />
      <line x1="23" y1="10" x2="29" y2="10" stroke="#072635" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="23" y1="17" x2="27" y2="17" stroke="#072635" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="23" y1="24" x2="29" y2="24" stroke="#072635" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="23" y1="31" x2="27" y2="31" stroke="#072635" strokeWidth="1.8" strokeLinecap="round" />
    </g>
  </svg>
);

const HeartRateIcon = () => (
  <img src={heartIcon} alt="" aria-hidden="true" />
);

// arrow icons
const ArrowDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
  <polyline points="18 15 12 9 6 15" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Map of type → icon component
const ICONS = {
  respiratory: <LungsIcon />,
  temperature: <ThermometerIcon />,
  heartrate: <HeartRateIcon />,
};

/**
 * StatCard - Reusable vital sign card.
 * Props:
 *  - type: "respiratory" | "temperature" | "heartrate"
 *  - label: string
 *  - value: string | number
 *  - unit: string
 *  - status: string
 *  - trend: "up" | "down" | null
 *  - id: string (for unique element ID)
 */
const StatCard = ({ type, label, value, unit, status, trend, id }) => {
  const TrendIcon = trend === "up" ? ArrowUpIcon : trend === "down" ? ArrowDownIcon : null;

  return (
    <div
      className={`stat-card stat-card--${type}`}
      id={id}
      role="group"
      aria-label={`${label}: ${value} ${unit}`}
    >
      {/* Icon */}
      <div className="stat-card__icon-wrapper">{ICONS[type]}</div>

      {/* Label */}
      <p className="stat-card__label">{label}</p>

      {/* Value */}
      <p className="stat-card__value">
        {value} {unit}
      </p>

      {/* Status */}
      {status && (
        <div className="stat-card__status">
          {TrendIcon && <TrendIcon />}
          <span>{status}</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;

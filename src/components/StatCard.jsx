import React from "react";
import "../styles/DiagnosisHistory.css";

// ── Inline SVG Icons for stat cards ─────────────────────────

const LungsIcon = () => (
  <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="45" cy="45" r="45" fill="#E8F5FA" />
    <g transform="translate(18, 18)">
      {/* Lungs illustration */}
      <path
        d="M27 12c0-3.314-2.686-6-6-6s-6 2.686-6 6v4c-4.418 0-9 4-9 10 0 8 4 16 9 16h12V12z"
        fill="none"
        stroke="#5DADE2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 12c0-3.314 2.686-6 6-6s6 2.686 6 6v4c4.418 0 9 4 9 10 0 8-4 16-9 16H27V12z"
        fill="none"
        stroke="#5DADE2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Trachea */}
      <line x1="27" y1="6" x2="27" y2="12" stroke="#5DADE2" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M21 6 Q27 3 33 6"
        fill="none"
        stroke="#5DADE2"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

const ThermometerIcon = () => (
  <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="45" cy="45" r="45" fill="#FFE8E8" />
    <g transform="translate(27, 15)">
      {/* Thermometer body */}
      <rect x="13" y="0" width="10" height="40" rx="5" fill="none" stroke="#FF6B6B" strokeWidth="2" />
      {/* Mercury fill */}
      <rect x="15" y="20" width="6" height="20" rx="3" fill="#FF6B6B" />
      {/* Bulb */}
      <circle cx="18" cy="44" r="8" fill="#FF6B6B" />
      <circle cx="18" cy="44" r="5" fill="#FF9999" />
      {/* Scale marks */}
      <line x1="23" y1="10" x2="27" y2="10" stroke="#FF6B6B" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="23" y1="18" x2="27" y2="18" stroke="#FF6B6B" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="23" y1="26" x2="27" y2="26" stroke="#FF6B6B" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="23" y1="34" x2="27" y2="34" stroke="#FF6B6B" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </svg>
);

const HeartRateIcon = () => (
  <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="45" cy="45" r="45" fill="#FFE8F0" />
    <g transform="translate(15, 18)">
      {/* Heart */}
      <path
        d="M30 50 C10 36 6 24 10 18 C14 12 22 12 26 18 C28 20 30 22 30 22 C30 22 32 20 34 18 C38 12 46 12 50 18 C54 24 50 36 30 50z"
        fill="none"
        stroke="#FF4D88"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* EKG line */}
      <polyline
        points="6,34 14,34 18,26 22,42 26,30 30,34 34,34 38,28 42,38 46,34 54,34"
        fill="none"
        stroke="#FF4D88"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
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
        {value}
        <span style={{ fontSize: "var(--fs-18)", fontWeight: "var(--fw-bold)" }}>
          {" "}{unit}
        </span>
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

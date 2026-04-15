import React from "react";
import "../styles/DiagnosisHistory.css";
import heartIcon from "../assets/HeartBPM.svg";
import temperatureIcon from "../assets/temperature.svg";
import respiratoryIcon from "../assets/respiratory rate.svg";

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
  respiratory: <img src={respiratoryIcon} alt="" aria-hidden="true" />,
  temperature: <img src={temperatureIcon} alt="" aria-hidden="true" />,
  heartrate: <img src={heartIcon} alt="" aria-hidden="true" />,
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

import React from "react";
import "../styles/PatientProfile.css";
import { jessicaTaylorData } from "../data/patients";
import jessicaPhoto from "../assets/Layer 8@2x.png";
import phoneIcon from "../assets/PhoneIcon.svg";
import insuranceIcon from "../assets/InsuranceIcon.svg";

import birthIcon from "../assets/BirthIcon.svg";
import femaleIcon from "../assets/FemaleIcon.svg";

// ── Info Icons (inline SVGs) ────────────────────────────────

// Download icon for lab results
const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="7 10 12 15 17 10" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="12" y1="15" x2="12" y2="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Profile Info Items ───────────────────────────────────────

const PROFILE_INFO_ITEMS = [
  {
    id: "dob",
    label: "Date Of Birth",
    value: jessicaTaylorData.dateOfBirth,
    icon: <img src={birthIcon} alt="" width="24" height="24" aria-hidden="true" />,
  },
  {
    id: "gender",
    label: "Gender",
    value: jessicaTaylorData.gender,
    icon: <img src={femaleIcon} alt="" width="24" height="24" aria-hidden="true" />,
  },
  {
    id: "contact",
    label: "Contact Info.",
    value: jessicaTaylorData.contactInfo,
    icon: <img src={phoneIcon} alt="" width="24" height="24" aria-hidden="true" />,
  },
  {
    id: "emergency",
    label: "Emergency Contacts",
    value: jessicaTaylorData.emergencyContacts,
    icon: <img src={phoneIcon} alt="" width="24" height="24" aria-hidden="true" />,
  },
  {
    id: "insurance",
    label: "Insurance Provider",
    value: jessicaTaylorData.insuranceProvider,
    icon: <img src={insuranceIcon} alt="" width="24" height="24" aria-hidden="true" />,
  },
];

// ── Profile Card Component ───────────────────────────────────

const ProfileCard = () => {
  const { name } = jessicaTaylorData;

  return (
    <div className="profile-card" role="region" aria-label="Patient profile">
      {/* Avatar */}
      <div className="profile-card__avatar-wrapper">
        <img
          src={jessicaPhoto}
          alt="Jessica Taylor"
          className="profile-card__avatar"
        />
      </div>

      {/* Name */}
      <h2 className="profile-card__name">{name}</h2>

      {/* Info List */}
      <ul className="profile-card__info-list" aria-label="Patient details">
        {PROFILE_INFO_ITEMS.map((item) => (
          <li key={item.id} className="profile-card__info-item">
            <span className="profile-card__info-icon">{item.icon}</span>
            <div className="profile-card__info-content">
              <p className="profile-card__info-label">{item.label}</p>
              <p className="profile-card__info-value">{item.value}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Show All Information Button */}
      <button
        className="profile-card__btn"
        id="show-all-info-btn"
        aria-label="Show all information for Jessica Taylor"
      >
        Show All Information
      </button>
    </div>
  );
};

// ── Lab Results Component ────────────────────────────────────

const LabResults = () => {
  const { labResults } = jessicaTaylorData;

  return (
    <div className="lab-results" role="region" aria-label="Lab results">
      <h3 className="lab-results__title">Lab Results</h3>
      <ul className="lab-results__list" aria-label="Available lab result documents">
        {labResults.map((result, index) => (
          <li
            key={result.id}
            className={`lab-results__item ${index === 1 ? "lab-results__item--active" : ""}`}
          >
            <span className="lab-results__item-name">{result.name}</span>
            <button
              className="lab-results__download-btn"
              id={`download-${result.name.toLowerCase().replace(/\s+/g, "-")}`}
              aria-label={`Download ${result.name}`}
            >
              <DownloadIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ── Main PatientProfileCard Component ───────────────────────

/**
 * PatientProfileCard
 * Right panel containing profile information and lab results.
 */
const PatientProfileCard = () => {
  return (
    <div className="patient-profile">
      <ProfileCard />
      <LabResults />
    </div>
  );
};

export default PatientProfileCard;

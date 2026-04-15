import React from "react";
import "../styles/PatientProfile.css";
import "../styles/PatientProfile.css";
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

// ── Profile Card Component ───────────────────────────────────

const ProfileCard = ({ patient }) => {
  const { name, profile_picture, date_of_birth, gender, phone_number, emergency_contact, insurance_type } = patient;

  const formattedDob = new Date(date_of_birth).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  const PROFILE_INFO_ITEMS = [
    {
      id: "dob",
      label: "Date Of Birth",
      value: formattedDob,
      icon: <img src={birthIcon} alt="" width="24" height="24" aria-hidden="true" />,
    },
    {
      id: "gender",
      label: "Gender",
      value: gender,
      icon: <img src={femaleIcon} alt="" width="24" height="24" aria-hidden="true" />,
    },
    {
      id: "contact",
      label: "Contact Info.",
      value: phone_number,
      icon: <img src={phoneIcon} alt="" width="24" height="24" aria-hidden="true" />,
    },
    {
      id: "emergency",
      label: "Emergency Contacts",
      value: emergency_contact,
      icon: <img src={phoneIcon} alt="" width="24" height="24" aria-hidden="true" />,
    },
    {
      id: "insurance",
      label: "Insurance Provider",
      value: insurance_type,
      icon: <img src={insuranceIcon} alt="" width="24" height="24" aria-hidden="true" />,
    },
  ];

  return (
    <div className="profile-card" role="region" aria-label="Patient profile">
      {/* Avatar */}
      <div className="profile-card__avatar-wrapper">
        <img
          src={profile_picture}
          alt={name}
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
        aria-label={`Show all information for ${name}`}
      >
        Show All Information
      </button>
    </div>
  );
};

// ── Lab Results Component ────────────────────────────────────

const LabResults = ({ patient }) => {
  const { lab_results } = patient;

  return (
    <div className="lab-results" role="region" aria-label="Lab results">
      <h3 className="lab-results__title">Lab Results</h3>
      <ul className="lab-results__list" aria-label="Available lab result documents">
        {lab_results.map((result, index) => (
          <li
            key={index}
            className={`lab-results__item ${index === 1 ? "lab-results__item--active" : ""}`}
          >
            <span className="lab-results__item-name">{result}</span>
            <button
              className="lab-results__download-btn"
              id={`download-${result.toLowerCase().replace(/\s+/g, "-")}`}
              aria-label={`Download ${result}`}
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
const PatientProfileCard = ({ patient }) => {
  return (
    <div className="patient-profile">
      <ProfileCard patient={patient} />
      <LabResults patient={patient} />
    </div>
  );
};

export default PatientProfileCard;

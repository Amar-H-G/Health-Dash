import React from "react";
import "../styles/Sidebar.css";
import { patients } from "../data/patients";
import searchIcon from "../assets/search_FILL0_wght300_GRAD0_opsz24.svg";
import jessicaAvatar from "../assets/Layer 8.png";

/**
 * Sidebar Component
 * Displays the scrollable patient list.
 * Jessica Taylor is shown as selected (active state).
 */
const Sidebar = () => {
  // Helper: get the correct avatar src for a patient
  const getAvatarSrc = (patient) => {
    if (patient.name === "Jessica Taylor") {
      return jessicaAvatar;
    }
    return patient.avatar;
  };

  return (
    <aside className="sidebar" aria-label="Patient list">
      {/* Sidebar Header */}
      <div className="sidebar__header">
        <h2 className="sidebar__title">Patients</h2>
        <button
          className="sidebar__search-btn"
          id="sidebar-search-btn"
          aria-label="Search patients"
        >
          <img src={searchIcon} alt="" aria-hidden="true" />
        </button>
      </div>

      {/* Patient List */}
      <ul className="sidebar__list" role="list" aria-label="Patients">
        {patients.map((patient) => {
          const isActive = patient.name === "Jessica Taylor";
          const avatarSrc = getAvatarSrc(patient);

          return (
            <li
              key={patient.id}
              className={`sidebar__list-item ${isActive ? "sidebar__list-item--active" : ""}`}
              role="listitem"
              aria-selected={isActive}
              aria-label={`${patient.name}, ${patient.gender}, ${patient.age}`}
            >
              {/* Avatar */}
              <div className="sidebar__avatar-wrapper">
                <img
                  src={avatarSrc}
                  alt={patient.name}
                  className="sidebar__avatar"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(patient.name)}&background=D8FCF7&color=072635&bold=true&size=44`;
                  }}
                />
              </div>

              {/* Patient Info */}
              <div className="sidebar__patient-info">
                <p className="sidebar__patient-name">{patient.name}</p>
                <p className="sidebar__patient-meta">
                  {patient.gender}, {patient.age}
                </p>
              </div>

              {/* More options button */}
              <button
                className="sidebar__more-btn"
                id={`patient-more-${patient.id}`}
                aria-label={`More options for ${patient.name}`}
              >
                ···
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;

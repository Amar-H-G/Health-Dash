import React from "react";
import "../styles/Sidebar.css";
import { patients } from "../data/patients";
import searchIcon from "../assets/search_FILL0_wght300_GRAD0_opsz24.svg";
import jessicaAvatar from "../assets/Layer 8.png";

const Sidebar = ({ isOpen = false, onClose = () => {} }) => {
  const getAvatarSrc = (patient) => {
    if (patient.name === "Jessica Taylor") {
      return jessicaAvatar;
    }

    return patient.avatar;
  };

  return (
    <>
      <button
        type="button"
        className={`sidebar__backdrop ${isOpen ? "sidebar__backdrop--visible" : ""}`}
        aria-label="Close patient sidebar"
        onClick={onClose}
      />

      <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`} aria-label="Patient list">
        <div className="sidebar__header">
          <h2 className="sidebar__title">Patients</h2>

          <div className="sidebar__header-actions">
            <button
              className="sidebar__search-btn"
              aria-label="Search patients"
              type="button"
            >
              <img src={searchIcon} alt="" aria-hidden="true" />
            </button>

            <button
              type="button"
              className="sidebar__close-btn"
              aria-label="Close patient sidebar"
              onClick={onClose}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
                <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

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

                <div className="sidebar__patient-info">
                  <p className="sidebar__patient-name">{patient.name}</p>
                  <p className="sidebar__patient-meta">
                    {patient.gender}, {patient.age}
                  </p>
                </div>

                <button
                  className="sidebar__more-btn"
                  aria-label={`More options for ${patient.name}`}
                  type="button"
                >
                  ...
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;

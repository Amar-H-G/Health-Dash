import React from "react";
import "../styles/Header.css";
import doctorAvatar from "../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";
import testLogo from "../assets/TestLogo.svg";

// Navigation items matching the design
const NAV_ITEMS = [
  {
    id: "overview",
    label: "Overview",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    active: false,
  },
  {
    id: "patients",
    label: "Patients",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    active: true,
  },
  {
    id: "schedule",
    label: "Schedule",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    active: false,
  },
  {
    id: "message",
    label: "Message",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    active: false,
  },
  {
    id: "transactions",
    label: "Transactions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="1" y1="10" x2="23" y2="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    active: false,
  },
];

/**
 * Header / Navbar Component
 * Displays the logo, navigation links, and doctor profile info.
 */
const Header = () => {
  return (
    <header className="header" role="banner">
      {/* Logo */}
      <div className="header__logo" aria-label="Tech.Care home">
        <img
          src={testLogo}
          alt="Tech.Care logo"
          className="header__logo-img"
        />
      </div>

      {/* Navigation */}
      <nav className="header__nav" aria-label="Main navigation">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            id={`nav-${item.id}`}
            className={`header__nav-item ${item.active ? "header__nav-item--active" : ""}`}
            aria-current={item.active ? "page" : undefined}
          >
            <span className="header__nav-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* Right Side: Doctor Profile + Actions */}
      <div className="header__right">
        {/* Doctor info */}
        <div className="header__user" aria-label="Logged in as Dr. Jose Simmons">
          <img
            src={doctorAvatar}
            alt="Dr. Jose Simmons"
            className="header__user-avatar"
          />
          <div className="header__user-info">
            <span className="header__user-name">Dr. Jose Simmons</span>
            <span className="header__user-role">General Practitioner</span>
          </div>
        </div>

        <div className="header__divider" aria-hidden="true" />

        {/* Settings & More */}
        <div className="header__actions">
          <button className="header__icon-btn" id="settings-btn" aria-label="Settings">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="header__icon-btn" id="more-btn" aria-label="More options">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="5" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

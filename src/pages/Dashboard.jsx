import React from "react";
import "../styles/Layout.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DiagnosisHistory from "../components/DiagnosisHistory";
import PatientProfileCard from "../components/PatientProfileCard";

/**
 * Dashboard Page
 * Main layout wrapper — header + 3-column grid body.
 */
const Dashboard = () => {
  return (
    <div className="layout">
      {/* Top Navbar */}
      <div className="layout__header">
        <Header />
      </div>

      {/* Main 3-Column Body */}
      <main className="layout__body" role="main">
        {/* Left: Sidebar / Patient List */}
        <Sidebar />

        {/* Center: Diagnosis History + Diagnostic Table */}
        <div className="layout__center">
          <DiagnosisHistory />
        </div>

        {/* Right: Patient Profile + Lab Results */}
        <div className="layout__right">
          <PatientProfileCard />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

import React, { useEffect, useState } from "react";
import "../styles/Layout.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DiagnosisHistory from "../components/DiagnosisHistory";
import PatientProfileCard from "../components/PatientProfileCard";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsSidebarOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 767) {
      document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  return (
    <div className="layout">
      <div className="layout__header">
        <Header onMenuToggle={() => setIsSidebarOpen((prev) => !prev)} />
      </div>

      <main className="layout__body" role="main">
        <div className={`layout__sidebar ${isSidebarOpen ? "layout__sidebar--open" : ""}`}>
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
        </div>

        <div className="layout__center">
          <DiagnosisHistory />
        </div>

        <div className="layout__right">
          <PatientProfileCard />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

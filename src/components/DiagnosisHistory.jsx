import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "../styles/DiagnosisHistory.css";
import StatCard from "./StatCard";

// Register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

// ── Icons ────────────────────────────────────────────────────

const ArrowUpIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <polyline
      points="18 15 12 9 6 15"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowDownIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <polyline
      points="6 9 12 15 18 9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <polyline
      points="6 9 12 15 18 9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ── Blood Pressure Chart ─────────────────────────────────────

const BloodPressureChart = ({ patient }) => {
  const history = patient.diagnosis_history || [];
  
  // Get last 6 months, then reverse so oldest is left, newest is right
  const chartDataReversed = [...history].slice(0, 6).reverse();
  const latestRecord = history[0] || { blood_pressure: { systolic: {}, diastolic: {} } };

  const labels = chartDataReversed.map((d) => `${d.month.substring(0, 3)}, ${d.year}`);
  const systolicData = chartDataReversed.map((d) => d.blood_pressure.systolic.value);
  const diastolicData = chartDataReversed.map((d) => d.blood_pressure.diastolic.value);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: "#E66FD2",
        backgroundColor: "rgba(230, 111, 210, 0.12)",
        borderWidth: 2.5,
        pointBackgroundColor: "#E66FD2",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.45,
        fill: false,
      },
      {
        label: "Diastolic",
        data: diastolicData,
        borderColor: "#8C6FE6",
        backgroundColor: "rgba(140, 111, 230, 0.08)",
        borderWidth: 2.5,
        pointBackgroundColor: "#8C6FE6",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.45,
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#072635",
        titleFont: { family: "Manrope", size: 12, weight: "600" },
        bodyFont: { family: "Manrope", size: 12 },
        padding: 10,
        cornerRadius: 8,
        callbacks: {
          label: (ctx) => ` ${ctx.dataset.label}: ${ctx.parsed.y} mmHg`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: {
          font: { family: "Manrope", size: 11, weight: "500" },
          color: "#707070",
        },
      },
      y: {
        min: 60,
        max: 180,
        grid: {
          color: "rgba(0,0,0,0.05)",
          drawBorder: false,
        },
        border: { display: false, dash: [4, 4] },
        ticks: {
          font: { family: "Manrope", size: 11 },
          color: "#707070",
          stepSize: 20,
        },
      },
    },
    elements: {
      line: { borderCapStyle: "round", borderJoinStyle: "round" },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };

  return (
    <div className="bp-chart-card">
      <div className="bp-chart-card__header">
        <h3 className="bp-chart-card__title">Blood Pressure</h3>
        <button
          className="bp-chart-card__filter"
          id="bp-filter-btn"
          aria-label="Filter blood pressure data"
        >
          Last 6 months <ChevronDownIcon />
        </button>
      </div>

      <div className="bp-chart-card__body">
        {/* Chart */}
        <div className="bp-chart-card__chart">
          <Line data={chartData} options={chartOptions} />
        </div>

        {/* Legend / Stats */}
        <div className="bp-chart-card__legend">
          {/* Systolic */}
          <div className="bp-legend-item">
            <div className="bp-legend-item__indicator">
              <div className="bp-legend-item__dot bp-legend-item__dot--systolic" />
              <span className="bp-legend-item__label">Systolic</span>
            </div>
            <div className="bp-legend-item__value">
              {latestRecord.blood_pressure.systolic.value}
            </div>
            <div className="bp-legend-item__status">
              <ArrowUpIcon />
              {latestRecord.blood_pressure.systolic.levels}
            </div>
          </div>

          <div className="bp-legend-item__divider" />

          {/* Diastolic */}
          <div className="bp-legend-item">
            <div className="bp-legend-item__indicator">
              <div className="bp-legend-item__dot bp-legend-item__dot--diastolic" />
              <span className="bp-legend-item__label">Diastolic</span>
            </div>
            <div className="bp-legend-item__value">
              {latestRecord.blood_pressure.diastolic.value}
            </div>
            <div className="bp-legend-item__status">
              <ArrowDownIcon />
              {latestRecord.blood_pressure.diastolic.levels}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Diagnostic Table ─────────────────────────────────────────

const DiagnosticTable = ({ patient }) => {
  const diagnosticList = patient.diagnostic_list || [];

  return (
    <div className="diagnostic-list">
      <h2 className="diagnostic-list__title">Diagnostic List</h2>
      <div className="diagnostic-table-header" aria-hidden="true">
        <table className="diagnostic-table diagnostic-table--header">
          <thead>
            <tr>
              <th scope="col">Problem/Diagnosis</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="diagnostic-table-wrapper">
        <table className="diagnostic-table diagnostic-table--body" aria-label="Diagnostic List">
          <tbody>
            {diagnosticList.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ── Main DiagnosisHistory Component ──────────────────────────

/**
 * DiagnosisHistory Component
 * Contains: Blood pressure chart, vitals stat cards, and diagnostic table.
 */
const DiagnosisHistory = ({ patient }) => {
  const latestVitals = patient.diagnosis_history?.[0] || {};
  
  const getTrend = (levels) => {
    if (!levels) return null;
    if (levels.includes("Higher")) return "up";
    if (levels.includes("Lower")) return "down";
    return null;
  };

  return (
    <>
      <section className="diagnosis-history" aria-label="Diagnosis History">
        <h1 className="diagnosis-history__title">Diagnosis History</h1>

        {/* Blood Pressure Chart Card */}
        <BloodPressureChart patient={patient} />

        {/* Vitals Row - 3 stat cards */}
        <div className="vitals-row" role="region" aria-label="Vital signs">
          <StatCard
            type="respiratory"
            label="Respiratory Rate"
            value={latestVitals.respiratory_rate?.value}
            unit="bpm"
            status={latestVitals.respiratory_rate?.levels}
            trend={getTrend(latestVitals.respiratory_rate?.levels)}
            id="stat-respiratory"
          />
          <StatCard
            type="temperature"
            label="Temperature"
            value={latestVitals.temperature?.value}
            unit="°F"
            status={latestVitals.temperature?.levels}
            trend={getTrend(latestVitals.temperature?.levels)}
            id="stat-temperature"
          />
          <StatCard
            type="heartrate"
            label="Heart Rate"
            value={latestVitals.heart_rate?.value}
            unit="bpm"
            status={latestVitals.heart_rate?.levels}
            trend={getTrend(latestVitals.heart_rate?.levels)}
            id="stat-heartrate"
          />
        </div>

      </section>
      <section className="diagnostic-panel" aria-label="Diagnostic List">
        <DiagnosticTable patient={patient} />
      </section>
    </>
  );
};

export default DiagnosisHistory;

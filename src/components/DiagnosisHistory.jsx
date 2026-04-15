import React, { useEffect, useRef } from "react";
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
import { jessicaTaylorData, statusColors } from "../data/patients";
import StatCard from "./StatCard";
import respiratoryIcon from "../assets/HeartBPM.svg";

// Register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// ── Icons ────────────────────────────────────────────────────

const ArrowUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <polyline points="18 15 12 9 6 15" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Blood Pressure Chart ─────────────────────────────────────

const BloodPressureChart = () => {
  const { bloodPressureHistory, latestBloodPressure } = jessicaTaylorData;

  const labels = bloodPressureHistory.map((d) => d.month);
  const systolicData = bloodPressureHistory.map((d) => d.systolic);
  const diastolicData = bloodPressureHistory.map((d) => d.diastolic);

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
        <button className="bp-chart-card__filter" id="bp-filter-btn" aria-label="Filter blood pressure data">
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
            <div className="bp-legend-item__value">{latestBloodPressure.systolic}</div>
            <div className="bp-legend-item__status">
              <ArrowUpIcon />
              {latestBloodPressure.systolicStatus}
            </div>
          </div>

          <div className="bp-legend-item__divider" />

          {/* Diastolic */}
          <div className="bp-legend-item">
            <div className="bp-legend-item__indicator">
              <div className="bp-legend-item__dot bp-legend-item__dot--diastolic" />
              <span className="bp-legend-item__label">Diastolic</span>
            </div>
            <div className="bp-legend-item__value">{latestBloodPressure.diastolic}</div>
            <div className="bp-legend-item__status">
              <ArrowDownIcon />
              {latestBloodPressure.diastolicStatus}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Diagnostic Table ─────────────────────────────────────────

const DiagnosticTable = () => {
  const { diagnosticList } = jessicaTaylorData;

  return (
    <div className="diagnostic-list">
      <h2 className="diagnostic-list__title">Diagnostic List</h2>
      <table className="diagnostic-table" aria-label="Diagnostic List">
        <thead>
          <tr>
            <th scope="col">Problem/Diagnosis</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {diagnosticList.map((item) => {
            const colors = statusColors[item.status] || {
              bg: "#f0f0f0",
              color: "#333",
            };
            return (
              <tr key={item.id}>
                <td>{item.problem}</td>
                <td>{item.description}</td>
                <td>
                  <span
                    className="status-badge"
                    style={{
                      backgroundColor: colors.bg,
                      color: colors.color,
                    }}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// ── Main DiagnosisHistory Component ──────────────────────────

/**
 * DiagnosisHistory Component
 * Contains: Blood pressure chart, vitals stat cards, and diagnostic table.
 */
const DiagnosisHistory = () => {
  const { vitals } = jessicaTaylorData;

  return (
    <section className="diagnosis-history" aria-label="Diagnosis History">
      <h1 className="diagnosis-history__title">Diagnosis History</h1>

      {/* Blood Pressure Chart Card */}
      <BloodPressureChart />

      {/* Vitals Row - 3 stat cards */}
      <div className="vitals-row" role="region" aria-label="Vital signs">
        <StatCard
          type="respiratory"
          label="Respiratory Rate"
          value={vitals.respiratoryRate.value}
          unit={vitals.respiratoryRate.unit}
          status={vitals.respiratoryRate.status}
          trend={vitals.respiratoryRate.trend}
          id="stat-respiratory"
        />
        <StatCard
          type="temperature"
          label="Temperature"
          value={vitals.temperature.value}
          unit={vitals.temperature.unit}
          status={vitals.temperature.status}
          trend={vitals.temperature.trend}
          id="stat-temperature"
        />
        <StatCard
          type="heartrate"
          label="Heart Rate"
          value={vitals.heartRate.value}
          unit={vitals.heartRate.unit}
          status={vitals.heartRate.status}
          trend={vitals.heartRate.trend}
          id="stat-heartrate"
        />
      </div>

      {/* Diagnostic List Table */}
      <DiagnosticTable />
    </section>
  );
};

export default DiagnosisHistory;

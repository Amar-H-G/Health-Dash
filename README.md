# TechCare Patient Dashboard

A dynamic, fully responsive single-page React application built for healthcare data management. This project serves as a frontend assessment to demonstrate the transition from a static design into a dynamic dashboard that consumes external APIs while maintaining a pixel-perfect user interface.

## 🚀 Overview

The **TechCare Dashboard** fetches and visualizes live patient data from the Coalition Technologies API using Basic Authentication. By default, it targets and displays comprehensive medical records for the patient **"Jessica Taylor"**, including her demographic profile, vital signs, diagnostic lists, and a dynamically plotted blood pressure chart. 

The UI design focuses on providing a premium user experience, complete with an aesthetically pleasing custom scrollbar and responsive structural layouts adapting seamlessly across devices.

## 🌟 Key Features

- **Live Data Integration:** Securely fetches real-time API data using Basic Authentication.
- **Dynamic Dashboard Context:** Filters data payloads to explicitly highlight the initial patient ("Jessica Taylor").
- **Interactive Health Charts:** Implements `chart.js` & `react-chartjs-2` to display a reactive Blood Pressure chart with historical data.
- **Pixel-Perfect UI:** Precision-styled components perfectly matched against Adobe XD design specifications.
- **Custom Aesthetics:** Professionally customized, non-intrusive floating scrollbars for a refined dashboard look.
- **Component-Driven Architecture:** Clean codebase relying on distinct and reusable React components (Profile, Vitals, Chart, Diagnostics).
- **Optimized Performance:** Blazing fast development server and optimized build process powered by Vite.

## 💻 Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Data Visualization:** Chart.js, react-chartjs-2
- **Styling:** Custom CSS
- **Linting:** ESLint

## 📂 Project Structure

```text
techcare-dashboard/
├── public/                 # Static assets
├── src/                    # Application source code
│   ├── components/         # Reusable dashboard UI parts (Profile, Vitals, Chart)
│   ├── App.jsx             # Main application component & data fetching logic
│   ├── index.css           # Global styling, custom scrollbars, and layouts
│   └── main.jsx            # Application entry point
├── package.json            # Dependencies and scripts setup
└── vite.config.js          # Vite configuration
```

## 🛠️ Installation & Setup (Local Development)

To run this project locally on your machine, please follow these steps:

### Prerequisites
- Ensure you have **Node.js** installed on your system.

### Steps
1. **Extract the ZIP file**
   Extract the provided project ZIP file to a desired folder on your machine.

2. **Open the project directory**
   Navigate to the extracted directory using your terminal.
   ```bash
   cd techcare-dashboard
   ```

3. **Install Dependencies**
   Run the following command to download all required packages.
   ```bash
   npm install
   ```

4. **Start the Development Server**
   Spin up the local Vite server to run the application.
   ```bash
   npm run dev
   ```

5. **View the Application**
   Open your browser and navigate to the local server URL provided in the terminal (usually `http://localhost:5173`) to interact with the dashboard.

## 📦 Building for Production

If you wish to create a production-ready optimized bundle, run:

```bash
npm run build
```
This generates a `dist` folder containing minified assets ready for deployment.

---
*Developed for the Coalition Technologies Frontend Assessment.*

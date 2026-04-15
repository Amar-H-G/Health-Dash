// ============================================================
// PATIENTS DATA - Structured for real API integration
// Replace fetch() calls with actual API endpoints when ready
// ============================================================

export const patients = [
  {
    id: 1,
    name: "Emily Williams",
    gender: "Female",
    age: 18,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Ryan Johnson",
    gender: "Male",
    age: 45,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Brandon Mitchell",
    gender: "Male",
    age: 36,
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 4,
    name: "Jessica Taylor",
    gender: "Female",
    age: 28,
    avatar: null, // Uses local asset
    isSelected: true,
  },
  {
    id: 5,
    name: "Samantha Johnson",
    gender: "Female",
    age: 56,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 6,
    name: "Ashley Martinez",
    gender: "Female",
    age: 54,
    avatar: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    id: 7,
    name: "Olivia Brown",
    gender: "Female",
    age: 32,
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    id: 8,
    name: "Tyler Davis",
    gender: "Male",
    age: 19,
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    id: 9,
    name: "Kevin Anderson",
    gender: "Male",
    age: 30,
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 10,
    name: "Dylan Thompson",
    gender: "Male",
    age: 36,
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    id: 11,
    name: "Nathan Evans",
    gender: "Male",
    age: 58,
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: 12,
    name: "Mike Nolan",
    gender: "Male",
    age: 31,
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

// ============================================================
// JESSICA TAYLOR - Selected Patient Full Data
// ============================================================

export const jessicaTaylorData = {
  id: 4,
  name: "Jessica Taylor",
  gender: "Female",
  age: 28,
  dateOfBirth: "August 23, 1996",
  contactInfo: "(415) 555-1234",
  emergencyContacts: "(415) 555-5678",
  insuranceProvider: "Sunrise Health Assurance",

  // Vitals
  vitals: {
    respiratoryRate: {
      value: 20,
      unit: "bpm",
      status: "Normal",
      trend: null,
    },
    temperature: {
      value: "98.6",
      unit: "°F",
      status: "Normal",
      trend: null,
    },
    heartRate: {
      value: 78,
      unit: "bpm",
      status: "Lower than Average",
      trend: "down",
    },
  },

  // Blood Pressure - Last 6 months
  bloodPressureHistory: [
    { month: "Oct, 2023", systolic: 120, diastolic: 108 },
    { month: "Nov, 2023", systolic: 116, diastolic: 65 },
    { month: "Dec, 2023", systolic: 160, diastolic: 108 },
    { month: "Jan, 2024", systolic: 112, diastolic: 91 },
    { month: "Feb, 2024", systolic: 149, diastolic: 70 },
    { month: "Mar, 2024", systolic: 158, diastolic: 78 },
  ],

  // Latest blood pressure values shown on chart
  latestBloodPressure: {
    systolic: 160,
    systolicStatus: "Higher than Average",
    systolicTrend: "up",
    diastolic: 78,
    diastolicStatus: "Lower than Average",
    diastolicTrend: "down",
  },

  // Diagnostic List
  diagnosticList: [
    {
      id: 1,
      problem: "Hypertension",
      description: "Chronic high blood pressure",
      status: "Under Observation",
    },
    {
      id: 2,
      problem: "Type 2 Diabetes",
      description: "Insulin resistance and elevated blood sugar",
      status: "Cured",
    },
    {
      id: 3,
      problem: "Asthma",
      description: "Recurrent episodes of bronchial constriction",
      status: "Inactive",
    },
    {
      id: 4,
      problem: "Osteoarthritis",
      description: "Degenerative joint disease causing pain and stiffness",
      status: "Inactive",
    },
    {
      id: 5,
      problem: "Allergic Rhinitis",
      description: "Seasonal allergies causing nasal inflammation",
      status: "Under Observation",
    },
  ],

  // Lab Results
  labResults: [
    { id: 1, name: "Blood Tests" },
    { id: 2, name: "CT Scans" },
    { id: 3, name: "Radiology Reports" },
    { id: 4, name: "X-Rays" },
    { id: 5, name: "Urine Test" },
  ],
};

// Status badge color mapping
export const statusColors = {
  "Under Observation": {
    bg: "#FFF3CD",
    color: "#856404",
  },
  Cured: {
    bg: "#D1FAE5",
    color: "#065F46",
  },
  Inactive: {
    bg: "#FEE2E2",
    color: "#991B1B",
  },
};



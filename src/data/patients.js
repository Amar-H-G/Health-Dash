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
  {
    id: 13,
    name: "Isabella Garcia",
    gender: "Female",
    age: 26,
    avatar: "https://randomuser.me/api/portraits/women/62.jpg",
  },
  {
    id: 14,
    name: "David Kim",
    gender: "Male",
    age: 42,
    avatar: "https://randomuser.me/api/portraits/men/84.jpg",
  },
  {
    id: 15,
    name: "Sophia Martinez",
    gender: "Female",
    age: 35,
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 16,
    name: "Arthur Lewis",
    gender: "Male",
    age: 63,
    avatar: "https://randomuser.me/api/portraits/men/91.jpg",
  },
  {
    id: 17,
    name: "Mia Robinson",
    gender: "Female",
    age: 29,
    avatar: "https://randomuser.me/api/portraits/women/35.jpg",
  },
  {
    id: 18,
    name: "James Walker",
    gender: "Male",
    age: 48,
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: 19,
    name: "Abigail Hall",
    gender: "Female",
    age: 51,
    avatar: "https://randomuser.me/api/portraits/women/51.jpg",
  },
  {
    id: 20,
    name: "Elijah Young",
    gender: "Male",
    age: 27,
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
  },
  {
    id: 21,
    name: "Chloe King",
    gender: "Female",
    age: 39,
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: 22,
    name: "Benjamin Wright",
    gender: "Male",
    age: 55,
    avatar: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    id: 23,
    name: "Grace Scott",
    gender: "Female",
    age: 44,
    avatar: "https://randomuser.me/api/portraits/women/19.jpg",
  },
  {
    id: 24,
    name: "Lucas Green",
    gender: "Male",
    age: 33,
    avatar: "https://randomuser.me/api/portraits/men/68.jpg",
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
    {
      id: 6,
      problem: "Hyperlipidemia",
      description: "Excessive lipids in the blood, increasing cardiovascular risk",
      status: "Under Observation",
    },
    {
      id: 7,
      problem: "Gastroesophageal Reflux",
      description: "Stomach acid frequently flows back into the tube connecting mouth and stomach",
      status: "Cured",
    },
    {
      id: 8,
      problem: "Migraine",
      description: "A headache of varying intensity, often accompanied by nausea and sensitivity to light",
      status: "Inactive",
    },
    {
      id: 9,
      problem: "Hypothyroidism",
      description: "Thyroid gland doesn't produce enough thyroid hormone",
      status: "Under Observation",
    },
    {
      id: 10,
      problem: "Anxiety Disorder",
      description: "Feelings of worry, anxiety, or fear that are strong enough to interfere with daily activities",
      status: "Cured",
    },
    {
      id: 11,
      problem: "Sleep Apnea",
      description: "Sleep disorder in which breathing repeatedly stops and starts",
      status: "Under Observation",
    },
    {
      id: 12,
      problem: "Vitamin D Deficiency",
      description: "Inadequate level of vitamin D in the blood",
      status: "Cured",
    },
    {
      id: 13,
      problem: "Iron Deficiency Anemia",
      description: "A condition in which blood lacks adequate healthy red blood cells",
      status: "Inactive",
    },
    {
      id: 14,
      problem: "Chronic Kidney Disease",
      description: "Long standing disease of the kidneys leading to renal failure",
      status: "Under Observation",
    },
    {
      id: 15,
      problem: "Depression",
      description: "A mental health disorder characterized by persistently depressed mood",
      status: "Inactive",
    }
  ],

  // Lab Results
  labResults: [
    { id: 1, name: "Blood Tests" },
    { id: 2, name: "CT Scans" },
    { id: 3, name: "Radiology Reports" },
    { id: 4, name: "X-Rays" },
    { id: 5, name: "Urine Test" },
    { id: 6, name: "Lipid Panel" },
    { id: 7, name: "Comprehensive Metabolic Panel" },
    { id: 8, name: "Complete Blood Count" },
    { id: 9, name: "Hemoglobin A1C" },
    { id: 10, name: "Thyroid Stimulating Hormone" },
    { id: 11, name: "EKG Report" },
    { id: 12, name: "Echocardiogram" },
    { id: 13, name: "Liver Function Test" },
    { id: 14, name: "Pulmonary Function Test" },
    { id: 15, name: "Vitamin B12 Level" }
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



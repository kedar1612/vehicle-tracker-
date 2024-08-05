const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Dummy data
const vehicleData = [
  {"latitude": 17.385044, "longitude": 78.486671, "timestamp": "2024-07-20T10:00:00Z"},
  {"latitude": 17.385045, "longitude": 78.486672, "timestamp": "2024-07-20T10:00:05Z"},
  {"latitude": 17.385046, "longitude": 78.486673, "timestamp": "2024-07-20T10:00:10Z"},
  // Add more dummy data here
];

app.use(cors());

app.get('/api/vehicle', (req, res) => {
  res.json(vehicleData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
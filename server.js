// server.js
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'mysql-26f49da9-skykv345-7e44.f.aivencloud.com',
  user: 'avnadmin',
  password: 'Sakthi345@',
  database: 'JAYAVARAD_Graphics_db',
  port: 25384
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected.");
});

// API endpoint
app.post("/api/feedback", (req, res) => {
  const { name, phone, email, message } = req.body;

  const sql = "INSERT INTO feedback (name, phone, email, message) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, phone, email, message], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database Error" });
    }
    res.status(200).json({ message: "Feedback submitted successfully" });
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

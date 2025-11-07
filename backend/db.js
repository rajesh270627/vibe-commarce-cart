const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "vibeuser",     // change to your MySQL user
  password: "Vibe@123", // change to your MySQL password
  database: "vibecommerce"
});

db.connect((err) => {
  if (err) {
    console.log("❌ DB Error:", err.message);
  } else {
    console.log("✅ MySQL Connected");
  }
});

module.exports = db;

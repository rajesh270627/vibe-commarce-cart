const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ 1. GET /api/products  (5–10 mock items)
app.get("/api/products", (req, res) => {
  db.query("SELECT id, name, price, imageFile FROM products", (err, rows) => {
    if (err) {
      console.log("❌ DB Error:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});




// ✅ 2. POST /api/cart  {productId, qty}
app.post("/api/cart", (req, res) => {
  const { productId, qty } = req.body;
  if (!productId || !qty) {
    return res.status(400).json({ error: "productId & qty required" });
  }
  db.query(
    "INSERT INTO cart (productId, qty) VALUES (?, ?)",
    [productId, qty],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Added to cart", id: result.insertId });
    }
  );
});

// ✅ 3. DELETE /api/cart/:id
app.delete("/api/cart/:id", (req, res) => {
  db.query("DELETE FROM cart WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Item removed" });
  });
});

// ✅ 4. GET /api/cart  (items + total)
app.get("/api/cart", (req, res) => {
  const q = `
    SELECT c.id, p.name, p.price, c.qty, (p.price * c.qty) AS lineTotal
    FROM cart c JOIN products p ON p.id = c.productId
  `;
  db.query(q, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    const total = rows.reduce((s, r) => s + Number(r.lineTotal), 0);
    res.json({ items: rows, grandTotal: total });
  });
});

// ✅ 5. POST /api/checkout {cartItems} → mock receipt
app.post("/api/checkout", (req, res) => {
  const timestamp = new Date().toISOString();

  const q = `
    SELECT SUM(p.price * c.qty) AS total
    FROM cart c JOIN products p ON p.id = c.productId
  `;
  db.query(q, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    const total = result[0]?.total || 0;

    // Optional: clear cart
    // db.query("TRUNCATE TABLE cart");

    res.json({
      success: true,
      receipt: {
        total,
        timestamp
      }
    });
  });
});

// ✅ server
const PORT = 5000;
app.listen(PORT, () => console.log("✅ Backend running on port", PORT));

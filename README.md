# 🛒 Vibe Commerce – Mock E-Commerce Cart (Full Stack Assignment)

A full-stack shopping cart built for the Vibe Commerce internship assignment.  
Supports products listing, add/remove cart, totals, and mock checkout.

---

## ✅ Tech Stack
- **Frontend:** React, Axios, Bootstrap, React Router
- **Backend:** Node.js, Express.js
- **Database:** MySQL (persistent cart & products)
- **Bonus Features:** Error handling, Fake Store API toggle

---

## ✅ Features

✔ Product listing with images  
✔ Add to Cart  
✔ Remove from Cart  
✔ Cart view with calculated total  
✔ Checkout with receipt + timestamp  
✔ Mobile responsive layout  
✔ MySQL-based data persistence  
✔ Bonus: Fake Store API mode

---

## ✅ Folder Structure

/backend
├─ server.js
├─ db.js
└─ routes/

/frontend
├─ src/
├─ public/images/
└─ package.json


---


## ✅ How to Run (Local Setup)

### ✅ 1️⃣ Backend Setup

```bash
cd backend
npm install
node server.js

Backend will run at:
👉 http://localhost:5000/

✅ 2️⃣ Frontend Setup
cd frontend
npm install
npm start


Frontend will run at:
👉 http://localhost:3000/

| Method | Route           | Description                |
| ------ | --------------- | -------------------------- |
| GET    | `/api/products` | Fetch all products         |
| POST   | `/api/cart`     | Add item to cart           |
| GET    | `/api/cart`     | View items in cart + total |
| DELETE | `/api/cart/:id` | Remove item from cart      |
| POST   | `/api/checkout` | Checkout → returns receipt |

✅ API Usage (cURL Examples)
✅ Get Products
curl http://localhost:5000/api/products

curl -X POST http://localhost:5000/api/cart \
  -H "Content-Type: application/json" \
  -d "{\"productId\": 1, \"qty\": 2}"
curl http://localhost:5000/api/cart

curl -X DELETE http://localhost:5000/api/cart/1

curl -X POST http://localhost:5000/api/checkout

✅ Demo Video

(Insert Loom / YouTube unlisted link here)

✅ Author

Name: Rajesh Parikapalli
Email: parikapallirajeshgoud@gmail.com

GitHub: https://github.com/rajesh270627

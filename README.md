
# 🛒 Vibe Commerce – Mock E-Com Cart (Full Stack Assignment)

A full-stack shopping cart built for the Vibe Commerce internship assignment.
Supports listing products, adding/removing from cart, totals, and mock checkout.

✅ **Tech Stack**
- **Frontend:** React (Axios, Bootstrap, Router)
- **Backend:** Node.js + Express
- **Database:** MySQL (persistence)
- **Bonus:** Error handling + Fake Store API toggle

---

## ✅ Features

✔ Product listing (grid)  
✔ Add to Cart  
✔ Remove from Cart  
✔ Cart page with total  
✔ Checkout – receipt with timestamp  
✔ Responsive UI  
✔ Real images for products  
✔ Persistent MySQL DB storage  
✔ Bonus: Fake Store API mode

---
## ✅ Folder Structure
/backend
├─ server.js
├─ db.js
├─ routes/
/frontend
├─ src/
├─ public/images/


---

## ✅ How to Run (Local Setup)

### 1️⃣ Backend

``bash
cd backend
npm install
node server.js
http://localhost:5000

cd frontend
npm install
npm start
http://localhost:3000

| Method | Route           | Description                     |
| ------ | --------------- | ------------------------------- |
| GET    | `/api/products` | Get product list                |
| POST   | `/api/cart`     | Add item                        |
| GET    | `/api/cart`     | View cart & total               |
| DELETE | `/api/cart/:id` | Remove item                     |
| POST   | `/api/checkout` | Mock checkout – returns receipt |





Name: Rajesh Parikapalli
Email: parikapallirajeshgoud@gmail.com

Github: https://github.com/rajesh270627

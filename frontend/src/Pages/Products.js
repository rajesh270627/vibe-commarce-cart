import { useEffect, useState } from "react";
import api from "../api";

export default function Products() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get("/products").then(res => setItems(res.data));
  }, []);

  const addToCart = (id) => {
    api.post("/cart", { productId: id, qty: 1 })
       .then(() => alert("✅ Added to Cart"));
  };

  return (
    <div>
      <h3 className="text-center mb-4">Products</h3>
      <div className="row g-3">
        {items.map(p => (
          <div className="col-12 col-sm-6 col-md-4" key={p.id}>
            <div className="card shadow-sm border-0 p-2 h-100 text-center">

            <img 
  src={`/images/${p.imageFile}`}
  alt={p.name}
  className="img-fluid rounded"
  style={{ height: "150px", objectFit: "cover" }}
/>



              <h5 className="mt-3">{p.name}</h5>
              <p className="text-muted">₹{p.price}</p>

              <button className="btn btn-success w-100 mt-auto"
                      onClick={() => addToCart(p.id)}>
                Add to Cart
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

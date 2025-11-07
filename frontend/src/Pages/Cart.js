import { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

export default function Cart() {
  const [data, setData] = useState({ items: [], grandTotal: 0 });

  const load = () => {
    api.get("/cart").then(res => setData(res.data));
  };

  useEffect(() => { load(); }, []);

  const removeItem = (id) => {
    api.delete(`/cart/${id}`).then(() => load());
  };

  return (
    <div>
      <h3>Your Cart</h3>

      {data.items.length === 0 && <p>No items found</p>}

      {data.items.map(item => (
        <div className="card p-2 my-2" key={item.id}>
          <div className="d-flex justify-content-between">
            <span>{item.name} × {item.qty} = ₹{item.lineTotal}</span>
            <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}

      <h4 className="mt-3">Total: ₹{data.grandTotal}</h4>
      <Link to="/checkout" className="btn btn-primary mt-2">Checkout</Link>
    </div>
  );
}

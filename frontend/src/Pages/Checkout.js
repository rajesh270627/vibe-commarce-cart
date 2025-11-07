import { useState } from "react";
import api from "../api";

export default function Checkout() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [receipt, setReceipt] = useState(null);

  const submitOrder = () => {
    api.post("/checkout", user).then((res) => {
      setReceipt(res.data);
    });
  };

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>

      {!receipt && (
        <>
          <input className="form-control my-2" placeholder="Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })} />
          <input className="form-control my-2" placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })} />

          <button className="btn btn-success" onClick={submitOrder}>
            Submit Order
          </button>
        </>
      )}

      {receipt && (
        <div className="alert alert-success mt-4">
          ✅ Order placed on: {receipt.time}
        </div>
      )}
    </div>
  );
}

export default function ReceiptModal({ receipt, onClose }) {
  if (!receipt) return null;

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(3px)" }}>

      <div className="bg-white p-4 rounded shadow" style={{ width: 350 }}>
        <h4 className="text-center mb-3">✅ Order Placed!</h4>

        <p><strong>Total:</strong> ₹{receipt.total}</p>
        <p><strong>Time:</strong> {receipt.timestamp}</p>

        <button className="btn btn-primary w-100" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

// src/components/PaymentButton.js
import React from "react";

export default function PaymentButton({ contest }) {
  const startPayment = async () => {
    // call your server /create-order to get Razorpay order and paymentId (see server sample)
    alert('This demo uses UPI QR or Razorpay server. Implement create-order and checkout flow.');
  };
  return (
    <div>
      <div>Entry Fee: ₹{contest.fee}</div>
      <div style={{marginTop:6}}>
        <button onClick={startPayment}>Pay via Razorpay</button>
      </div>
      <div style={{marginTop:8}}>
        <div>Or pay via UPI ID: thannirudurgaprasad-10@okaxis</div>
      </div>
    </div>
  );
}

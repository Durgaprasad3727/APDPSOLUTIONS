// src/components/AdminDashboard.js (simplified)
import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";

export default function AdminDashboard() {
  const [unapproved, setUnapproved] = useState([]);
  const [pendingPayments, setPendingPayments] = useState([]);

  useEffect(() => {
    const unsubE = firestore.collection("entries").where("approved","==",false).onSnapshot(s=>setUnapproved(s.docs.map(d=>({id:d.id,...d.data()}))));
    const unsubP = firestore.collection("payments").where("status","==","PENDING").onSnapshot(s=>setPendingPayments(s.docs.map(d=>({id:d.id,...d.data()}))));
    return ()=>{ unsubE(); unsubP(); }
  },[]);

  const approve = async (id) => { await firestore.collection("entries").doc(id).update({approved:true}); };
  const verifyPayment = async (id) => { await firestore.collection("payments").doc(id).update({status:'MANUAL_VERIFIED', paidAt:new Date()}); };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Pending Entries</h3>
      <ul>{unapproved.map(e=><li key={e.id}>{e.displayName} - <button onClick={()=>approve(e.id)}>Approve</button></li>)}</ul>
      <h3>Pending Payments</h3>
      <ul>{pendingPayments.map(p=><li key={p.id}>{p.userId} ₹{p.amount} - <button onClick={()=>verifyPayment(p.id)}>Verify</button></li>)}</ul>
    </div>
  );
}

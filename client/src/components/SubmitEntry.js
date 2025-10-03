// src/components/SubmitEntry.js
import React, { useEffect, useState } from "react";
import { storage, firestore, auth } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function SubmitEntry({ contestId }) {
  const user = auth.currentUser;
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [hasPaid, setHasPaid] = useState(false);
  const [paymentDoc, setPaymentDoc] = useState(null);

  useEffect(() => {
    if (!user || !contestId) return;
    const q = firestore.collection("payments")
      .where("userId", "==", user.uid)
      .where("contestId", "==", contestId)
      .where("status", "in", ["PAID", "MANUAL_VERIFIED"])
      .orderBy("createdAt", "desc")
      .limit(1);

    const unsub = q.onSnapshot(snap => {
      if (!snap.empty) {
        setPaymentDoc({ id: snap.docs[0].id, ...snap.docs[0].data() });
        setHasPaid(true);
      } else {
        setPaymentDoc(null);
        setHasPaid(false);
      }
    });

    return () => unsub();
  }, [user, contestId]);

  const uploadEntry = async () => {
    if (!user) return alert("Please log in to submit.");
    if (!hasPaid) return alert("Payment is required before submitting your entry.");
    if (!file) return alert("Please select a file to upload.");

    const allowed = ["image/jpeg","image/png","image/jpg","video/mp4","video/webm"];
    if (!allowed.includes(file.type)) return alert("Unsupported file type.");

    try {
      const fileRef = ref(storage, `entries/${contestId}/${user.uid}_${Date.now()}_${file.name}`);
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);

      await firestore.collection("entries").add({
        contestId,
        userId: user.uid,
        displayName: user.displayName || user.email,
        caption,
        fileUrl: url,
        votes: 0,
        score: 0,
        approved: false,
        paid: true,
        paymentId: paymentDoc ? paymentDoc.id : null,
        timestamp: new Date()
      });

      alert("Entry uploaded; pending admin approval.");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h3>Submit Entry</h3>
      {hasPaid ? <div>Payment verified (₹{paymentDoc.amount})</div> : <div>Please complete payment first.</div>}
      <input type="file" onChange={e=>setFile(e.target.files[0])} />
      <input placeholder="Caption" value={caption} onChange={e=>setCaption(e.target.value)} />
      <button onClick={uploadEntry} disabled={!hasPaid}>Submit Entry</button>
    </div>
  );
}

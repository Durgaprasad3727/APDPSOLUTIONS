// src/components/Voting.js
import React, { useEffect, useState } from "react";
import { firestore, auth } from "../firebase";
import firebase from "firebase/compat/app";

export default function Voting({ entryId, contestId }) {
  const [voted, setVoted] = useState(false);
  const user = auth.currentUser;

  useEffect(()=> {
    if (!user) return;
    const id = `${contestId}_${entryId}_${user.uid}`;
    firestore.collection("votes").doc(id).get().then(d=>setVoted(d.exists));
  },[entryId, contestId, user]);

  const handleVote = async () => {
    if (!user) { alert('Login to vote'); return; }
    if (voted) return;
    const voteId = `${contestId}_${entryId}_${user.uid}`;
    const voteRef = firestore.collection("votes").doc(voteId);
    const entryRef = firestore.collection("entries").doc(entryId);
    try {
      await firestore.runTransaction(async tx => {
        const v = await tx.get(voteRef);
        if (v.exists) throw new Error('Already voted');
        tx.set(voteRef, { userId:user.uid, entryId, contestId, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
        const en = await tx.get(entryRef);
        const cur = en.exists ? (en.data().votes||0) : 0;
        tx.update(entryRef, { votes: cur+1 });
      });
      setVoted(true);
    } catch (err) {
      alert(err.message);
    }
  };

  return <button onClick={handleVote} disabled={voted}>{voted ? 'Voted' : 'Vote'}</button>;
}

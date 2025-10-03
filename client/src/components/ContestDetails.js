// src/components/ContestDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore, auth } from "../firebase";
import PaymentButton from "./PaymentButton";
import SubmitEntry from "./SubmitEntry";
import Gallery from "./Gallery";
import Leaderboard from "./Leaderboard";

export default function ContestDetails(){
  const { id } = useParams();
  const [contest, setContest] = useState(null);
  const [userPaid, setUserPaid] = useState(false);

  useEffect(()=> {
    if (!id) return;
    firestore.collection('contests').doc(id).get().then(d=>setContest({id:d.id,...d.data()}));
    const u = auth.currentUser;
    if (u) {
      firestore.collection('payments').where('contestId','==',id).where('userId','==',u.uid).where('status','in',['PAID','MANUAL_VERIFIED']).get().then(s=>setUserPaid(!s.empty));
    }
  },[id]);

  if (!contest) return <div>Loading...</div>;
  return (
    <div>
      <h2>{contest.title}</h2>
      <PaymentButton contest={contest} />
      {userPaid ? <SubmitEntry contestId={id} /> : <div>Please pay to submit</div>}
      <Gallery contestId={id} />
      <Leaderboard contestId={id} />
    </div>
  );
}

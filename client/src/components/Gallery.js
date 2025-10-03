// src/components/Gallery.js
import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";
import Voting from "./Voting";

export default function Gallery({ contestId }) {
  const [entries, setEntries] = useState([]);
  useEffect(()=> {
    const q = firestore.collection("entries").where("contestId","==",contestId).where("approved","==",true).orderBy("votes","desc").limit(200);
    const unsub = q.onSnapshot(s=>setEntries(s.docs.map(d=>({id:d.id,...d.data()}))));
    return ()=>unsub();
  },[contestId]);
  return (
    <div>
      <h3>Gallery</h3>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:12}}>
        {entries.map(e=>(
          <div key={e.id} style={{border:'1px solid #eee',borderRadius:8,overflow:'hidden'}}>
            <img src={e.fileUrl} style={{width:'100%',height:160,objectFit:'cover'}} alt="" />
            <div style={{padding:8,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div><strong>{e.displayName}</strong><div style={{fontSize:12,color:'#666'}}>{e.caption}</div></div>
              <div><span style={{fontWeight:700}}>{e.votes||0}</span><div><Voting entryId={e.id} contestId={contestId} /></div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

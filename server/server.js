// server/server.js
const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const admin = require('firebase-admin');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({ verify: (req, res, buf) => { req.rawBody = buf } }));

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON))
});
const firestore = admin.firestore();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

app.post('/create-order', async (req, res) => {
  try {
    const { amount, userId, contestId } = req.body;
    const order = await razorpay.orders.create({ amount: Math.round(amount*100), currency: 'INR', receipt: `ct_${contestId}_${Date.now()}` });
    const paymentDoc = { userId, contestId, orderId: order.id, amount, method:'razorpay', status:'PENDING', createdAt: admin.firestore.FieldValue.serverTimestamp() };
    const docRef = await firestore.collection('payments').add(paymentDoc);
    res.json({ order, paymentId: docRef.id });
  } catch (err) {
    console.error(err); res.status(500).json({ error: err.message });
  }
});

app.post('/webhook', async (req, res) => {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  const signature = req.headers['x-razorpay-signature'];
  const expected = crypto.createHmac('sha256', secret).update(req.rawBody.toString()).digest('hex');
  if (expected !== signature) return res.status(400).send('invalid signature');

  const event = req.body;
  if (event.event === 'payment.captured' || event.event === 'order.paid') {
    const paymentEntity = event.payload.payment ? event.payload.payment.entity : null;
    const orderId = paymentEntity ? paymentEntity.order_id : null;
    const q = await firestore.collection('payments').where('orderId','==',orderId).limit(1).get();
    if (!q.empty) {
      const doc = q.docs[0];
      await doc.ref.update({ status:'PAID', paidAt: admin.firestore.FieldValue.serverTimestamp(), raw:event });
    }
  }
  res.json({ ok:true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log('Server listening', PORT));

// functions/index.js (Firebase Cloud Function webhook example)
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const crypto = require('crypto');
admin.initializeApp();
const firestore = admin.firestore();

exports.razorpayWebhook = functions.https.onRequest(async (req, res) => {
  const secret = functions.config().razorpay.webhook_secret;
  const signature = req.headers['x-razorpay-signature'];
  const body = JSON.stringify(req.body);
  const expected = crypto.createHmac('sha256', secret).update(body).digest('hex');
  if (expected !== signature) return res.status(400).send('Invalid signature');

  const event = req.body;
  if (event.event === 'payment.captured' || event.event === 'order.paid') {
    const payment = event.payload.payment ? event.payload.payment.entity : null;
    const orderId = payment ? payment.order_id : null;
    const q = await firestore.collection('payments').where('orderId','==',orderId).limit(1).get();
    if (!q.empty) {
      const doc = q.docs[0];
      await doc.ref.update({ status:'PAID', paidAt: admin.firestore.FieldValue.serverTimestamp(), razorpayPaymentId: payment.id });
    }
  }
  res.json({ ok:true });
});

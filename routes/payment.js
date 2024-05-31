import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config(); // Charger les variables d'environnement depuis le fichier .env

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2022-11-15' });

router.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post('/update-payment-intent', async (req, res) => {
    const { paymentIntentId, paymentMethodId } = req.body;
  
    try {
      const paymentIntent = await stripe.paymentIntents.update(paymentIntentId, {
        payment_method: paymentMethodId,
      });
      res.send(paymentIntent);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

router.post('/confirm-payment-intent', async (req, res) => {
  const { paymentIntentId } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);
    res.send(paymentIntent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/cancel-payment-intent', async (req, res) => {
  const { paymentIntentId } = req.body;

  try {
    const canceledPaymentIntent = await stripe.paymentIntents.cancel(paymentIntentId);
    res.send(canceledPaymentIntent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/get-payment-intent/:id', async (req, res) => {
  const paymentIntentId = req.params.id;

  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    res.send(paymentIntent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

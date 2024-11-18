import express from "express";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const checkoutRoute = express.Router();

checkoutRoute.post("/create-checkout-session", async (req, res) => {
  const { products } = req.body;

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.name,
      },
      unit_amount: product.price * 100,
    },
    quantity: product.itemcount,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "https://1mg-com-clone.vercel.app/",
    cancel_url: "https://1mg-com-clone.vercel.app/cancel",
  });

  res.json({ id: session.id });
});

export default checkoutRoute;

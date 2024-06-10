import express from 'express'
import cors from 'cors'
import Stripe from 'stripe'

const app = express(); //app is the instance of express
const stripe = new Stripe('sk_test_51NOvqGSAvExKFAjaTkSgqxNXs5WQ8TofJQrBOJIhdkFNDBKzqbWwMSYYzbsfP6ozzQ1n3sljsSbCVHYnMhcePzGz00PbYWzMiX');

app.use(cors());
app.use(express.json());

//http://localhost:2000
app.get('/',(req,res)=>{
    res.send("Hello from server")
})
app.get('/products',(req,res)=>{
    res.send("products")
})


app.post("/create-payment-intent", async (req, res) => {
    console.log(req.body)
  const { amount } = req.body; //50.00
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount*100, 
    currency: "inr",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

const PORT =  2000
app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}`));
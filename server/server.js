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


// const calculateOrderAmount = (items) => {
//   // Replace this constant with a calculation of the order's amount
//   // Calculate the order total on the server to prevent
//   // people from directly manipulating the amount on the client
//   return 1400;
// };

// app.post("/create-payment-intent", async (req, res) => {
//   const { items } = req.body;

//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: calculateOrderAmount(items),
//     currency: "inr",
//     // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });

//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

const PORT =  2000
app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}`));
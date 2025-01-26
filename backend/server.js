import './config/instrument.js'
import * as Sentry from "@sentry/node";
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import { clerkWebhooks } from './controllers/webHooks.controller.js';

// Initialize express
const app = express();

//Connect DataBase
await connectDB()

// Middleware to parse request body
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  return res.send('Api Working')
})

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.post('/webhooks', clerkWebhooks)

//Port
const port = process.env.PORT || 5000

Sentry.setupExpressErrorHandler(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);  // log the port where server is running
})
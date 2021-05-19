import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import usersRouter from './routes/users.js';

const app = express();
const env = dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

app.use(cors());
app.use(helmet());
app.use(express.json());

const CONNECTION_URL = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.9fyfw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.log(err.message));

app.use('/users', usersRouter);

app.get("/", (req, res) => {
  res.send("Running...");
});

// app.listen(PORT, () => console.log(`running on port ${PORT}`));

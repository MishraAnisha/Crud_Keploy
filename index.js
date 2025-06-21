import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userroutes.js";

dotenv.config(); // ✅ Load environment variables early

const app = express();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

// ✅ Middlewares
app.use(bodyParser.json()); // Parses JSON body
app.use(bodyParser.urlencoded({ extended: true })); // Optional: parses form data

// ✅ Routes
app.use("/api/user", route);

// ✅ MongoDB Connection
mongoose.connect(MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ Database connected successfully.");
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
})
.catch((error) => {
  console.error("❌ MongoDB connection error:", error);
});

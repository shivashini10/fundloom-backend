const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/user", userRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/fundloom")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// Routes
const campaignRoutes = require("./routes/campaignRoutes");
app.use("/api/campaign", campaignRoutes);

// Server
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
}); 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
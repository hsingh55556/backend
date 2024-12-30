const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());

const authRoutes = require("./routes/authRoutes");
const budgetRoutes = require("./routes/budgetRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/budget", budgetRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const tasksRoutes = require("./routes/tasks");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get("/ok", (req, res) => res.send("ok"));

app.use("/api/tasks", tasksRoutes);

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.log(`🚀 Backend listening on port ${PORT}`));

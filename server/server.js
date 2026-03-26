const express = require("express");
const cors = require("cors");
require("dotenv").config();

const videoRoutes = require("./routes/videoRoutes");

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());
app.use("/uploads", express.static("uploads"));

// routes
app.use("/api/video", videoRoutes);

app.listen(5005, () => {
  console.log("🚀 Server running on port 5005");
});
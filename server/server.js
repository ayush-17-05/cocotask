const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://cocotask:cocotask@cluster0.99ojnda.mongodb.net/",
);

const requestSchema = new mongoose.Schema({
  reference: String,
  name: String,
  phone: String,
  amountDue: Number,
  amountPaid: { type: Number, default: 0 },
  status: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now },
});

const Request = mongoose.model("Request", requestSchema);

app.post("/api/requests", async (req, res) => {
  const newRequest = new Request({
    reference: "REQ-" + Date.now(),
    ...req.body,
  });

  await newRequest.save();

  res.json(newRequest);
});

// GET REQUESTS
app.get("/api/requests", async (req, res) => {
  const requests = await Request.find().sort({ createdAt: -1 });

  res.json(requests);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let bookings = [];


app.get("/api/bookings", (req, res) => {
  res.json(bookings);
});


app.post("/api/bookings/create", (req, res) => {
  bookings.push(req.body);
  console.log("Booking Added:", req.body);
  res.json({ message: "Booking Added" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
}); 
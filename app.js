const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.static(__dirname + "/public/"));

//middleware
app.use(cors());
app.use(express.json());

//routes
const agentRoute = require("./Routes/v1/user.route");
const itineraryRoute = require("./Routes/v1/itinerary.route");

app.use("/api/v1/user", agentRoute);
app.use("/api/v1/itinerary", itineraryRoute);

app.get("/api/v1/customAPI", (req, res) => {
  res.redirect("https://www.youtube.com/embed/ZePa-xjzenc?si=UE2U67SDcsJ0hCY3");
});

module.exports = app;

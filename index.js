import express from "express";
import cors from "cors";
import CustomerRoute from "./routes/CustomerRoute.js";
import UserRoute from "./routes/UserRoute.js";
import RepairRoute from "./routes/RepairRoute.js";
// import TechnicianRoute from "./routes/TechnicianRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(CustomerRoute);
app.use(UserRoute);
app.use(RepairRoute);
// app.use(TechnicianRoute);

app.listen(5000, () => {
  console.log("running on port 5000");
});

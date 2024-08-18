import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
/* Route Import */
import dashboardRoutes from "./routes/dashboardRoutes";

/* Configurations */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* Routes */
app.use("/dashboard", dashboardRoutes);

/* Server */
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

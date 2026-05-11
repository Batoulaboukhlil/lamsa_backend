import express, { Request, Response } from "express";
import mongoose from "mongoose";
import User from "./models/User";
import serviceRoutes from "./routes/serviceRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import portfolioRoutes from "./routes/portfolioRoutes";
import companyRoutes from "./routes/companyRoutes";
import contactRoutes from "./routes/contactRoutes";
import serviceImageRoutes from "./routes/serviceImageRoutes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/lamsadb")
    .then(() => console.log("MongoDB connected"))
    .catch((err: Error) => console.log(err));

app.use("/api/services", serviceRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/service-images", serviceImageRoutes);


app.listen(3000, () => {
    console.log("Server running on port 3000");
});
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import User from "./models/User";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/lamsadb")
    .then(() => console.log("MongoDB connected"))
    .catch((err: Error) => console.log(err));

// routes
app.get("/", (req: Request, res: Response) => {
    res.send("API is running");
});

app.post("/users", async (req: Request, res: Response) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
});

app.get("/users", async (req: Request, res: Response) => {
    const users = await User.find();
    res.json(users);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
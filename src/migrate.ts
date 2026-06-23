import mongoose from "mongoose";
import User from "./models/User";

async function migrate() {
    const local = await mongoose.createConnection(
        "mongodb://localhost:27017/lamsa"
    ).asPromise();

    const atlas = await mongoose.createConnection(
        "mongodb+srv://lamsa_db_user:Cakaz.B123@lamsa.tbd4iqt.mongodb.net/?appName=lamsa"
    ).asPromise();

    const users = await local.collection("users").find().toArray();

    if (users.length) {
        await atlas.collection("users").insertMany(users);
    }

    console.log(`Migrated ${users.length} users`);
    process.exit(0);
}

migrate().catch(console.error);
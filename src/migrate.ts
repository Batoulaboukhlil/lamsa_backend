import mongoose from "mongoose";
import User from "./models/User";

async function migrate() {
    const local = await mongoose.createConnection(
        "mongodb://localhost:27017/lamsa"
    ).asPromise();

    const atlas = await mongoose.createConnection(
        "mongodb+srv://lamsa_db_user:Cakaz.B123@lamsa.tbd4iqt.mongodb.net/?appName=lamsa"
    ).asPromise();

    const collections = [
        "categories",
        "companyinfos",
        "contactrequests",
        "dresscollections",
        "portfolios",
        "serviceimages",
        "services",
        "users",
    ];

    for (const collectionName of collections) {
        const documents = await local.collection(collectionName).find().toArray();

        if (documents.length) {
            await atlas.collection(collectionName).insertMany(documents);
            console.log(`Migrated ${documents.length} documents to ${collectionName}`);
        } else {
            console.log(`No documents found in ${collectionName}`);
        }
    }
    console.log("Migrated successfully");
    process.exit(0);
}

migrate().catch(console.error);
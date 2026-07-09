import mongoose from "mongoose";
import User from "./models/User";

async function migrate() {

    const atlas = await mongoose.createConnection(
        process.env.MONGO_URI as string
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
        const documents = await atlas.collection(collectionName).find().toArray();

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
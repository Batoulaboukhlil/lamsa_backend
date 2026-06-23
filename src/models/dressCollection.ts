import mongoose, { Schema, Document } from "mongoose";

export interface IDressCollection extends Document {
    title: string;
    priceRange: string;
    cover: string;
    images: string[];
}

const DressCollectionSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        priceRange: { type: String, required: true },
        cover: { type: String, required: true },
        images: [{ type: String, required: true }],
    },
    { timestamps: true }
);

export default mongoose.model<IDressCollection>(
    "DressCollection",
    DressCollectionSchema
);
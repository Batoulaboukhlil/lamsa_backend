import mongoose, { Schema, Document } from "mongoose";

export interface IService extends Document {
    name: string;
    description: string;
    priceRange?: string;
    category: mongoose.Types.ObjectId;
    isActive: boolean;
}

const ServiceSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        priceRange: { type: String },
        category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export default mongoose.model<IService>("Service", ServiceSchema);
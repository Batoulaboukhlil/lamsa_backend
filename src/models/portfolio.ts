import mongoose, { Schema, Document } from "mongoose";

export interface IPortfolio extends Document {
    title: string;
    description: string;
    images: string[];
    date: Date;
}

const PortfolioSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String },
        images: [{ type: String }],
        date: { type: Date },
    },
    { timestamps: true }
);

export default mongoose.model<IPortfolio>("Portfolio", PortfolioSchema);
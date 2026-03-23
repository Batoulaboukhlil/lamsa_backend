import mongoose, { Schema, Document } from "mongoose";

export interface IServiceImage extends Document {
    service: mongoose.Types.ObjectId;
    imageUrl: string;
}

const ServiceImageSchema: Schema = new Schema(
    {
        service: { type: Schema.Types.ObjectId, ref: "Service", required: true },
        imageUrl: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model<IServiceImage>("ServiceImage", ServiceImageSchema);
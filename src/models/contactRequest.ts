import mongoose, { Schema, Document } from "mongoose";

export interface IContactRequest extends Document {
    name: string;
    phone: string;
    email?: string;
    message: string;
    service?: mongoose.Types.ObjectId;
}

const ContactRequestSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String },
        message: { type: String, required: true },
        service: { type: Schema.Types.ObjectId, ref: "Service" },
    },
    { timestamps: true }
);

export default mongoose.model<IContactRequest>(
    "ContactRequest",
    ContactRequestSchema
);
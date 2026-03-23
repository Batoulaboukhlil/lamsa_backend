import mongoose, { Schema, Document } from "mongoose";

export interface ICompanyInfo extends Document {
    name: string;
    phone: string;
    email?: string;
    address?: string;
    whatsapp?: string;
    facebook?: string;
    instagram?: string;
}

const CompanyInfoSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String },
        address: { type: String },
        whatsapp: { type: String },
        facebook: { type: String },
        instagram: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model<ICompanyInfo>(
    "CompanyInfo",
    CompanyInfoSchema
);
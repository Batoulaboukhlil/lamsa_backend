import { Request, Response } from "express";
import CompanyInfo from "../models/companyInfo";

export let createCompanyInfo = async (req: Request, res: Response) => {
    const existing = await CompanyInfo.findOne();
    if (existing) {
        return res.status(400).json({ message: "Company info already exists" });
    }

    const newInfo = new CompanyInfo(req.body);
    await newInfo.save();
    res.status(201).json(newInfo);
};


    export let deleteCompanyInfo = async (_: Request, res: Response) => {
    await CompanyInfo.deleteMany({});
    res.status(204).send();
};


    export const getCompanyInfo = async (_: Request, res: Response) => {
    const info = await CompanyInfo.findOne();
    res.json(info);
};

export const updateCompanyInfo = async (req: Request, res: Response) => {
    const updated = await CompanyInfo.findOneAndUpdate({}, req.body, {
        new: true,
        upsert: true,
    });

    res.json(updated);
};
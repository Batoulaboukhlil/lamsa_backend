import { Request, Response } from "express";
import Portfolio from "../models/portfolio";

export const getPortfolio = async (_: Request, res: Response) => {
    const data = await Portfolio.find();
    res.json(data);
};

export const createPortfolio = async (req: Request, res: Response) => {
    const item = new Portfolio(req.body);
    await item.save();
    res.status(201).json(item);
};
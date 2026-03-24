import { Request, Response } from "express";
import Category from "../models/category";

export const deleteCategory = async (req: Request, res: Response) => {
    const { id } = req.params;
    await Category.findByIdAndDelete(id);
    res.status(204).send();
}



export const getCategories = async (_: Request, res: Response) => {
    const data = await Category.find();
    res.json(data);
};

export const createCategory = async (req: Request, res: Response) => {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
};
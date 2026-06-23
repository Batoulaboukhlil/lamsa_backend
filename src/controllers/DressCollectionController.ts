import { Request, Response } from "express";
import DressCollection from "../models/dressCollection";

export const getDressCollections = async (_: Request, res: Response) => {
    try {
        const collections = await DressCollection.find();
        res.status(200).json(collections);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const getDressCollection = async (req: Request, res: Response) => {
    try {
        const collection = await DressCollection.findById(req.params.id);
        if (!collection) {
            return res.status(404).json({ message: "Dress collection not found" });
        }
        res.status(200).json(collection);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const createDressCollection = async (req: Request, res: Response) => {
    try {
        const collection = new DressCollection(req.body);
        await collection.save();
        res.status(201).json(collection);
    } catch (error) {
        res.status(400).json({ message: "Error creating dress collection" });
    }
};

export const updateDressCollection = async (req: Request, res: Response) => {
    try {
        const collection = await DressCollection.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!collection) {
            return res.status(404).json({ message: "Dress collection not found" });
        }       res.status(200).json(collection);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const deleteDressCollection = async (req: Request, res: Response) => {
    try {
        const collection = await DressCollection.findByIdAndDelete(req.params.id);
        if (!collection) {
            return res.status(404).json({ message: "Dress collection not found" });
        }
        res.status(200).json({ message: "Dress collection deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

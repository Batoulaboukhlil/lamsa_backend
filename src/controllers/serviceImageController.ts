import e, { Request, Response } from "express";
import Service from "../models/serviceImage";
import ServiceImage from "../models/serviceImage";

export let getServiceImage = async (req: Request, res: Response) => {
    try {
        const image = await Service.findById(req.params.id).populate("service");
        if (!image) {
            return res.status(404).json({message: "Service image not found"});
        }
        res.status(200).json(image);
    }
    catch (error) {
        res.status(500).json({message: "Service image not found"});
    }
    };


// GET ALL
export const getServiceImages = async (req: Request, res: Response) => {
    try {
        const images = await Service.find().populate("service");
        res.status(200).json(images);
    }
    catch (error) {
        res.status(500).json({message: "Something went wrong"});
    }
}

// POST ONE
export const createServiceImage = async (req: Request, res: Response) => {
    try {
        req.body.service = req.body.serviceId;
        if (!req.body.service) {
            return res.status(400).json({message: "Service ID is required"});
        }
        const newImage = new Service(req.body);
        await newImage.save();
        res.status(201).json(newImage);
    } catch (error) {
        res.status(400).json({message: "Something went wrong"});
    }
}

// DELETE ONE
export const deleteServiceImage = async (req: Request, res: Response) => {
    try {
        await ServiceImage.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Service deleted successfully"});
    }
    catch (error) {
        res.status(500).json({message: "Something went wrong"});
    }
}


import { Request, Response } from "express";
import Service from "../models/service";

// GET ALL
export const getServices = async (req: Request, res: Response) => {
    try {
        const services = await Service.find().populate("category");
        res.json(services);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching services" });
    }
};

// GET ONE
export const getServiceById = async (req: Request, res: Response) => {
    try {
        const service = await Service.findById(req.params.id).populate("category");
        if (!service) return res.status(404).json({ message: "Not found" });

        res.json(service);
    } catch (error) {
        res.status(500).json({ message: "Error fetching service" });
    }
};

// CREATE
export const createService = async (req: Request, res: Response) => {
    try {
        const newService = new Service(req.body);
        await newService.save();
        res.status(201).json(newService);
    } catch (error) {
        res.status(400).json({ message: "Error creating service" });
    }
};

// UPDATE
export const updateService = async (req: Request, res: Response) => {
    try {
        const updated = await Service.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: "Error updating service" });
    }
};

// DELETE
export const deleteService = async (req: Request, res: Response) => {
    try {
        await Service.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting" });
    }
};
import { Request, Response } from "express";
import ContactRequest from "../models/contactRequest";

export let getContact = async (req: Request, res: Response) => {
    const { id } = req.params;
    const contact = await ContactRequest.findById(id).populate("service");
    if (!contact) {
        return res.status(404).json({ message: "Contact request not found" });
    }
    res.json(contact);
};


export const createContact = async (req: Request, res: Response) => {
    try {
        const contact = new ContactRequest(req.body);
        await contact.save();

        res.status(201).json({ message: "Request sent successfully" });
    } catch (error) {
        res.status(400).json({ message: "Error sending request" });
    }
};

export const getContacts = async (_: Request, res: Response) => {
    const contacts = await ContactRequest.find().populate("service");
    res.json(contacts);
};
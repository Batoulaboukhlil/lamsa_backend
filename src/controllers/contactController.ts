import { Request, Response } from "express";
import ContactRequest from "../models/contactRequest";
import nodemailer from "nodemailer";

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
        const { name, email, serviceName, message,  } = req.body;

        const contact = new ContactRequest(req.body);
        await contact.save();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: email,
            to: "lamsa.party@gmail.com",
            subject: `New Contact Request from ${name}`,
            text: `
            You received a new message:
            
            Name: ${name}
            Email: ${email}
            Service name: ${serviceName}

            Message:
            ${message}
                  `,
        });

        res.status(201).json({
            message: "Request saved and email sent successfully",
        });

    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error sending request" });
    }
};

export const getContacts = async (_: Request, res: Response) => {
    const contacts = await ContactRequest.find().populate("service");
    res.json(contacts);
};
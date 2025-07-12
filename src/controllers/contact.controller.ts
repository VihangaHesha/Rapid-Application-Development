import {Request,Response} from "express";
import * as ContactService from "../services/contact.service"

export const getAllMessages = async (req:Request , res:Response) => {
    try {
       const messages = await ContactService.getAllMessages()
        res.status(200).json(messages)
    }catch (error) {
        console.error(error)
        res.status(500).json({
            error:'Something Went Wrong!!!'
        })
    }
}

export const saveMessage = async (req:Request,res:Response) => {
    try{
        const newMessage = req.body;
        const validateMessage = ContactService.validateContact(newMessage)
        if (validateMessage){
            res.status(400).json({error:validateMessage});
            return
        }
        const saveMessage = await ContactService.saveMessage(newMessage)
        res.status(201).json(saveMessage)
    }catch (error){
        console.error(error)
        res.status(500).json({
            error:'Something Went Wrong!!!'
        })
    }
}
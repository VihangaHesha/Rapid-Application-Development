import {contactDet} from "../db/db"
import {Contact} from "../model/contact.model";


export const getAllMessages = () : Contact[] => {
    return contactDet;
}

export const saveMessage = (contact : Contact) => {
    contactDet.push(contact)
    return "Your Message Have Been Saved!!!"
}

export const validateContact = (contact : Contact) => {
    if(!contact.email || !contact.message || !contact.subject){
        return "ALL FIELDS ARE REQUIRED!!!"
    }
    return null;
}
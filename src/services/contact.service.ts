import {contactDet} from "../db/db"
import Contact from "../model/contact.model"
import {ContactDto} from "../dto/contact.dto";
// import {Contact} from "../model/contact.model";

export const getAllMessages = async () :Promise <ContactDto[]> => {
    // return contactDet;
    return Contact.find()

}

export const saveMessage = (contact : ContactDto) => {
    // contactDet.push(contact)
    Contact.create(contact)
    return "Your Message Have Been Saved!!!"
}

export const validateContact = (contact : ContactDto) => {
    if(!contact.email || !contact.message || !contact.subject){
        return "ALL FIELDS ARE REQUIRED!!!"
    }
    return null;
}
import mongoose from "mongoose";

/*export interface Contact {
    email : string;
    subject : string;
    message : string
}*/

const ContactModel = new mongoose.Schema(
    {
        "email" : {
            required : true,
            type : String,
            unique : true,
            index : true
        },
        "subject" : {
            required : true,
            type : String
        },
        "message" : {
            required : true,
            type : String
        }
    }
);

const Contact = mongoose.model('Contact',ContactModel);
export default Contact;
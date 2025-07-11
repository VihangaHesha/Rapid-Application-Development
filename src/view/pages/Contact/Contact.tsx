// import "./Contact.css";
import {useForm} from "react-hook-form";
import type {ContactData} from "../../../model/ContactData.ts"
import {backendApi} from "../../../api.ts";

type FormData = {
    email: string;
    subject: string;
    message: string;
};

export function Contact() {
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

    const onSubmit = async (data: ContactData) => {
        /*console.log("Form submitted successfully:", data);
        alert(`Form submitted successfully for: ${data.subject} We will get back to you soon.`);
        window.location.reload();*/

        try {
            const response = await backendApi.post("/contact/save",data)
            console.log("Form Submitted Successfully",response.data)
            alert(`Form submitted successfully for: ${data.subject} We will get back to you soon.`);
            window.location.reload();
        }catch (error){
            console.error("Error submitting form:", error);
            alert("Failed to send message. Please try again.");
        }

    }

    return (
        <div className="font-sans bg-[#101010] text-white m-0 p-0">
            <div className="flex justify-center items-center px-5 py-16 min-h-screen bg-[#101010]">
                <form
                    className="bg-[#1A1A1A] border border-[#2c2c2c] rounded-xl p-10 max-w-[500px] w-full shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h2 className="text-3xl text-[#D4AF37] mb-3 text-center">Contact Us</h2>
                    <p className="text-[#bbbbbb] mb-7 text-[15px] text-center">
                        WE WOULD LOVE TO HEAR FROM YOU!
                    </p>

                    <div className="mb-6 w-full">
                        <label htmlFor="email" className="block mb-2 text-[#e0e0e0] text-sm">
                            Email:
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="!w-full p-3 mb-1 bg-transparent border border-[#333] rounded-lg text-white text-sm transition-all duration-300 placeholder-[#777] focus:border-[#D4AF37] focus:shadow-[0_0_6px_rgba(212,175,55,0.5)] focus:outline-none"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        {errors.email && (
                            <span className="text-[#ff4d4d] text-sm">{errors.email.message}</span>
                        )}
                    </div>

                    <div className="mb-6 w-full">
                        <label htmlFor="subject" className="block mb-2 text-[#e0e0e0] text-sm">
                            Subject:
                        </label>
                        <input
                            type="text"
                            placeholder="Enter the subject"
                            className="w-full p-3 mb-1 bg-transparent border border-[#333] rounded-lg text-white text-sm transition-all duration-300 placeholder-[#777] focus:border-[#D4AF37] focus:shadow-[0_0_6px_rgba(212,175,55,0.5)] focus:outline-none"
                            {...register("subject", {
                                required: "Subject is required",
                                pattern: {
                                    value: /^(?!\s*$).{3,100}$/i,
                                    message: "Invalid subject",
                                },
                            })}
                        />
                        {errors.subject && (
                            <span className="text-[#ff4d4d] text-sm">{errors.subject.message}</span>
                        )}
                    </div>

                    <div className="mb-6 w-full">
                        <label htmlFor="message" className="block mb-2 text-[#e0e0e0] text-sm">
                            Message:
                        </label>
                        <textarea
                            placeholder="Enter your message"
                            className="w-full p-3 mb-0 bg-transparent border border-[#333] rounded-lg text-white text-sm transition-all duration-300 placeholder-[#777] focus:border-[#D4AF37] focus:shadow-[0_0_6px_rgba(212,175,55,0.5)] focus:outline-none min-h-[120px] resize-y"
                            {...register("message", {
                                required: "Message is required",
                            })}
                        ></textarea>
                        {errors.message && (
                            <span className="text-[#ff4d4d] text-sm">{errors.message.message}</span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#D4AF37] text-[#101010] border-none p-3.5 text-base font-bold rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#e6c34a] hover:-translate-y-0.5"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}
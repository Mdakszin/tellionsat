import { ContactFormData } from "../schemas/contact";
import emailjs from "@emailjs/browser";

export const contactService = {
    submitContactMessage: async (data: ContactFormData): Promise<void> => {
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EmailJS configuration is missing. Please check your .env file.");
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: data.name,
                    email: data.email,
                    phone: data.phone || "Not provided",
                    childAge: data.childAge || "Not provided",
                    message: data.message,
                },
                publicKey
            );
        } catch (error) {
            console.error("Failed to send email:", error);
            throw error;
        }
    },
};

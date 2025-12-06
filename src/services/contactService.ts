import { ContactFormData } from "../schemas/contact";
import emailjs from "@emailjs/browser";

export const contactService = {
    submitContactMessage: async (data: ContactFormData): Promise<void> => {
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                console.error("EmailJS Env Check Failed:", {
                    hasServiceId: !!serviceId,
                    hasTemplateId: !!templateId,
                    hasPublicKey: !!publicKey
                });
                throw new Error("EmailJS configuration is missing. Please check your .env file.");
            }

            console.log("Sending email via EmailJS...", { serviceId, templateId });

            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: data.name,
                    email: data.email,
                    phone: data.phone || "Not provided",
                    childAge: data.childAge || "Not provided",
                    message: data.message,
                    to_email: "mdakszin@gmail.com",
                },
                publicKey
            );
            console.log("Email sent successfully!");
        } catch (error) {
            console.error("Failed to send email:", error);
            if ((error as any).text) {
                console.error("EmailJS Error Details:", (error as any).text);
            }
            throw error;
        }
    },
};

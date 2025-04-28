/* const EMAIL_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


export default async function sendEmail({ name, email, message }) {
  const emailData = {
    service_id: SERVICE_ID, 
    template_id: TEMPLATE_ID, 
    user_id: PUBLIC_KEY, 
    template_params: {
      name,
      email,
      message,
    },
  };

  try {
    const response = await fetch(EMAIL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailData),
    });

    // read the response body exactly once as JSON
    const data = await response.json();

    if (!response.Ok) {
      console.error(`EmailJS error ${response.status}:`, JSON.stringify(data));
      return null;
    }

    return data;
  } catch (error) {
    console.error("Network or parsing error sending email:", error);
    return null;
  }
}
 */
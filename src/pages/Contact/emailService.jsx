import { useEffect } from "react";
import usePost from "../../hooks/useFetch";

export default function AutoEmailSender() {
  const { postData, loading, error, response } = usePost();

  useEffect(() => {
    const sendAutoEmail = async () => {
      const url = "/api/contact"; 
      const autoMessage = {
        from_name: "Auto Bot",
        message: "This email was sent automatically when the page loaded!",
        reply_to: "moementurkmani@gmail.com",
      };

      await postData(url, autoMessage);
    };

    sendAutoEmail();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Auto Email Sender</h2>
      <p>If this page loaded, an email has been sent automatically via backend.</p>
      {loading && <p>Sending...</p>}
      {response && <p className="text-green-500">Auto-email sent successfully!</p>}
      {error && <p className="text-red-500">Failed to send auto-email.</p>}
    </div>
  );
}

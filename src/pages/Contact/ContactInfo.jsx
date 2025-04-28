// ContactInfo.jsx
import ContactItem from "./ContactItem";
import { Mail, Phone, MapPin } from "lucide-react";
import BusinessHours from "./BusinessHours";

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
      <div className="space-y-6">
        <ContactItem
          icon={<Mail className="w-6 h-6 text-blue-600 mr-4" />}
          title="Email"
          content="support@shophub.com"
        />
        <ContactItem
          icon={<Phone className="w-6 h-6 text-blue-600 mr-4" />}
          title="Phone"
          content="(555) 123-4567"
        />
        <ContactItem
          icon={<MapPin className="w-6 h-6 text-blue-600 mr-4" />}
          title="Address"
          content={
            <span>
              123 Shop Street
              <br />
              City, Country
            </span>
          }
        />
        <BusinessHours />
      </div>
    </div>
  );
}

import ContactItem from "./ContactItem";
import { Mail, Phone, MapPin } from "lucide-react";
import BusinessHours from "./BusinessHours";

export default function ContactInfo() {
  const defaultEmail = "support@shophub.com";
  const defaultPhone = "(555) 123-4567";
  const defaultAddress = "123 Shop Street, City, Country";

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
      <div className="space-y-6">
        <ContactItem
          icon={<Mail className="w-6 h-6 text-blue-600 mr-4" />}
          title="Email"
          content={
            <a
              href={`mailto:${defaultEmail}`}
              className="text-gray-600 hover:text-gray-800 no-underline"
              aria-label="Send an email"
            >
              {defaultEmail}
            </a>
          }
        />
        <ContactItem
          icon={<Phone className="w-6 h-6 text-blue-600 mr-4" />}
          title="Phone"
          content={
            <a
              href={`tel:${defaultPhone}`}
              className="text-gray-600 hover:text-gray-800 no-underline"
              aria-label="Call support"
            >
              {defaultPhone}
            </a>
          }
        />
        <ContactItem
          icon={<MapPin className="w-6 h-6 text-blue-600 mr-4" />}
          title="Address"
          content={
            <a
              href={`https://www.google.com/maps?q=${encodeURIComponent(defaultAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 no-underline"
              aria-label="View address on Google Maps"
            >
              {defaultAddress}
            </a>
          }
        />
        <BusinessHours />
      </div>
    </div>
  );
}

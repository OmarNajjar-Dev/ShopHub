/* eslint-disable react/prop-types */

export default function ContactItem({ icon, title, content }) {
  return (
    <div className="flex items-start">
      {icon}
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}

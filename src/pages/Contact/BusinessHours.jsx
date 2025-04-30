import { businessHours } from "../../data/businessHours";

export default function BusinessHours() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-6">Business Hours</h2>
      <div className="space-y-2">
        {businessHours.map(({ day, hours }, i) => (
          <p key={i}>
            <span className="font-medium">{day}:</span> {hours}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function MetricCard({ label, value }) {
  return (
    <div className="bg-white shadow rounded p-6 text-center">
      <h4 className="text-gray-500">{label}</h4>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

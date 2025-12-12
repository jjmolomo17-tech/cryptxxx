import chartPath from "../../data/chartStaticData";

export default function ChartVisual() {
  return (
    <div className="bg-white shadow rounded p-6">
      <h4 className="mb-4 font-semibold">BTC Price Visual</h4>
      <svg viewBox="0 0 200 200" className="w-full h-40 text-blue-600">
        <path d={chartPath} fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
    </div>
  );
}

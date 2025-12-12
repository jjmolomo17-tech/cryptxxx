import MetricCard from "../ui/MetricCard";
import ChartVisual from "../ui/ChartVisual";
import TransactionTable from "../ui/TransactionTable";

export default function MainContent() {
  return (
    <main className="flex-1 p-6 space-y-6 overflow-y-auto">
      <div className="grid md:grid-cols-3 gap-6">
        <MetricCard label="Total Profit" value="$12,500" />
        <MetricCard label="Market Cap" value="$350B" />
        <MetricCard label="BTC Holdings" value="1.7 BTC" />
      </div>
      <ChartVisual />
      <TransactionTable />
    </main>
  );
}

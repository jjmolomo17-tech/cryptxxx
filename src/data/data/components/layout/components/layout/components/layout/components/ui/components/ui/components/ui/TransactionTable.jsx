import transactions from "../../data/transactionData";

export default function TransactionTable() {
  return (
    <div className="bg-white shadow rounded p-6">
      <h4 className="mb-4 font-semibold">Transactions</h4>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">Date</th>
            <th className="py-2">Type</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(tx => (
            <tr key={tx.id} className="border-b hover:bg-gray-50">
              <td className="py-2">{tx.date}</td>
              <td className="py-2">{tx.type}</td>
              <td className="py-2">{tx.amount}</td>
              <td className="py-2">{tx.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

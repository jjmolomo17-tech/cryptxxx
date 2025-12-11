export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-6 hidden md:block">
      <h2 className="text-2xl font-bold mb-8">CryptX</h2>
      <nav className="space-y-4">
        <a href="#" className="block hover:text-blue-400">Dashboard</a>
        <a href="#" className="block hover:text-blue-400">Transactions</a>
        <a href="#" className="block hover:text-blue-400">Settings</a>
      </nav>
    </aside>
  );
}

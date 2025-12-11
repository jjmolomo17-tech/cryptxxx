export default function Header() {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Log Out
      </button>
    </header>
  );
}

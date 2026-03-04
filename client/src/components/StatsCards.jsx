export default function StatsCards({ requests }) {
  const pending = requests.filter((r) => r.status === "Pending").length;
  const partial = requests.filter((r) => r.status === "Partial").length;
  const paid = requests.filter((r) => r.status === "Paid").length;
  const failed = requests.filter((r) => r.status === "Failed").length;

  const stats = [
    { label: "Total Requests", value: requests.length },
    { label: "Pending", value: pending },
    { label: "Partial Payments", value: partial },
    { label: "Fully Paid", value: paid },
    { label: "Failed", value: failed },
  ];

  return (
    <div className="grid grid-cols-5 gap-4 my-6">
      {stats.map((s, i) => (
        <div key={i} className="bg-gray-50 p-4 rounded shadow">
          <p className="text-xl font-bold text-[#0f3460]">{s.value}</p>
          <p className="text-sm text-gray-500">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

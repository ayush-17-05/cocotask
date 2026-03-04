export default function RequestsTable({ requests }) {
  return (
    <div className="bg-white rounded shadow overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="p-3">Reference</th>
            <th>Customer</th>
            <th>Amount Due</th>
            <th>Amount Paid</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((r) => (
            <tr key={r.id} className="border-t">
              <td className="p-3 text-blue-900 font-semibold">{r.id}</td>

              <td>
                {r.name}
                <div className="text-xs text-gray-500">{r.phone}</div>
              </td>

              <td>₹ {r.amountDue}</td>

              <td>₹ {r.amountPaid}</td>

              <td>
                <span className="px-3 py-1 rounded text-xs bg-yellow-200">
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import { useState } from "react";

export default function NewRequestModal({ close, addRequest }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amountDue, setAmountDue] = useState("");

  const submit = () => {
    addRequest({
      name,
      phone,
      amountDue,
    });

    close();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-[400px]">
        <h2 className="text-lg font-bold mb-4">New Payment Request</h2>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Customer Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-3"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-3"
          placeholder="Amount"
          onChange={(e) => setAmountDue(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button onClick={close} className="px-4 py-2 border rounded">
            Cancel
          </button>

          <button
            onClick={submit}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

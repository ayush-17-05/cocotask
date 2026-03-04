import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import StatsCards from "../components/StatsCards";
import RequestsTable from "../components/RequestsTable";
import NewRequestModal from "../components/NewRequestModal";
import axios from "axios";

export default function CollectPayments() {
  const [requests, setRequests] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const res = await axios.get("https://cocotask.onrender.com/api/requests");
      setRequests(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addRequest = async (data) => {
    try {
      await axios.post("https://cocotask.onrender.com/api/requests", data);
      fetchRequests();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-[#1a1a2e]">Collect Payments</h1>

          <button
            onClick={() => setOpenModal(true)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            + New Request
          </button>
        </div>

        <StatsCards requests={requests} />

        <RequestsTable requests={requests} />
      </div>

      {openModal && (
        <NewRequestModal
          close={() => setOpenModal(false)}
          addRequest={addRequest}
        />
      )}
    </div>
  );
}

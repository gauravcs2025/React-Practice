import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

export default function QueueForm({ onAdd }) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // FIXED LOGIC: Stop if name OR service is empty
    if (!name.trim() || !service.trim()) {
      return;
    }

    // Process data
    onAdd({ name, service });

    // Reset form
    setName("");
    setService("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Add To Queue</h2>
          <p className="text-sm text-gray-500 mt-1">
            Enter customer details below
          </p>
        </div>

        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Customer Name
          </label>
          <input
            placeholder="e.g. John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          />
        </div>

        {/* Service Select */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Required
          </label>
          <div className="relative">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 cursor-pointer"
            >
              <option value="" disabled>
                Select a Service
              </option>
              <option value="Consultance">Consultation</option>
              <option value="Payment">Payment</option>
              <option value="Support">Support</option>
            </select>
            {/* Custom Arrow Icon for Select */}
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform active:scale-95"
        >
          <FaUserPlus className="text-lg" />
          <span>Add Customer</span>
        </button>
      </form>
    </div>
  );
}

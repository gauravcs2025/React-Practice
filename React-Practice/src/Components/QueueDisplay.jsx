import { FaCheckCircle, FaTrash, FaClock } from "react-icons/fa";

export default function QueueDisplay({ queue, onUpdate, onRemove }) {
  if (queue.length === 0) {
    return (
      <div className="bg-white p-10 rounded-xl shadow-md text-center border border-gray-200">
        <div className="text-gray-300 text-6xl mb-4 flex justify-center">
          <FaClock />
        </div>
        <h3 className="text-xl font-semibold text-gray-600">Queue is Empty</h3>
        <p className="text-gray-400">Add a customer to get started.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header for the list */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold text-gray-800">Current Queue</h2>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
          {queue.length} Pending
        </span>
      </div>

      {/* List of Customers */}
      {queue.map((customer) => (
        <div
          key={customer.id}
          className={`flex flex-col sm:flex-row justify-between items-center p-4 rounded-lg shadow-sm border-l-4 transition-all duration-200 ${
            customer.status === "Completed"
              ? "bg-green-50 border-green-500 opacity-75"
              : "bg-white border-blue-500 hover:shadow-md"
          }`}
        >
          {/* Customer Info */}
          <div className="mb-3 sm:mb-0">
            <h3 className="text-lg font-bold text-gray-800">{customer.name}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="font-medium bg-gray-100 px-2 py-0.5 rounded">
                {customer.service}
              </span>
              <span>•</span>
              <span
                className={`${
                  customer.status === "Waiting"
                    ? "text-orange-500"
                    : "text-green-600"
                } font-medium`}
              >
                {customer.status}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            {customer.status !== "Completed" && (
              <button
                onClick={() => onUpdate(customer.id, "Completed")}
                className="flex items-center gap-1 px-3 py-1.5 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition text-sm font-medium"
              >
                <FaCheckCircle /> Serve
              </button>
            )}

            <button
              onClick={() => onRemove(customer.id)}
              className="flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition text-sm font-medium"
            >
              <FaTrash /> Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

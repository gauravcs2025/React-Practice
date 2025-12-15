import React, { useState } from "react";
import QueueForm from "./Components/QueueForm"; // Ensure path is correct
import QueueDisplay from "./Components/QueueDisplay"; // Ensure path is correct

function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue([...queue, { ...customer, id: Date.now(), status: "Waiting" }]);
  };

  const updateStatus = (id, newStatus) => {
    setQueue(
      queue.map((customer) =>
        // BUG FIX: Added 'return' implicitly and fixed variable name case (Customer vs customer)
        customer.id === id ? { ...customer, status: newStatus } : customer
      )
    );
  };

  const removeFromQueue = (id) => {
    setQueue(queue.filter((customer) => customer.id !== id));
  };

  return (
    // Main Container: Light gray bg, min-height screen
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Header Section */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-extrabold text-blue-900 tracking-tight">
            Customer Queue <span className="text-blue-600">Manager</span>
          </h1>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Form (Takes 1 part) */}
          <div className="lg:col-span-1">
            <QueueForm onAdd={addToQueue} />
          </div>

          {/* Right Column: Display List (Takes 2 parts) */}
          <div className="lg:col-span-2">
            {/* PASSING PROPS: Essential for the display to work */}
            <QueueDisplay
              queue={queue}
              onUpdate={updateStatus}
              onRemove={removeFromQueue}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

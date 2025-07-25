import React from "react";

function Instructions({ value, onChange }) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Instructions
      </label>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Enter your research instructions"
        className="w-full p-3 border border-gray-300 rounded-md min-h-[120px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default Instructions;




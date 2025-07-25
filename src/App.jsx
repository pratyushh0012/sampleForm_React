import React, { useState } from "react";
import Instructions from "./Instructions";
import confetti from 'canvas-confetti';


function App() {
  const [instructions, setInstructions] = useState("");

  const handleSubmit = () => {
    confetti({
      particleCount: 1500,
      spread: 700,
      origin: {y: 0.6 }
    });

    console.log("Submitted:", instructions);

  setInstructions("");

  };
  

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md space-y-6">
    
          <h1 className="text-2xl font-semibold">Web Research Agent</h1>

    
          <div>
            <h2 className="text-lg font-medium mb-1">Action</h2>
            <p className="text-sm text-gray-600">
              Automate web research with AI Web Research Agent to find and extract relevant data from
              multiple sources. Great for market analysis, lead research, and competitive tracking.
            </p>
          </div>

          <Instructions value={instructions} onChange={setInstructions} />

          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 text-sm"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

import React from 'react';

function TestApp() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI School Launch Control Center
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Testing deployment - if you see this, React is working!
        </p>
        <div className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block">
          System Status: Online ✅
        </div>
      </div>
    </div>
  );
}

export default TestApp;
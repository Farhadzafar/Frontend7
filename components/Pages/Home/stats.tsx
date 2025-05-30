import React from "react";

export default function Stats() {
  return (
    <div className="py-16 islamic-pattern">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-4xl font-bold text-primary mb-2">50,000+</h3>
          <p className="text-gray-600">Questions Answered</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
          <p className="text-gray-600">Verified Scholars</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-4xl font-bold text-primary mb-2">1M+</h3>
          <p className="text-gray-600">Monthly Visitors</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-4xl font-bold text-primary mb-2">5</h3>
          <p className="text-gray-600">Languages</p>
        </div>
      </div>
    </div>
  );
}

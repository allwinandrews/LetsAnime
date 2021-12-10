import React from "react";

export default function Card({ children }) {
  console.log("Card");

  return (
    <div className="bg-yellow-200">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {children}
      </div>
    </div>
  );
}

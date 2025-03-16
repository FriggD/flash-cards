import React from 'react';
// Removed styled-components import

function FlashCard({frente, verso, area, categoria}) {
  return (
    <div className="min-h-screen bg-[#2B2D42] p-8">
      {frente && verso && area && categoria ? (
        <div className="grid grid-cols-1 sm:grid-cols-auto-fill-280 gap-8 p-4">
          <div className="bg-white rounded-lg p-6 shadow-md transform transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
            <div>{area}/{categoria}</div>
            <h2 className="text-[#2B2D42] mb-4 text-xl">{frente}</h2>
            <div>{verso}</div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default FlashCard;
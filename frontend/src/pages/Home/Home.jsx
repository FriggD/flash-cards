import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlashCard from '../../components/FlashCard/FlashCard';

function Home() {
  const [cards, setCards] = useState([
    {
      frente: 'What is React?',
      verso: 'A JavaScript library for building user interfaces',
      area: 'Programming',
      categoria: 'Frontend',
    },
    // Add more cards as needed
  ]);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#2B2D42] p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-white text-2xl md:text-3xl">FlashCards</h1>
        <button
          onClick={() => {/* TODO: Handle logout */}}
          className="bg-[#6B4E71] text-white px-4 py-2 rounded hover:bg-[#9B6B9D] transition-colors"
        >
          Logout
        </button>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <FlashCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Home;
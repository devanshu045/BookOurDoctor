import React from 'react';
import './Fastbook.css'; // Import your CSS file

const Fastbook = () => {
  const cards = [
    {
      id: 1,
      image: 'image1.jpg',
      heading: 'Card 1',
      note: 'This is the first card.',
    },
    {
      id: 2,
      image: 'image2.jpg',
      heading: 'Card 2',
      note: 'This is the second card.',
    },
    {
      id: 3,
      image: 'image3.jpg',
      heading: 'Card 3',
      note: 'This is the third card.',
    },
    {
      id: 4,
      image: 'image4.jpg',
      heading: 'Card 4',
      note: 'This is the fourth card.',
    },
    {
      id: 5,
      image: 'image5.jpg',
      heading: 'Card 5',
      note: 'This is the fifth card.',
    },
  ];

  return (
    <div className="card-list">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.image} alt={card.heading} />
          <h2 className='cart-h2'>{card.heading}</h2>
          <p className='cart-p'>{card.note}</p>
          <button className='btn-cart'>Click on Card</button>
        </div>
      ))}
    </div>
  );
};

export default Fastbook;

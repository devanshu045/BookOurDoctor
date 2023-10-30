import React from 'react';
import './Faclities.css'; // Make sure to import your CSS file

const Faclities = () => {
  const facilities = [
    {
      id: 1,
      imageSrc: 'image1.jpg',
      heading: 'Facility 1',
      description: 'Description for Facility 1',
    },
    {
      id: 2,
      imageSrc: 'image2.jpg',
      heading: 'Facility 2',
      description: 'Description for Facility 2',
    },
    {
      id: 3,
      imageSrc: 'image3.jpg',
      heading: 'Facility 3',
      description: 'Description for Facility 3',
    },
    {
      id: 4,
      imageSrc: 'image4.jpg',
      heading: 'Facility 4',
      description: 'Description for Facility 4',
    },
    {
      id: 5,
      imageSrc: 'image5.jpg',
      heading: 'Facility 5',
      description: 'Description for Facility 5',
    },
  ];

  const handleCartClick = (id) => {
    // Handle click event for the cart item with the given ID
    console.log(`Clicked on Facility ${id}`);
  };

  return (
    <div className="facility-container">
      {facilities.map((facility) => (
        <div
          key={facility.id}
          className={`facility-cart facilities-${facility.id}`}
          onClick={() => handleCartClick(facility.id)}
        >
          <img src={facility.imageSrc} alt={facility.heading} />
          <h2>{facility.heading}</h2>
          <p>{facility.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Faclities;

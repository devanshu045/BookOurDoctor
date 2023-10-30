import React, { useState } from 'react';
import './Reviewsection.css'

const reviewsData = [
  {
    author: 'John Doe',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    author: 'Jane Smith',
    comment: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  // Add more review objects here
];

const Reviewsection = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  };

  const handlePrevClick = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="review-section">
      <div className="review-card">
        <p className="review-comment">{reviewsData[currentReviewIndex].comment}</p>
        <p className="review-author">- {reviewsData[currentReviewIndex].author}</p>
      </div>
      <div className="review-buttons">
        <button className='review-btn' onClick={handlePrevClick}>&#9664; Previous</button>
        <button className='review-btn' onClick={handleNextClick}>Next &#9654;</button>
      </div>
    </div>
  );
};

export default Reviewsection;

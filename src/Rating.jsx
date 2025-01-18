import React, { useState } from 'react';

function Rating() {
  const [selectedRating, setSelectedRating] = useState(null); // To store the selected rating
  const [submitted, setSubmitted] = useState(false); // To check if rating is submitted

  // Handle rating selection
  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  // Handle form submission
  const handleSubmit = () => {
    if (selectedRating !== null) {
      setSubmitted(true);
    }
  };

  return (
    <div className="Rating-component">
      {!submitted ? (
        <div className="Rating-content">
          <div className="circle">
            <img src="/images/icon-star.svg" alt="star-icon" />
          </div>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
          </p>
         
          <div className="rate">
            {[1, 2, 3, 4, 5].map((rating) => (
              <span
                key={rating}
                className={`circle ${selectedRating === rating ? 'selected' : ''}`}
                onClick={() => handleRatingClick(rating)}
              >
                {rating}
              </span>
            ))}
          </div>

          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div className="Rating-content Thank-u-contnet">
          <div>
            <img src="/images/illustration-thank-you.svg" alt="star-icon" />
          </div>
          <p className='U-selected'>You selected {selectedRating} out of 5</p>
          <h1>Thank You!</h1>
          <p>  We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!
</p>
        </div>
      )}
    </div>
  );
}

export default Rating;

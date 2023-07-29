import React from 'react';
import PropTypes from 'prop-types';
import './GreetingCard.css'; // Import the CSS file for the component

const GreetingCard = ({ title, message, backgroundColor, textColor }) => {
  const cardStyle = {
    backgroundColor: backgroundColor || '#f0f0f0',
    color: textColor || '#333',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    maxWidth: '400px',
    margin: 'auto',
  };

  return (
    <div className="GreetingCard" style={cardStyle}>
      {title && <h2>{title}</h2>}
      <p>{message}</p>
    </div>
  );
};

GreetingCard.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default GreetingCard;

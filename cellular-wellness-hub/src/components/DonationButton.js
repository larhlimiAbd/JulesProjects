import React from 'react';

const DonationButton = ({ donationLink }) => {
  return (
    <a href={donationLink} target="_blank" rel="noopener noreferrer">
      <button>Faire un don</button>
    </a>
  );
};

export default DonationButton;

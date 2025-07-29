import React from 'react';
import { InlineWidget } from 'react-calendly';

const BookingWidget = () => {
  return (
    <div>
      <InlineWidget url="https://calendly.com/YOUR_USERNAME" />
    </div>
  );
};

export default BookingWidget;

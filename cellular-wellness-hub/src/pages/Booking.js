import React from 'react';
import { useTranslation } from 'react-i18next';
import BookingWidget from '../components/BookingWidget';

const Booking = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('booking.title')}</h1>
      <BookingWidget />
    </div>
  );
};

export default Booking;

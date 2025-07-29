import React from 'react';
import { useTranslation } from 'react-i18next';
import BookingWidget from '../components/BookingWidget';
import { Link } from 'react-router-dom';

const Booking = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('booking.title')}</h1>
      <p>{t('booking.reminder')}</p>
      <h2>{t('booking.guide_title')}</h2>
      <ol>
        <li>{t('booking.guide_step_1')}</li>
        <li>{t('booking.guide_step_2')}</li>
        <li>{t('booking.guide_step_3')}</li>
      </ol>
      <BookingWidget />
      <p>
        {t('booking.questions_help')}
        <Link to="/contact"> {t('contact.title')}</Link>
      </p>
    </div>
  );
};

export default Booking;

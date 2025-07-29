import React from 'react';
import { useTranslation } from 'react-i18next';
import DonationButton from '../components/DonationButton';

const Donations = () => {
  const { t } = useTranslation();
  const donationLink = "https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID"; // Remplacer par votre lien de don

  return (
    <div>
      <h1>{t('donations.title')}</h1>
      <DonationButton donationLink={donationLink} />
    </div>
  );
};

export default Donations;

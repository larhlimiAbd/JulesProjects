import React from 'react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('services.title')}</h1>
      {/* Le reste du contenu de la page Services ici */}
    </div>
  );
};

export default Services;

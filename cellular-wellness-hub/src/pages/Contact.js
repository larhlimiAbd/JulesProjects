import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('contact.title')}</h1>
      {/* Le reste du contenu de la page Contact ici */}
    </div>
  );
};

export default Contact;

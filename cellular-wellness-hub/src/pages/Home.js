import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('home.title')}</h1>
      {/* Le reste du contenu de la page d'accueil ici */}
    </div>
  );
};

export default Home;

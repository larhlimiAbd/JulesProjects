import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('home.title')}</h1>
      <h2>{t('home.intro_headline')}</h2>
      <p>{t('home.intro_body')}</p>
      <Link to="/booking">
        <button>{t('home.book_discovery_call')}</button>
      </Link>
      <p>{t('home.book_discovery_call_description')}</p>
      <Link to="/services">
        <button>{t('home.explore_services')}</button>
      </Link>
      <p>{t('home.explore_services_description')}</p>
    </div>
  );
};

export default Home;

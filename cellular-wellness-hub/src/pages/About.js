import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('about.title')}</h1>
      <p>{t('about.mission_body_1')}</p>
      <p>{t('about.mission_body_2')}</p>
      <p>{t('about.mission_body_3')}</p>
      <p>{t('about.mission_closing')}</p>
      <h2>{t('about.meet_fj_headline')}</h2>
      <p>{t('about.meet_fj_body')}</p>
    </div>
  );
};

export default About;

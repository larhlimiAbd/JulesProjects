import React from 'react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('services.title')}</h1>

      <h2>{t('services.star_magic_healing_title')}</h2>
      <p>{t('services.star_magic_healing_body')}</p>

      <h2>{t('services.access_consciousness_title')}</h2>
      <p>{t('services.access_consciousness_body')}</p>

      <h2>{t('services.reiki_healing_title')}</h2>
      <p>{t('services.reiki_healing_body')}</p>

      <h2>{t('services.lymphatic_drainage_title')}</h2>
      <p>{t('services.lymphatic_drainage_body')}</p>

      <h2>{t('services.health_wellness_coaching_title')}</h2>
      <p>{t('services.health_wellness_coaching_body')}</p>
    </div>
  );
};

export default Services;

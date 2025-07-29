import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('contact.title')}</h1>
      <p>{t('contact.intro')}</p>
      <form>
        <label htmlFor="name">{t('contact.form_name')}</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">{t('contact.form_email')}</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="subject">{t('contact.form_subject')}</label>
        <input type="text" id="subject" name="subject" />

        <label htmlFor="message">{t('contact.form_message')}</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">{t('contact.form_submit')}</button>
      </form>
      <p>{t('contact.privacy_notice')}</p>
    </div>
  );
};

export default Contact;

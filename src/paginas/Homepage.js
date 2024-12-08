import React from 'react';
import './homepage.css';
import { useTranslation } from 'react-i18next';

const Homepage = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="homepage-container">
      <header className="header-content">
        <h1>{t('homepage.welcome')}</h1>
        <p>{t('homepage.flavor')}</p>
        <button className="cta-button">{t('homepage.button')}</button>
      </header>
    </div>
  );
};

export default Homepage;
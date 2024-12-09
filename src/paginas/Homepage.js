import React from 'react';
import './homepage.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const Homepage = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="homepage-container">
      <header className="header-content">
        <h1>{t('homepage.welcome')}</h1>
        <p>{t('homepage.flavor')}</p>
        <button className="cta-button">
            <Link to="/adulto-mayor">{t('homepage.button')}</Link>
        </button>
      </header>
    </div>
  );
};

export default Homepage;
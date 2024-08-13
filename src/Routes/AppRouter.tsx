import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import Instructions from '../components/Instructions';
import { I18nextProvider } from 'react-i18next';
import i18n from '../localization/pagelocalization';

const AppRouter: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
};

export default AppRouter;

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import i18n from '../localization/pagelocalization'; // Ensure this is the correct path

const Header: React.FC = () => {
  const { t } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang); // Store language preference in local storage
  };

  return (
    <>
      <Row className="justify-content-center">
        <Col xs="auto">
          <h1>{t('title')}</h1>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col xs="auto" className="header-text-center text-center">
          <img src='./assets/image.png' height={68} width={173} alt="Xamk Logo" />
        </Col>
        <Col xs="auto">
          <DropdownButton id="dropdown-basic-button" title={i18n.language.toUpperCase()}>
            <Dropdown.Item
              className={i18n.language === 'fi' ? 'selected' : ''}
              onClick={() => changeLanguage('fi')}
            >
              FI
            </Dropdown.Item>
            <Dropdown.Item
              className={i18n.language === 'en' ? 'selected' : ''}
              onClick={() => changeLanguage('en')}
            >
              EN
            </Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
    </>
  );
};

export default Header;

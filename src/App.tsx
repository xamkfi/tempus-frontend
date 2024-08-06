import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import FinGridCalculation from './components/FinGridCalculation';
import DirectiveCalculation from './components/DirectiveCalculation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Header from './components/Header'; // Import the Header component
import InfoBox from './components/InfoBox'; // Import the InfoBox component
import ButtonGroup from './components/ButtonGroup'; // Import the ButtonGroup component
import Footer from './components/Footer'; // Import the Footer component

const App: React.FC = () => {
  const [activeService, setActiveService] = useState<string>('fingrid');
  const { t } = useTranslation();

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('electricityPriceFormState');
      localStorage.removeItem('filterFormState');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const renderService = () => {
    switch (activeService) {
      case 'fingrid':
        return <FinGridCalculation />;
      case 'consumption':
        return <DirectiveCalculation />;
      default:
        return <FinGridCalculation />;
    }
  };

  return (
    <div className="App">
      <Container fluid>
        <Header />
        <InfoBox />
        <ButtonGroup activeService={activeService} setActiveService={setActiveService} />
        <Row className="justify-content-center">
          <Col md={8}>
            {renderService()}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;

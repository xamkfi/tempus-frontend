import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Button } from 'react-bootstrap';

interface ButtonGroupProps {
  activeService: string;
  setActiveService: (service: string) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ activeService, setActiveService }) => {
  const { t } = useTranslation();

  return (
    <Row className="button-group justify-content-center">
      <Col className="d-flex justify-content-center mb-2">
        <Button
          variant={activeService === 'fingrid' ? 'primary' : 'secondary'}
          onClick={() => setActiveService('fingrid')}
          className={`btn-service ${activeService === 'fingrid' ? 'active' : ''}`}
        >
          {t('uploadFile')}
        </Button>
        <Button
          variant={activeService === 'consumption' ? 'primary' : 'secondary'}
          onClick={() => setActiveService('consumption')}
          className={`btn-service ${activeService === 'consumption' ? 'active' : ''}`}
        >
          {t('estimateConsumption')}
        </Button>
      </Col>
    </Row>
  );
};

export default ButtonGroup;
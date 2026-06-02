import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Button } from 'react-bootstrap';

interface InfoBoxProps {
  onGoToCalculator: () => void;
}

const InfoBox = ({ onGoToCalculator }: InfoBoxProps) => {
  const { t } = useTranslation();

  return (
    <Row className="justify-content-center">
      <Col md={8}>
        <div className="info-box">
          <h3 className='info-title' dangerouslySetInnerHTML={{ __html: t('description') }} />
          <br />
          <div className='info-text-container'>
            <div className='info-text' dangerouslySetInnerHTML={{ __html: t('info1') }} />
            <div className='info-text' dangerouslySetInnerHTML={{ __html: t('info2') }} />
            <div className='info-text info-text-calculator'>
              <div dangerouslySetInnerHTML={{ __html: t('info3') }} />
              <p className="info-text-below">{t('info3Below')}</p>
              <Button
                type="button"
                className="info-calculator-jump-btn"
                onClick={onGoToCalculator}
              >
                {t('goToCalculator')}
              </Button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default InfoBox;

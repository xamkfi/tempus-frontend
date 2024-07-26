import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';

const InfoBox: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Row className="justify-content-center">
      <Col>
        <div className="info-box">
          <h3 dangerouslySetInnerHTML={{ __html: t('description') }} />
          <br />
          <div className='info-text-container'>
            <div className='info-text' dangerouslySetInnerHTML={{ __html: t('info1') }} />
            <div className='info-text' dangerouslySetInnerHTML={{ __html: t('info2') }} />
            <div className='info-text' dangerouslySetInnerHTML={{ __html: t('info3') }} />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default InfoBox;
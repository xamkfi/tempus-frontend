import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';

const SOLAR_BATTERY_APP_URL =
  'https://solar-battery-app-fsbbaygsbhd2a7cu.germanywestcentral-01.azurewebsites.net/';

const SolarBatteryPromo = () => {
  const { t } = useTranslation();

  return (
    <Row className="justify-content-center">
      <Col md={8}>
        <section className="solar-battery-promo">
          <h3 className="solar-battery-promo-title">{t('solarBatteryTitle')}</h3>

          <div className="solar-battery-info-panel">
            <p>{t('solarBatteryDescription')}</p>
            <p className="solar-battery-project-credit">
              <em>{t('solarBatteryProjectCredit')}</em>
            </p>
            <div className="solar-battery-eu-funding">
              <div className="solar-battery-eu-badge" aria-hidden="true">
                <svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
                  <rect width="60" height="40" fill="#003399" />
                  <g fill="#FFCC00">
                    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
                      <circle
                        key={angle}
                        cx={30 + 12 * Math.cos((angle * Math.PI) / 180)}
                        cy={20 + 12 * Math.sin((angle * Math.PI) / 180)}
                        r="1.8"
                      />
                    ))}
                  </g>
                </svg>
              </div>
              <span>{t('solarBatteryEuFunding')}</span>
            </div>
          </div>

          <a
            className="solar-battery-link-box"
            href={SOLAR_BATTERY_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('solarBatteryLinkLabel')}
          </a>
        </section>
      </Col>
    </Row>
  );
};

export default SolarBatteryPromo;

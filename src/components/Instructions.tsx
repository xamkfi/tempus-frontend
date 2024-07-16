import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/instructions.css';

const Instructions: React.FC = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <div className="instructions">
            <div className="instruction-step">
            <p>Siirry  
            <a href="#" onClick={(event) => {
            event.preventDefault();
            window.open("https://oma.datahub.fi/#/login?returnUrl=%2F", "_blank");
            }}> Fingrid asiakas portaaliin </a> ja kirjaudu sisään
            </p>
            <img src="./assets/FinGridLogIn.png" alt="Fingrid login" />
            </div>
            
            <div className="instruction-step">
                <p>Valitse kiinteistö, jonka sähkönkulutusta haluat seurata</p>
                <img src="./assets/selectAddressEdited.png" alt="Fingrid Energy Report" />
            </div>
            <div className="instruction-step">
                <p>Valitse <b>Energy Reporting</b> ja siirry <b>Download Information</b> ikkunaan</p>
                <img src="./assets/selectNrG&DownloadInformation.png" alt="Fingrid Energy Report" />
            </div>
            <div className="instruction-step">
                <p>Valitse haluamasi aikaväli ja kiinteistö</p>
                <img src="./assets/selectDateAndAccountingPointEdited.png" alt="Fingrid Energy Report" />
            </div>
            <div className="instruction-step">
                <p>Paina <b>Download</b> painiketta. Tämä lataa <b>sähkönkulutustiedoston</b> laitteellesi, jonka voit asettaa laskuriin</p>
            </div>
            <div className="instruction-step">
                <p><b>Ethän tee muutoksia</b> tiedostoon, se voi vaikuttaa laskentaan!</p>
            </div>
            <button className="back-button" onClick={handleBackClick}>Takaisin laskuriin </button>
        </div>
    );
};

export default Instructions;

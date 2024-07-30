import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "title": "Tempus Electrica",
      "description": "Tempus Electrica is a service that allows you to monitor pricing between Fixed and Exchange electricity",
      "info1": "In the service, you can view your own consumption and its cost by <b>uploading your own electricity consumption file</b><br />",
      "info2": "We will tell you which one suits you better, <br /><b>Fixed or Exchange electricity</b>",
      "info3": "Alternatively, you can also estimate your electricity consumption with the <b>calculator</b>",
      "uploadFile": "Upload consumption file",
      "estimateConsumption": "Estimate your electricity consumption",
      "instructions": "Instructions",
      "instructionsTitle": "Instructions",
      "step1": "Go to the <a href=\"#\" onClick=\"(event) => { event.preventDefault(); window.open('https://oma.datahub.fi/#/login?returnUrl=%2F', '_blank'); }\"> Fingrid customer portal </a> and log in",
      "step1ImgAlt": "Fingrid login",
      "step2": "Select the property you want to monitor the electricity consumption for",
      "step2ImgAlt": "Fingrid Energy Report",
      "step3": "Select <b>Energy Reporting</b> and go to the <b>Download Information</b> window",
      "step3ImgAlt": "Fingrid Energy Report",
      "step4": "Select the desired time period and property",
      "step4ImgAlt": "Fingrid Energy Report",
      "step5": "Press the <b>Download</b> button. This will download the <b>electricity consumption file</b> to your device, which you can upload to the calculator",
      "step6": "<b>Do not make any changes</b> to the file, as it may affect the calculation!",
      "backButton": "Back to calculator",
      "compareElectricityPrice": "Compare Electricity Price",
      "introText1": "In the service, you can view your electricity consumption and its cost by uploading your own electricity consumption file.",
      "introText2": "Download your electricity consumption file from ",
      "setFixedPrice": "Set Fixed Price",
      "uploadAndViewResults": "Upload your file and view the results ",
      "uploadAndViewResultsBold": " Month, week, and day level!",
      "fixedPrice": "Fixed Price",
      "enterFixedPrice": "Enter fixed price",
      "csvFile": "Consumption file(.csv)",
      "showSpotPrice": "Show Spot Price",
      "showFixedPrice": "Show Fixed Price",
      "showConsumption": "Show Consumption",
      "timePeriod": "Time Period",
      "day": "Day",
      "week": "Week",
      "month": "Month",
      "loading": "Loading",
      "submit": "Submit",
      "errorFetchingData": "Error fetching data. Please try again.",
      "pleaseFillRequiredFields": "Please fill in all required fields.",
      "previous": "Previous",
      "next": "Next",
      "previousYear": "Previous Year",
      "nextYear": "Next Year",
      "invalidDate": "Invalid date format",
      "readInstructions": "Read download instructions",
      "here": "here",
      "loadingAnimation": "Loading Animation",
      "Fingridcustomerportal": "Fingrid customer portal",
      "prevPeriod": "Previous",
      "nextPeriod": "Next",
      "prevYear": "Previous Year",
      "showDaily": "Show Daily",
      "showWeekly": "Show Weekly",
      "showMonthly": "Show Monthly",
      "results": "Results",
      "cheaperOption": "The cheaper option for you is",
      "spotElectricity": " Spot electricity",
      "fixedElectricity": " Fixed electricity",
      "priceDifference": "Price difference",
      "consumption": "Consumption",
      "spotElectricityPrice": "Spot electricity price for consumption",
      "fixedElectricityPrice": "Fixed electricity price for consumption",
      "time": "Time Period",
      "priceConsumption": "Price / Consumption",
      "totalConsumption": "Total consumption",
      "timeperiodinfo": "Based on your consumption file over a period of time",
    
      "ChartSpotPrice": "Spot Price",
      "Price/Consumption": "Price / Consumption",
      "ChartMonth": "Month",
      "ChartTime": "Time",
      "unit": " (cents/kWh)",
      "DataResource": "Recourse of spot price data",
      "MainHeader": "Estimate your electricity consumption",
      "startingInformation": "Enter year and fixed price",
      "Year": "Year",
      "NextButton": "Next",
      "houseType": "House type",
      "ApartmentHouse": "Aparment house",
      "TerracedHouse": "Terraced House",
      "DetachedHouse": "Detached House",
      "Cottage": "Cottage",
      "PreviousButton": "Previous",
      "SquareMeters": "Aparment square meters (m²) ",
      "ApartmentInformation": "Apartment information",
      "NumberOfResidents": "Number of residents",
      "RemoteWorker": "Remote worker",
      "ShiftWorker": "Shift worker",
      "DayWorker": "Day worker",
      "WorkShiftType": "Work shift type",
      "HeatingTypeInfo": "Heating type",
      "ElectricHeating": "Electric",
      "DistrictHeating": "District",
      "GeothermalHeating": "Geo thermal",
      "OilHeating": "Oil",
      "ElectricCar": "Electric car",
      "ElectricCarInfo": "Do you own electric car?",
      "Yes": "Yes",
      "No": "No",
      "NoI": "No",
      "NumberOfElectricCars": "Number of electric cars",
      "ElectricCarUsage": "Electric car usage (kwh)",
      "OtherExpenses": "Other expenses",
      "ElectricSauna": "Do you own electric sauna?",
      "ElectricSaunaUsage": "How often do you use electric sauna in a week?",
      "FloorHeating": "Floor heating",
      "HasFloorHeating": "Do you have floor heating?",
      "HeatedArea": "Heated area (m²)",
      "HasFirePlace": "Do you have fire place?",
      "FirePlaceUsage": "How often do you use fire place in a week during the heating season?",
      "FutureYearError":"Year cant be in the future",
      "MinusYearError":"Year cant be negative",
      "FixedPriceError": "Fixed price cant be negative",
      "HouseTypeError": "House type is required",
      "SquareMetersError": "Square meters cant be negative",
      "NumberOfResidentsError": "Number of residents cant be negative or zero",
      "WorkShiftTypeError": "Work shift type is required",
      "HeatingTypeError": "Heating type is required",
      "FloorHeatingEmptyError": "Floor heating cant be empty",
      "FloorHeatingError": "Floor heating should be higher than 0 m²",
      "NumberOfElectricCarsError": "You must provide number of electric cars",
      "ElectricCarUsageError": "You must provice electric car usage (kwh)",
      "SaunaUsageError": "You must provide sauna usage",
      "FirePlaceUsageError": "You must provide fire place usage",
      "SolarPanelUsageError": "You must provide solar panel count",
      "SolarPanelCount": "Solar panel count",
      "SolarPanels": "Do you have solar panels?",
      "CalculateResultsButton": "Calculate",
    }
  },
  fi: {
    translation: {
      "title": "Tempus Electrica",
      "description": "Tempus Electrica on palvelu, joka mahdollistaa hinnoittelun seurannan Kiinteän ja Pörssi sähkön välillä",
      "info1": "Palvelussa voit tarkastella omaa kulutustasi ja sen hintaa <br /> <b>lataamalla oman sähkönkulutus-tiedoston</b>",
      "info2": "Me kerromme sinulle <br /> kumpi sopii sinulle paremmin, <br /><b>Kiinteä vai Pörssi sähkö</b>",
      "info3": "Vaihtoehtoisesti voit myös arvioida sähkönkulutustasi <br />  <b>laskurin avulla</b>",
      "uploadFile": "Lataa kulutustiedosto",
      "estimateConsumption": "Arvioi sähkönkulutustasi",
      "instructions": "Ohjeet",
      "instructionsTitle": "Ohjeet",
      "step1": "Siirry <a href=\"#\" onClick=\"(event) => { event.preventDefault(); window.open('https://oma.datahub.fi/#/login?returnUrl=%2F', '_blank'); }\"> Fingrid asiakas portaaliin </a> ja kirjaudu sisään",
      "step1ImgAlt": "Fingrid kirjautuminen",
      "step2": "Valitse kiinteistö, jonka sähkönkulutusta haluat seurata",
      "step2ImgAlt": "Fingrid Energiaraportti",
      "step3": "Valitse <b>Energy Reporting</b> ja siirry <b>Download Information</b> ikkunaan",
      "step3ImgAlt": "Fingrid Energiaraportti",
      "step4": "Valitse haluamasi aikaväli ja kiinteistö",
      "step4ImgAlt": "Fingrid Energiaraportti",
      "step5": "Paina <b>Download</b> painiketta. Tämä lataa <b>sähkönkulutustiedoston</b> laitteellesi, jonka voit asettaa laskuriin",
      "step6": "<b>Ethän tee muutoksia</b> tiedostoon, se voi vaikuttaa laskentaan!",
      "backButton": "Takaisin laskuriin",
      "compareElectricityPrice": "Vertaa sähkön hintaa sinun Kulutustiedostosi perusteella!",
      "introText1": "Tämä palvelu laskee sinun sähkönkulutuksesi perusteella hinnan kiinteälle ja pörssisähkölle.",
      "introText2": "Lataa oma kulutus tiedostosi ",
      "setFixedPrice": "Aseta kiinteä hinta",
      "uploadAndViewResults": "Lataa tiedostosi ja tarkastele tuloksia",
      "uploadAndViewResultsBold": " Kuukausi, viikko ja päivä tasolla!",
      "fixedPrice": "Kiinteä hinta",
      "enterFixedPrice": "Syötä kiinteä hinta",
      "csvFile": "Kulutustiedosto(.csv)",
      "showSpotPrice": "Näytä pörssihinta",
      "showFixedPrice": "Näytä kiinteä hinta",
      "showConsumption": "Näytä kulutus",
      "timePeriod": "Aikaväli",
      "day": "Päivä",
      "week": "Viikko",
      "month": "Kuukausi",
      "loading": "Ladataan",
      "submit": "Hae tiedot",
      "errorFetchingData": "Tietojen hakemisessa tapahtui virhe. Yritä uudelleen.",
      "pleaseFillRequiredFields": "Täytä kaikki pakolliset kentät.",
      "previous": "Edellinen",
      "next": "Seuraava",
      "previousYear": "Edellinen vuosi",
      "nextYear": "Seuraava vuosi",
      "invalidDate": "Virheellinen päivämäärämuoto",
      "readInstructions": "Lue kulutustiedoston lataus ohjeet",
      "here": "täältä",
      "loadingAnimation": "Lataus animaatio",
      "Fingridcustomerportal": "Fingrid asiakas portaalista",
      "results": "Tulokset",
      "cheaperOption": "Sinulle Halvempi vaihtoehto on",
      "priceDifference": "Hinta ero",
      "spotElectricity": "Pörssi-sähkö",
      "timeperiodinfo": "Kulutustiedostosi mukaan aikavälillä",
      
      "totalConsumption": "Kulutus",
      "spotElectricityPrice": "Pörssi-sähköhinta",
      "fixedElectricityPrice": "Kiinteä-sähköhinta",
      "time": "Aikaväli",
      "ChartMonth": "Kuukausi",
      "ChartTime": "Aika",
      "ChartSpotPrice": "Pörssi hinta",
      "unit": " (snt/kWh) ",
      "consumption": "Kulutus",
      "Price/Consumption": "Hinta / kulutus",
      "fixedElectricity": " Kiinteä sähkö",
      "DataResource": "Pörssi hintojen lähde",
      "MainHeader": "Arvioi sähkönkulutustasi",
      "startingInformation": "Anna vuosi ja kiinteä hinta",
      "Year": "Vuosi",
      "NextButton": "Seuraava",
      "houseType": "Talo tyyppi",
      "ApartmentHouse": "Kerrostalo",
      "TerracedHouse": "Rivitalo",
      "DetachedHouse": "Omakotitalo",
      "Cottage": "Mökki",
      "PreviousButton": "Edellinen",
      "SquareMeters": "Asunnon pinta-ala (m²)",
      "ApartmentInformation": "Asunnon tiedot",
      "NumberOfResidents": "Asukkaiden määrä",
      "RemoteWorker": "Etä-työ",
      "ShiftWorker": "Vuoro-työ",
      "DayWorker": "Päivä-työ",
      "WorkShiftType": "Työ muoto",
      "HeatingTypeInfo": "Lämmitys muoto",
      "ElectricHeating": "Sähkö lämmitys",
      "DistrictHeating": "Kauko lämpö",
      "GeothermalHeating": "Maa lämpö",
      "OilHeating": "Öljy lämmitys",
      "ElectricCar": "Sähkö auto",
      "ElectricCarInfo": "Omistatko sähkö auton?",
      "Yes": "Kyllä",
      "No": "En",
      "NoI":"Ei",
      "NumberOfElectricCars": "Autojen määrä",
      "ElectricCarUsage": "Autojen sähkön kulutus vuodessa (kwh)",
      "OtherExpenses": "Muu kulutus",
      "ElectricSauna": "Onko sinulla sähkölämmitteinen sauna?",
      "ElectricSaunaUsage": "Kuinka usein lämmität saunan viikossa?",
      "FloorHeating": "Lattia lämmitys",
      "HasFloorHeating": "Onko sinulla lattialämmitys?",
      "HeatedArea": "Lämmitys alue (m²)",
      "HasFirePlace": "Onko asunnossasi takka?",
      "FirePlaceUsage": "Kunka usein lämmität takan viikossa? (lämmityskauden aikana)",
      "EarlyYearError":"Meillä ei ole pörssisähkön hintatietoja ennen vuotta 2015",
      "FutureYearError":"Aika ei voi olla tulevaisuudessa",
      "MinusYearError":"Anna kelvollinen vuosi",
      "FixedPriceError": "Kiinteä hinta ei voi olla negatiivinen",
      "HouseTypeError": "Valitse talotyyppi",
      "SquareMeterError": "Pinta-ala ei voi olla negatiivinen",
      "NumberOfResidentError": "Asukkaiden määrä ei voi olla 0 tai negatiivinen",
      "WorkShiftTypeError": "Valitse työ muoto",
      "HeatingTypeError": "Valitse lämmitys muoto",
      "FloorHeatingEmptyError": "Lattia lämmityksen pinta-ala ei voi olla tyhjä",
      "FloorHeatingError": "Lattia lämmitysksen pinta-ala tulee olla suurempi kuin 0 m²",
      "NumberOfElectricCarsError": "Lisää autojen määrä",
      "ElectricCarUsageError": "Lisää autojen sähkön kulutus vuodessa (kwh)",
      "SaunaUsageError": "Lisää saunan lämmitys määrä",
      "FirePlaceUsageError": "Lisää takan lämmitys määrä",
      "SolarPanelUsageError": "Lisää aurinkopaneelien määrä",
      "SolarPanelCount": "Aurinkopaneelien määrä",
      "SolarPanels": "Onko sinulla aurinkopaneeleita?",
      "CalculateResultsButton": "Laske",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('i18nextLng') || 'fi',
    fallbackLng: 'fi',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

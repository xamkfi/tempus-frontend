import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "title": "X-Sähkö",
      "description": "X-Sähkö is a service that allows you to monitor pricing between Fixed and Spot electricity",
      "info1": "In the service, you can view your own consumption and its cost by <b>uploading your own electricity consumption file</b><br />",
      "info2": "We will tell you which one suits you better, <br /><b>Fixed or Exchange electricity</b>",
      "info3": "Alternatively, you can also estimate your electricity consumption with the <b>calculator</b>",
      "uploadFile": "Upload consumption file",
      "estimateConsumption": "Estimate your electricity consumption",
      "instructions": "Instructions",
      "instructionsTitle": "Instructions",
      "step1BeforeLink": "Go to the ",
      "FingridcustomerportalLink": "Fingrid customer portal",
      "step1AfterLink": " and log in",
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
      "uploadAndViewResultsBold": " Monthly, weekly, and daily level!",
      "fixedPrice": "Fixed Price",
      "enterFixedPrice": "Enter fixed price",
      "csvFile": "Consumption file(.csv)",
      "showSpotPrice": "Spot Price",
      "showFixedPrice": "Fixed Price",
      "showConsumption": "Consumption",
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
      "priceDifference": "Price difference: ",
      "averagepriceDifference": "Average Price difference:",
      "consumption": "Consumption",
      "spotElectricityPrice": "Spot electricity price: ",
      "fixedElectricityPrice": "Fixed electricity price: ",
      "time": "Time Period",
      "priceConsumption": "Price / Consumption",
      "totalConsumption": "Total consumption",
      "timeperiodinfo": "Based on your consumption file over a period of time",
    
      "ChartSpotPrice": "Spot Price",
      "Price/Consumption": "Price / Consumption",
      "ChartMonth": "Month",
      "ChartTime": "Time",
      "unit": " (cents/kWh)",
      "DataResource": "Source of spot price data",
      "MainHeader": "Estimate your electricity consumption",
      "startingInformation": "Enter year and fixed price",
      "Year": "Year",
      "NextButton": "Next",
      "houseType": "Housetype",
      "ApartmentHouse": "Apartment house",
      "TerracedHouse": "Terraced House",
      "DetachedHouse": "Detached House",
      "Cottage": "Cottage",
      "PreviousButton": "Previous",
      "SquareMeters": "Apartment square meters (m²) ",
      "ApartmentInformation": "Apartment information",
      "NumberOfResidents": "Number of residents",
      "RemoteWorker": "Remote worker",
      "ShiftWorker": "Shift worker",
      "DayWorker": "Day worker",
      "WorkShiftType": "Work shift type",
      "HeatingTypeInfo": "Heating type",
      "ElectricHeating": "Electric",
      "DistrictHeating": "District",
      "GeothermalHeating": "Geothermal",
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
      "HasFirePlace": "Do you have fireplace?",
      "FirePlaceUsage": "How often do you use fireplace in a week during the heating season?",
      "FutureYearError":"Year can't be in the future",
      "MinusYearError":"Year can't be negative",
      "FixedPriceError": "Fixed price cant be negative",
      "HouseTypeError": "House type is required",
      "SquareMetersError": "Square meters cant be negative",
      "NumberOfResidentsError": "Number of residents can't be negative or zero",
      "WorkShiftTypeError": "Work shift type is required",
      "HeatingTypeError": "Heating type is required",
      "FloorHeatingEmptyError": "Floor heating can't be empty",
      "FloorHeatingError": "Floor heating should be higher than 0 m²",
      "NumberOfElectricCarsError": "You must provide number of electric cars",
      "ElectricCarUsageError": "You must provide electric car usage (kwh)",
      "SaunaUsageError": "You must provide sauna usage",
      "SolarPanelCountError": "You must provide solar panel count",
      "SolarPanelCount": "Solar panel count",
      "SolarPanels": "Do you have solar panels?",
      "CalculateResultsButton": "Calculate",
      "resultDescription": "Calculation based on time period:",
      "cheaperOptionDescription": "Cheaper option for you could be:",
      "directiveConsumption": "Estimated consumption:",
      "estimatedMinConsumption": "Estimated minimum consumption",
      "estimatedMaxConsumption": "Estimated maximum consumption",
      "estimatedAverageHourlySpotPrice": "Average hourly spot price of year: ",
      "MonthlyResults": "Monthly results",
      "calculateAgain": "Calculate again",
      "EarlyYearError":"We only have data from 2015 and later",
      "FirePlaceUsageError": "You must provide fireplace usage",
      "SolarPanelHeader": "Solar Panels",
      "equilevantFixedPrice": " fixed price: ",
      "equilevantFixedPriceBold": "Equivalent ",
      "optimizedSpotElectricityPrice": "Optimized spot electricity price: ",
      "optimizedPriceDifference": "Optimized price difference:",
      "carInfo": "It is usually estimated that normal electric car consumpts about 1500-2000kWh per year.",
      "OptimizeInfo": "The optimized price difference consists of a calculation where we transfer 25% of your daytime consumption to night and morning hours, when electricity is generally cheaper.",
      "back": "Back to homepage",
      "enterMarginal": "Marginal",
      "privacy": { //Privacy notice text
    "header0": "Privacy Policy",
    "header1": "1. Data Controller",
    "content1": "Kaakkois-Suomen Ammattikorkeakoulu – XAMK\n\nDevelopment and Research Unit Active Life Lab\n\nBusiness ID: 2472908-2\n\nAddress: PL 68 (Patteristonkatu 3)\n\n50101 Mikkeli\n\nPhone switchboard: +358406550555",
    "header2": "2. Person Responsible for the Register and Contact Information",
    "content2": "Name: Tuomas Reijonen\n\nAddress: Kaakkois-Suomen Ammattikorkeakoulu\n\nEmail: tuomas.reijonen@xamk.fi\n\nPhone: +358406550555",
    "header3": "3. Purpose of Processing Personal Data",
    "content3": "The X-Sähkö application (hereinafter referred to as the \"Application\") provides users with the ability to calculate the most suitable type of electricity contract for them based on electricity consumption data, such as fixed-price or spot electricity. The Application does not collect or store users' personal data. We only collect anonymous telemetry data to improve the performance, quality, and usability of the Application. Telemetry data is collected using Microsoft Azure Application Insights.",
    "header4": "4. Legal Basis for Processing Personal Data",
    "content4": "Consent: The user accepts this privacy policy by using the Application.\n\nLegitimate Interest: The collection of telemetry data to ensure the functionality, security, and development of the Application.",
    "header5": "5. Contents of the Register",
    "content5": "Although we do not collect personal data, the Application processes the following information:\n\nTelemetry Data: Technical information about the use of the Application, such as device information, operating system, application usage time, and any error messages.\n\nLog Data: Information about requests to the Application, such as the time of the request and the result of the processing.",
    "header6": "6. What is Application Insights?",
    "content6": "Application Insights is a cloud service provided by Microsoft that enables monitoring and analysis of the performance and usage of the Application. With it, we can:\n\nImprove the Application: Understand how the Application is used and where we can make improvements to optimize user experience.\n\nIdentify Errors: Detect and fix potential issues quickly, which enhances the reliability of the Application.\n\nEnsure Performance: Ensure that the Application operates effectively across different devices and platforms.\n\nIt is important to note that Application Insights collects data anonymously and does not link it to individual users.",
    "header7": "7. Data Retention",
    "content7": "The collected telemetry data is stored in the Microsoft Azure Application Insights service. Data is retained only as long as necessary for the development, maintenance, and performance assurance of the Application.",
    "header8": "8. Data Disclosures and Transfers",
    "content8": "We do not disclose the collected data to third parties unless required by law. Telemetry data is stored on Microsoft servers and may be transferred outside the EU or the European Economic Area (EEA) in accordance with Microsoft's privacy policies. More information about Microsoft's privacy policies can be found at: https://privacy.microsoft.com/en-US/privacystatement",
    "header9": "9. Rights of the Data Subject",
    "content9": "Since we do not collect personal data, users do not need to submit requests for accessing, correcting, or deleting their data. If you have any questions about the processing of your data or want more information, you can contact the person mentioned below.",
    "header10": "10. Principles of Data Protection",
    "content10": "Technical Security Measures: Telemetry data is stored on secure servers with appropriate firewalls and encryption.\n\nOrganizational Security Measures: Access to telemetry data is restricted to those individuals who need it for their work in developing and maintaining the Application.",
    "header11": "11. Cookies and Tracking Technologies",
    "content11": "The X-Sähkö application does not use cookies or other similar tracking technologies to identify or track users. All collected data is anonymous and is used solely to improve the performance and usability of the Application.",
    "header12": "12. Changes to the Privacy Policy",
    "content12": "We reserve the right to update this privacy policy as necessary due to the development of the Application or changes in legislation. Significant changes will be communicated through the Application or on our website. We recommend that users regularly review the privacy policy.",
    "header13": "13. Contact Information",
    "content13": "If you have any questions about this privacy policy or the processing of your data, please contact:\n\nKaakkois-Suomen Ammattikorkeakoulu – XAMK\n\nDevelopment and Research Unit Active Life Lab\n\nBusiness ID: 2472908-2\n\nAddress: PL 68 (Patteristonkatu 3)\n\n50101 Mikkeli\n\nPhone switchboard: +358406550555\n\nPerson Responsible for the Register\n\nName: Tuomas Reijonen\n\nEmail: tuomas.reijonen@xamk.fi\n\nPhone: +358406550555"
  },
  "chart":{
    "x": "time",
    "y": "cent/kWh",
    "chartTitleDay": "Todays prices",
    "chartTitleWeek": "Prices for the week",
    "chartTitleMonth": "Monthly prices",
    "chartTitleToday": "Hourly prices today",
    "label": "cent/kWh"
  }
    }
  },
  fi: {
    translation: {
      "title": "X-Sähkö",
      "description": "X-Sähkö on palvelu, joka mahdollistaa hinnoittelun seurannan Kiinteän ja Pörssisähkön välillä",
      "info1": "Palvelussa voit tarkastella omaa kulutustasi ja sen hintaa <br /> <b>lataamalla oman sähkönkulutus-tiedoston</b>",
      "info2": "Me kerromme sinulle <br /> kumpi sopii sinulle paremmin, <br /><b>Kiinteä vai Pörssisähkö</b>",
      "info3": "Vaihtoehtoisesti voit myös arvioida sähkönkulutustasi <br />  <b>laskurin avulla</b>",
      "uploadFile": "Lataa kulutustiedosto",
      "estimateConsumption": "Arvioi sähkönkulutustasi",
      "instructions": "Ohjeet",
      "instructionsTitle": "Ohjeet",
      "step1BeforeLink": "Siirry ",
      "FingridcustomerportalLink": "Fingrid asiakasportaaliin",
      "step1AfterLink": " ja kirjaudu sisään",
      "step1ImgAlt": "Fingrid login",
      "step2": "Valitse kiinteistö, jonka sähkönkulutusta haluat seurata",
      "step2ImgAlt": "Fingrid Energiaraportti",
      "step3": "Valitse <b>Energy Reporting</b> ja siirry <b>Download Information</b> ikkunaan",
      "step3ImgAlt": "Fingrid Energiaraportti",
      "step4": "Valitse haluamasi aikaväli ja kiinteistö",
      "step4ImgAlt": "Fingrid Energiaraportti",
      "step5": "Paina <b>Download</b> painiketta. Tämä lataa <b>sähkönkulutustiedoston</b> laitteellesi, jonka voit asettaa laskuriin",
      "step6": "<b>Ethän tee muutoksia</b> tiedostoon, se voi vaikuttaa laskentaan!",
      "backButton": "Takaisin laskuriin",
      "compareElectricityPrice": "Vertaa sähkön hintaa sinun kulutustiedostosi perusteella!",
      "introText1": "Tämä palvelu laskee sinun sähkönkulutuksesi perusteella hinnan kiinteälle ja pörssisähkölle.",
      "introText2": "Lataa oma kulutustiedostosi ",
      "setFixedPrice": "Aseta kiinteä hinta",
      "uploadAndViewResults": "Lataa tiedostosi ja tarkastele tuloksia",
      "uploadAndViewResultsBold": " Kuukausi-, viikko- ja päivä- tasolla!",
      "fixedPrice": "Kiinteä hinta",
      "enterFixedPrice": "Syötä kiinteä hinta",
      "csvFile": "Kulutustiedosto(.csv)",
      "showSpotPrice": "Pörssi hinta",
      "showFixedPrice": "Kiinteä hinta",
      "showConsumption": "Kulutus",
      "timePeriod": "Aikaväli",
      "day": "Päivä",
      "week": "Viikko",
      "month": "Kuukausi",
      "loading": "Ladataan",
      "submit": "Laske",
      "errorFetchingData": "Tietojen hakemisessa tapahtui virhe. Yritä uudelleen.",
      "pleaseFillRequiredFields": "Täytä kaikki pakolliset kentät.",
      "previous": "Edellinen",
      "next": "Seuraava",
      "previousYear": "Edellinen vuosi",
      "nextYear": "Seuraava vuosi",
      "invalidDate": "Virheellinen päivämäärämuoto",
      "readInstructions": "Lue kulutustiedoston latausohjeet",
      "here": "täältä",
      "loadingAnimation": "Lataus animaatio",
      "Fingridcustomerportal": "Fingrid asiakasportaalista",
      "results": "Tulokset",
      "cheaperOption": "Sinulle halvempi vaihtoehto on",
      "averagepriceDifference": "Keskimääräinen hintaero:",
      "priceDifference": "Hintaero: ",
      "spotElectricity": "Pörssisähkö",
      "timeperiodinfo": "Kulutustiedostosi mukaan aikavälillä",
      "totalConsumption": "Kulutus",
      "spotElectricityPrice": "Pörssisähkö hinta: ",
      "fixedElectricityPrice": "Kiinteä sähkö hinta: ",
      "time": "Aikaväli",
      "ChartMonth": "Kuukausi",
      "ChartTime": "Aika",
      "ChartSpotPrice": "Pörssihinta",
      "unit": " (snt/kWh) ",
      "consumption": "Kulutus",
      "Price/Consumption": "Hinta / kulutus",
      "fixedElectricity": " Kiinteä sähkö",
      "DataResource": "Pörssihintojen lähde",
      "MainHeader": "Arvioi sähkönkulutustasi",
      "startingInformation": "Anna vuosi ja kiinteä hinta",
      "Year": "Vuosi",
      "NextButton": "Seuraava",
      "houseType": "Talotyyppi",
      "ApartmentHouse": "Kerrostalo",
      "TerracedHouse": "Rivitalo",
      "DetachedHouse": "Omakotitalo",
      "Cottage": "Mökki",
      "PreviousButton": "Edellinen",
      "SquareMeters": "Asunnon pinta-ala (m²)",
      "ApartmentInformation": "Asunnon tiedot",
      "NumberOfResidents": "Asukkaiden määrä",
      "RemoteWorker": "Etätyö",
      "ShiftWorker": "Vuorotyö",
      "DayWorker": "Päivätyö",
      "WorkShiftType": "Työmuoto",
      "HeatingTypeInfo": "Lämmitysmuoto",
      "ElectricHeating": "Sähkö-lämmitys",
      "DistrictHeating": "Kauko-lämpö",
      "GeothermalHeating": "Maa-lämpö",
      "OilHeating": "Öljy-lämmitys",
      "ElectricCar": "Sähköauto",
      "ElectricCarInfo": "Omistatko sähköauton?",
      "Yes": "Kyllä",
      "No": "En",
      "NoI":"Ei",
      "NumberOfElectricCars": "Autojen määrä",
      "ElectricCarUsage": "Autojen sähkönkulutus vuodessa (kwh)",
      "OtherExpenses": "Muu kulutus",
      "ElectricSauna": "Onko sinulla sähkölämmitteinen sauna?",
      "ElectricSaunaUsage": "Kuinka usein lämmität saunan viikossa?",
      "FloorHeating": "Lattialämmitys",
      "HasFloorHeating": "Onko sinulla lattialämmitys?",
      "HeatedArea": "Lämmitettävä alue (m²)",
      "HasFirePlace": "Onko asunnossasi takka?",
      "FirePlaceUsage": "Kuinka usein lämmität takan viikossa? (lämmityskauden aikana)",
      "EarlyYearError":"Meillä ei ole pörssisähkön hintatietoja ennen vuotta 2015",
      "FutureYearError":"Aika ei voi olla tulevaisuudessa",
      "MinusYearError":"Anna kelvollinen vuosi",
      "FixedPriceError": "Kiinteä hinta ei voi olla negatiivinen",
      "HouseTypeError": "Valitse talotyyppi",
      "SquareMeterError": "Pinta-ala ei voi olla negatiivinen",
      "NumberOfResidentError": "Asukkaiden määrä ei voi olla 0 tai negatiivinen",
      "SquareMetersError": "Pinta-ala tulee olla suurempi kuin 0 m²",
      "NumberOfResidentsError": "Asukkaiden määrä tulee olla suurempi kuin 0", 
      "FirePlaceUsageError": "Lisää takan lämmitys määrä",
      "SolarPanelCount": "Aurinkopaneelien määrä",
      "SolarPanels": "Onko sinulla aurinkopaneeleita?",
      "CalculateResultsButton": "Laske",
      "resultDescription": "Laskenta suoritettu aikavälillä:",
      "cheaperOptionDescription": "Halvempi vaihtoehto voisi olla:",
      "directiveConsumption": "Arvioitu kulutus:",
      "estimatedMinConsumption": "Arvioitu minimikulutus:",
      "estimatedMaxConsumption": "Arvioitu maksimikulutus:",
      "estimatedAverageHourlySpotPrice": "Pörssisähkön keskimääräinen tuntihinta: ",
      "MonthlyResults": "Kuukausittaiset tulokset",
      "calculateAgain": "Laske uudelleen",
      "WorkShiftTypeError": "Valitse työmuoto",
      "HeatingTypeError": "Valitse lämmitysmuoto",
      "FloorHeatingEmptyError": "Lattialämmityksen pinta-ala ei voi olla tyhjä",
      "FloorHeatingError": "Lattialämmityksen pinta-ala tulee olla suurempi kuin 0 m²",
      "NumberOfElectricCarsError": "Lisää autojen määrä",
      "ElectricCarUsageError": "Lisää autojen sähkönkulutus vuodessa (kwh)",
      "SaunaUsageError": "Lisää saunan lämmitysmäärä",
      "SolarPanelCountError": "Lisää aurinkopaneelien määrä",
      "SolarPanelHeader": "Aurinkopaneelit",
      "equilevantFixedPrice": ", joka vastaa pörssisähkön kustannuksia: ",
      "equilevantFixedPriceBold": "Kiinteä hinta ",
      "optimizedSpotElectricityPrice": "Pörssisähkö hinta, jos kulutuksesi optimoitaisiin 25% halvemmille tunneille: ",
      "optimizedPriceDifference": "Optimoitu hintaero:",
      "carInfo": "Sähköauton keskimääräinen kulutus on noin 1500-2000kWh vuodessa",
      "OptimizeInfo": "Optimoitu hintaero perustuu laskentaan, jossa siirrämme 25% päivittäisestä kulutuksestasi yö- ja aamu tunneille, jolloin sähkö on yleensä halvempaa.",
      "back": "Takaisin",
      "enterMarginal": "Marginaali",
      "privacy": { //Privacy notice text
    "header0": "Tietosuojakäytäntö",
    "header1": "1. Rekisterinpitäjä",
    "content1": "Kaakkois-Suomen Ammattikorkeakoulu – XAMK\n\nKehitys- ja tutkimusyksikkö Active Life Lab\n\nY-tunnus: 2472908-2\n\nOsoite: PL 68 (Patteristonkatu 3)\n\n50101 Mikkeli\n\nPuhelinvaihde: +358406550555",
    "header2": "2. Rekisteristä vastaava henkilö ja yhteystiedot",
    "content2": "Nimi: Tuomas Reijonen\n\nOsoite: Kaakkois-Suomen Ammattikorkeakoulu\n\nSähköposti: tuomas.reijonen@xamk.fi\n\nPuhelin: +358406550555",
    "header3": "3. Henkilötietojen käsittelyn tarkoitus",
    "content3": "X-Sähkö-sovellus (jäljempänä \"Sovellus\") tarjoaa käyttäjille mahdollisuuden laskea sähkönkulutustietojen perusteella heille sopivimman sähkösopimustyypin, kuten kiinteähintaisen tai pörssisähkön. Sovellus ei kerää tai tallenna käyttäjän henkilötietoja. Keräämme ainoastaan anonyymeja telemetriikkatietoja Sovelluksen suorituskyvyn, laadun ja käytettävyyden parantamiseksi. Telemetriikkatietoja kerätään Microsoft Azure Application Insights -palvelun avulla.",
    "header4": "4. Henkilötietojen käsittelyn oikeusperuste",
    "content4": "Suostumus: Käyttäjä hyväksyy tämän tietosuojakäytännön käyttämällä Sovellusta.\n\nOikeutettu etu: Telemetriikkatietojen kerääminen Sovelluksen toimivuuden, turvallisuuden ja kehittämisen varmistamiseksi.",
    "header5": "5. Rekisterin tietosisältö",
    "content5": "Vaikka emme kerää henkilötietoja, Sovellus käsittelee seuraavia tietoja:\n\nTelemetriikkatiedot: Teknisiä tietoja Sovelluksen käytöstä, kuten laitetiedot, käyttöjärjestelmä, Sovelluksen käyttöaika ja mahdolliset virheilmoitukset.\n\nLokitiedot: Tiedot Sovelluksen pyynnöistä, kuten pyynnön ajankohta ja käsittelyn tulos.",
    "header6": "6. Mikä on Application Insights?",
    "content6": "Application Insights on Microsoftin tarjoama pilvipalvelu, joka mahdollistaa Sovelluksen suorituskyvyn ja käytön seurannan sekä analysoinnin. Sen avulla voimme:\n\nParantaa Sovellusta: Ymmärtää, miten Sovellusta käytetään ja missä voimme tehdä parannuksia käyttäjäkokemuksen optimoimiseksi.\n\nTunnistaa virheet: Havaita ja korjata mahdolliset ongelmat nopeasti, mikä lisää Sovelluksen luotettavuutta.\n\nVarmentaa suorituskykyä: Varmistaa, että Sovellus toimii tehokkaasti eri laitteilla ja alustoilla.\n\nOn tärkeää huomata, että Application Insights kerää tiedot anonyymisti eikä yhdistä niitä yksittäisiin käyttäjiin.",
    "header7": "7. Tietojen säilyttäminen",
    "content7": "Kerätyt telemetriikkatiedot tallennetaan Microsoft Azure Application Insights -palveluun. Tietoja säilytetään vain niin kauan kuin on tarpeen Sovelluksen kehittämiseksi, ylläpitämiseksi ja suorituskyvyn varmistamiseksi.",
    "header8": "8. Tietojen luovutukset ja siirrot",
    "content8": "Emme luovuta kerättyjä tietoja kolmansille osapuolille, ellei lainsäädäntö sitä edellytä. Telemetriikkatiedot säilytetään Microsoftin palvelimilla, ja niitä voidaan siirtää EU tai Euroopan talousalueen (ETA) ulkopuolelle Microsoftin tietosuojakäytäntöjen mukaisesti. Lisätietoja Microsoftin tietosuojakäytännöistä löytyy osoitteesta: https://privacy.microsoft.com/fi-FI/privacystatement",
    "header9": "9. Rekisteröidyn oikeudet",
    "content9": "Koska emme kerää henkilötietoja, käyttäjillä ei ole tarvetta esittää pyyntöjä tietojensa tarkistamisesta, korjaamisesta tai poistamisesta. Mikäli sinulla on kysyttävää tietojesi käsittelystä tai haluat lisätietoja, voit ottaa yhteyttä alla mainittuun yhteyshenkilöön.",
    "header10": "10. Rekisterin suojauksen periaatteet",
    "content10": "Tekniset suojatoimet: Telemetriikkatiedot tallennetaan suojatuille palvelimille, joissa on asianmukaiset palomuurit ja salaukset.\n\nOrganisatoriset suojatoimet: Pääsy telemetriikkatietoihin on rajoitettu vain niille henkilöille, joille se on työnsä puolesta välttämätöntä Sovelluksen kehittämiseksi ja ylläpitämiseksi.",
    "header11": "11. Evästeet ja seurantateknologiat",
    "content11": "X-Sähkö-sovellus ei käytä evästeitä tai muita vastaavia seurantateknologioita käyttäjän yksilöintiin tai seurantaan. Kaikki kerätty tieto on anonyymiä ja käytetään yksinomaan Sovelluksen suorituskyvyn ja käytettävyyden parantamiseen.",
    "header12": "12. Tietosuojakäytännön muutokset",
    "content12": "Pidätämme oikeuden päivittää tätä tietosuojakäytäntöä tarvittaessa Sovelluksen kehityksen tai lainsäädännön muutosten myötä. Mahdollisista merkittävistä muutoksista tiedotetaan Sovelluksen kautta tai verkkosivustollamme. Suosittelemme käyttäjiä tutustumaan tietosuojakäytäntöön säännöllisesti.",
    "header13": "13. Yhteystiedot",
    "content13": "Jos sinulla on kysyttävää tästä tietosuojakäytännöstä tai tietojesi käsittelystä, ota yhteyttä:\n\nKaakkois-Suomen Ammattikorkeakoulu – XAMK\n\nKehitys- ja tutkimusyksikkö Active Life Lab\n\nY-tunnus: 2472908-2\n\nOsoite: PL 68 (Patteristonkatu 3)\n\n50101 Mikkeli\n\nPuhelinvaihde: +358406550555\n\nRekisteristä vastaava henkilö\n\nNimi: Tuomas Reijonen\n\nSähköposti: tuomas.reijonen@xamk.fi\n\nPuhelin: +358406550555"
  },
  "chart":{
    "x": "aika",
    "y": "snt/kWh",
    "label": "snt/kWh",
    "chartTitleDay": "Päivän hinnat",
    "chartTitleWeek": "Viikon hinnat",
    "chartTitleMonth": "Hinnat kuukausittain",
    "chartTitleToday": "Tuntihinnat tänään",
  }
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

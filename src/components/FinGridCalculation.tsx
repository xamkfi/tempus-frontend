import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { FetchDataService } from '../services/FetchDataService';
import DataParams from '../models/DataParams';
import '../styles/FinGridCalculation.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Lottie from 'lottie-react';
import animationData from './loadingAnimation.json';
import { useTranslation } from 'react-i18next';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const FilterForm: React.FC = () => {
  const { t } = useTranslation();
  const [fixedPrice, setFixedPrice] = useState<number | ''>(10);
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [resultData, setResultData] = useState<DataParams | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [timePeriod, setTimePeriod] = useState<'day' | 'week' | 'month'>('month'); // Default to month
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [showSpotPrice, setShowSpotPrice] = useState(true);
  const [showFixedPrice, setShowFixedPrice] = useState(true);
  const [showConsumption, setShowConsumption] = useState(false);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    // Load saved state from localStorage if available
    const savedState = localStorage.getItem('filterFormState');
    if (savedState) {
      const state = JSON.parse(savedState);
      setFixedPrice(state.fixedPrice);
      setCsvFile(state.csvFile ? new File([state.csvFile], state.csvFile.name) : null);
      setResultData(state.resultData);
      setError(state.error);
      setTimePeriod(state.timePeriod);
      setCurrentDayIndex(state.currentDayIndex);
      setCurrentWeekIndex(state.currentWeekIndex);
      setCurrentYear(state.currentYear);
      setShowSpotPrice(state.showSpotPrice);
      setShowFixedPrice(state.showFixedPrice);
      setShowConsumption(state.showConsumption);
    }
  }, []);

  useEffect(() => {
    // Save state to localStorage whenever it changes
    localStorage.setItem('filterFormState', JSON.stringify({
      fixedPrice,
      csvFile,
      resultData,
      error,
      timePeriod,
      currentDayIndex,
      currentWeekIndex,
      currentYear,
      showSpotPrice,
      showFixedPrice,
      showConsumption,
    }));
  }, [fixedPrice, csvFile, resultData, error, timePeriod, currentDayIndex, currentWeekIndex, currentYear, showSpotPrice, showFixedPrice, showConsumption]);

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResultData(null); 
    setError(null);
  
    if (fixedPrice !== '' && csvFile) {
      setLoading(true);
      const params: DataParams = {
        
        fixedPrice: Number(fixedPrice),
        csvFile
      }
 
  
      try {
        const data = await FetchDataService(params);
        setResultData(data);
        setError(null);
        setCurrentDayIndex(0);
        setCurrentWeekIndex(0);
  
        if (data.monthlyData) {
          const sortedMonthlyData = data.monthlyData.sort((a, b) => a.year - b.year);
          setCurrentYear(sortedMonthlyData[0].year);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again.');
        setResultData(null);
      } finally {
        setLoading(false); 
      }
    } else {
      alert('Please fill in the required fields.');
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCsvFile(e.target.files[0]);
    }
  };

  const handleTimePeriodChange = (period: 'day' | 'week' | 'month') => {
    setTimePeriod(period);
    setCurrentDayIndex(0);
    setCurrentWeekIndex(0);
    const firstyear = new Date().getFullYear() - 1;
    setCurrentYear(firstyear);
    

    
  };

  const formatDate = (dateString: string) => {
    const [day, month, year] = dateString.split('.');
    const formattedDateString = `${year}-${month}-${day}`;
    const date = new Date(formattedDateString);

    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }

    const formattedMonth = String(date.getMonth() + 1).padStart(2, '0');
    const formattedDay = String(date.getDate()).padStart(2, '0');
    const formattedYear = date.getFullYear();

    return `${formattedMonth}/${formattedDay}/${formattedYear}`;
  };

  const formatStartDateEndDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const getGraphData = () => {
    if (!resultData) return { labels: [], datasets: [] };

    let labels: string[] = [];
    let spotPrices: number[] = [];
    let fixedPrices: number[] = [];
    let consumptions: number[] = [];

    if (timePeriod === 'day' && resultData.dailyData) {
      const days = resultData.dailyData.slice(currentDayIndex, currentDayIndex + 15);
      labels = days.map(data => `${formatDate(data.day)}`);
      spotPrices = days.map(data => data.spotPrice);
      fixedPrices = days.map(data => data.fixedPrice);
      consumptions = days.map(data => data.consumption);
    } else if (timePeriod === 'week' && resultData.weeklyData) {
      const weeks = resultData.weeklyData.slice(currentWeekIndex, currentWeekIndex + 15);
      labels = weeks.map(data => `Vk ${data.week}, ${data.year}`);
      spotPrices = weeks.map(data => data.spotPrice);
      fixedPrices = weeks.map(data => data.fixedPrice);
      consumptions = weeks.map(data => data.consumption);
    } else if (timePeriod === 'month' && resultData.monthlyData) {
      const months = resultData.monthlyData
        .sort((a, b) => a.year - b.year) // Sort by year
        .filter(data => data.year === currentYear);
        
      labels = months.map(data => `${data.month}/${data.year}`);
      spotPrices = months.map(data => data.spotPrice);
      fixedPrices = months.map(data => data.fixedPrice);
      consumptions = months.map(data => data.consumption);
    }

    const datasets: any[] = [];
    if (showSpotPrice) {
      datasets.push({
        label: t('ChartSpotPrice'),
        backgroundColor: '#4682B4',
        data: spotPrices,
      });
    }
    if (showFixedPrice) {
      datasets.push({
        label: t('fixedPrice'),
        backgroundColor: '#DC143C',
        data: fixedPrices
      });
    }
    if (showConsumption) {
      datasets.push({
        label: t('consumption'),
        backgroundColor: '#32CD32',
        data: consumptions,
        datalabels: {
          display: true,
          color: '#333',
          formatter: (value: number) => `${value.toFixed(2)} kWh`,
        },
      });
    }

    return {
      labels,
      datasets,
    };
  };

  const handleNextDayPeriod = () => {
    if (resultData?.dailyData && currentDayIndex + 15 < resultData.dailyData.length) {
      setCurrentDayIndex(currentDayIndex + 15);
    }
  };

  const handlePrevDayPeriod = () => {
    if (resultData?.dailyData && currentDayIndex - 15 >= 0) {
      setCurrentDayIndex(currentDayIndex - 15);
    }
  };

  const handleNextWeekPeriod = () => {
    if (resultData?.weeklyData && currentWeekIndex + 15 < resultData.weeklyData.length) {
      setCurrentWeekIndex(currentWeekIndex + 15);
    }
  };

  const handlePrevWeekPeriod = () => {
    if (resultData?.weeklyData && currentWeekIndex - 15 >= 0) {
      setCurrentWeekIndex(currentWeekIndex - 15);
    }
  };

  const getNextYearAvailable = () => {
    return resultData?.monthlyData?.some(data => data.year === currentYear + 1) ?? false;
  };

  const getPrevYearAvailable = () => {
    return resultData?.monthlyData?.some(data => data.year === currentYear - 1) ?? false;
  };

  return (
    <Container className="filter-form-container">
      <div className="section">
        <h2>{t('compareElectricityPrice')}</h2>
        <div className="intro-text">
          <p>{t('introText1')}</p>
          <p>
            {t('introText2')}{' '}
            <a href="#" onClick={(event) => {
              event.preventDefault();
              window.open("https://oma.datahub.fi/#/login?returnUrl=%2F", "_blank");
            }}>
              {t('Fingridcustomerportal')}
            </a>
            . <b>{t('readInstructions')} </b>
            <a href='instructions'>{t('here')}</a>
          </p>
          <p>{t('setFixedPrice')} <b>snt/kwh.</b></p>
          <p>{t('uploadAndViewResults')}<b>{t('uploadAndViewResultsBold')}</b></p>
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="fixedPrice">
              <Form.Label>{t('enterFixedPrice')}{t('unit')}</Form.Label>
              <Form.Control
                type="number"
                placeholder={t('enterFixedPrice')}
                value={fixedPrice}
                onChange={(e) => setFixedPrice(parseFloat(e.target.value) || '')}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="csvFile">
              <Form.Label>{t('csvFile')}:</Form.Label>
              <Form.Control
                type="file"
                accept=".csv"
                onChange={handleFileChange}
              />
            </Form.Group>
          </Col>
          <Col xs={12} className="mb-3">
            <Button variant="primary" type="submit" className="submit-button">
              {t('submit')}
            </Button>
          </Col>
        </Row>
      </Form>
      {loading && (
        <div className="loading-animation-container">
          <div className="loading-animation">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      )}
      {error && <Alert variant="danger">{error}</Alert>}
      {resultData && (
  <>
    <div className="result-data-container">
    <div className="result-data-summary">
  <h3>{t('results')}</h3>
  <p>{t('timeperiodinfo')} <br></br> <b>{resultData.startDate ? ('') : ''} {resultData.startDate ? formatStartDateEndDate(resultData.startDate) : 'N/A'} - {resultData.endDate ? formatStartDateEndDate(resultData.endDate) : 'N/A'}</b></p>
  <p>
     {t('cheaperOption')}<b> {resultData.cheaperOption === 'Spot Price' ? t('spotElectricity') : t('fixedElectricity')}</b>
  </p>
  <p className="price-difference">{t('priceDifference')}: <b>{resultData.priceDifference?.toFixed(2) ?? 'N/A'} €</b></p>
</div>
<div className="result-data-keywords">
  <p>{t('totalConsumption')}: <span className="dynamic-value">{resultData.totalConsumption?.toFixed(2) ?? 'N/A'}</span> kWh</p>
  <p>{t('spotElectricityPrice')}: <span className="dynamic-value">{resultData.totalSpotPrice?.toFixed(2) ?? 'N/A'}</span> €</p>
  <p>{t('fixedElectricityPrice')}: <span className="dynamic-value">{resultData.totalFixedPrice?.toFixed(2) ?? 'N/A'}</span> €</p>
  <p>{t('time')}: <span className="dynamic-value">{resultData.startDate ? formatStartDateEndDate(resultData.startDate) : 'N/A'} - {resultData.endDate ? formatStartDateEndDate(resultData.endDate) : 'N/A'}</span></p>
</div>
    </div>
  </>
)}
      
      {resultData && (
        <>
            <div className="graph-options">
    <Form.Check
      type="checkbox"
      label={t('showSpotPrice')}
      checked={showSpotPrice}
      onChange={() => setShowSpotPrice(!showSpotPrice)}
      className="form-check"
    />
    <Form.Check
      type="checkbox"
      label={t('showFixedPrice')}
      checked={showFixedPrice}
      onChange={() => setShowFixedPrice(!showFixedPrice)}
      className="form-check"
    />
    <Form.Check
      type="checkbox"
      label={t('showConsumption')}
      checked={showConsumption}
      onChange={() => setShowConsumption(!showConsumption)}
      className="form-check"
    />
  </div>
  <div className="chart-controls">
  {timePeriod === 'day' && (
    <div className="day-period-controls">
      <Button onClick={handlePrevDayPeriod} disabled={currentDayIndex === 0}>
        {t('previous')}
      </Button>
      <Button onClick={handleNextDayPeriod} disabled={currentDayIndex + 15 >= (resultData.dailyData?.length || 0)}>
        {t('next')}
      </Button>
    </div>
  )}
  {timePeriod === 'week' && (
    <div className="week-period-controls">
      <Button onClick={handlePrevWeekPeriod} disabled={currentWeekIndex === 0}>
        {t('previous')}
      </Button>
      <Button onClick={handleNextWeekPeriod} disabled={currentWeekIndex + 15 >= (resultData.weeklyData?.length || 0)}>
        {t('next')}
      </Button>
    </div>
  )}
  {timePeriod === 'month' && (
    <div className="month-period-controls">
      <Button
        onClick={() => setCurrentYear(currentYear - 1)}
        disabled={!getPrevYearAvailable()}
      >
        {t('previousYear')}
      </Button>
      <Button
        onClick={() => setCurrentYear(currentYear + 1)}
        disabled={!getNextYearAvailable()}
      >
        {t('nextYear')}
      </Button>
    </div>
  )}
</div>
          

          <div className="chart-container">
            <Bar
              data={getGraphData()}
              options={{
                plugins: {
                  legend: {
                    position: 'top' as const,
                  },
                  datalabels: {
                    display: false,
                  },
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: timePeriod === 'month'  ? t('ChartMonth') : t('ChartTime'),
                    },
                    grid: {
                      display: false,
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: t('Price/Consumption'),
                    },
                    grid: {
                      color: '#ddd',
                    },
                  },
                },
              }}
            />
          </div>
          <div className="filter-options">
  <Button
    onClick={() => handleTimePeriodChange('month')}
    className={timePeriod === 'month' ? 'btn selected' : 'btn'}
  >
    {t('month')}
  </Button>
  <Button
    onClick={() => handleTimePeriodChange('week')}
    className={timePeriod === 'week' ? 'btn selected' : 'btn'}
  >
    {t('week')}
  </Button>
  <Button
    onClick={() => handleTimePeriodChange('day')}
    className={timePeriod === 'day' ? 'btn selected' : 'btn'}
  >
    {t('day')}
  </Button>
</div>
        </>
      )}
    </Container>
  );
};

export default FilterForm;

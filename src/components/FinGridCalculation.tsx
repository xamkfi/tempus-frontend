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
import { parse, format, isValid } from 'date-fns';
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
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  
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
      setCurrentMonthIndex(state.currentMonthIndex);
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
      currentMonthIndex,
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
        setCurrentMonthIndex(0);
  
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
    setCurrentMonthIndex(0);
    const firstyear = new Date().getFullYear() - 1;
    setCurrentYear(firstyear);
  };

 const formatDate = (dateString: string) => {
  const parsedDate = parse(dateString, 'dd.MM.yyyy', new Date());

  if (!isValid(parsedDate)) {
    return 'Invalid Date';
  }

  return format(parsedDate, 'MM/dd/yyyy');
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
  
  const isMobile = (() => {
  
  const userAgent = navigator.userAgent || navigator.vendor;
  const mobileUserAgents = ['android', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];

  const isMobileDevice = mobileUserAgents.some(mobileAgent => userAgent.toLowerCase().includes(mobileAgent));
  const isMobileScreen = window.innerWidth <= 768;
  const isMobile = isMobileDevice || isMobileScreen;

  return isMobile;
})

const getGraphData = () => {
  if (!resultData) return { labels: [], datasets: [] };

  let labels: string[] = [];
  let spotPrices: number[] = [];
  let fixedPrices: number[] = [];
  let consumptions: number[] = [];

  const maxItems = isMobile() ? 6 : 15; // Limit to 6 for mobile, 15 otherwise

  if (timePeriod === 'day' && resultData.dailyData) {
    const days = resultData.dailyData.slice(currentDayIndex, currentDayIndex + maxItems);
    labels = days.map(data => `${formatDate(data.day)}`);
    spotPrices = days.map(data => parseFloat(data.spotPrice.toFixed(2))); 
    fixedPrices = days.map(data => parseFloat(data.fixedPrice.toFixed(2)));
    consumptions = days.map(data => data.consumption);
  } else if (timePeriod === 'week' && resultData.weeklyData) {
    const weeks = resultData.weeklyData.slice(currentWeekIndex, currentWeekIndex + maxItems);
    labels = weeks.map(data => `Vk ${data.week}, ${data.year}`);
    spotPrices = weeks.map(data => parseFloat(data.spotPrice.toFixed(2))); 
    fixedPrices = weeks.map(data => parseFloat(data.fixedPrice.toFixed(2)));
    consumptions = weeks.map(data => data.consumption);
  } else if (timePeriod === 'month' && resultData.monthlyData) {
    let months = resultData.monthlyData
        .filter(data => isMobile() ? true : data.year === currentYear) // Handle year filter only if not mobile
        .sort((a, b) => a.year - b.year); // Sort by year

    if (isMobile()) {
        months = months.slice(currentMonthIndex, currentMonthIndex + maxItems);
    } else {
        months = months.slice(0, maxItems);
    }

    labels = months.map(data => `${data.month}/${data.year}`);
    spotPrices = months.map(data => parseFloat(data.spotPrice.toFixed(2)));
    fixedPrices = months.map(data => parseFloat(data.fixedPrice.toFixed(2)));
    consumptions = months.map(data => data.consumption);
  }

  const datasets: any[] = [];
  if (showSpotPrice) {
      datasets.push({
          label: t('ChartSpotPrice'),
          backgroundColor: '#4682B4',
          data: spotPrices
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
              display: false,
              color: '#333',
          },
      });
  }

  return {
      labels,
      datasets,
  };
};


const handleNextDayPeriod = () => {
  const step = isMobile() ? 6 : 15;
  if (resultData?.dailyData) {
    const maxIndex = resultData.dailyData.length - step;
 
    if (currentDayIndex < maxIndex) {
      setCurrentDayIndex(prevIndex => Math.min(prevIndex + step, maxIndex));
    }
  }
};

const handlePrevDayPeriod = () => {
  const step = isMobile() ? 6 : 15;
  if (resultData?.dailyData) {
    if (currentDayIndex > 0) {
      setCurrentDayIndex(prevIndex => Math.max(prevIndex - step, 0));
    }
  }
};

const handleNextWeekPeriod = () => {
  const step = isMobile() ? 6 : 15;
  if (resultData?.weeklyData) {
    const maxIndex = resultData.weeklyData.length - step;
    if (currentWeekIndex < maxIndex) {
      setCurrentWeekIndex(prevIndex => Math.min(prevIndex + step, maxIndex));
    }
  }
};

const handlePrevWeekPeriod = () => {
  const step = isMobile() ? 6 : 15;
  if (resultData?.weeklyData) {
    if (currentWeekIndex > 0) {
      setCurrentWeekIndex(prevIndex => Math.max(prevIndex - step, 0));
    }
  }
};

const handleNextMonthPeriod = () => {
  const step = isMobile() ? 6 : 15;
  if (resultData?.monthlyData) {
    const maxIndex = isMobile() ? resultData.monthlyData.length - step : resultData.monthlyData.length - 1;
    if (currentMonthIndex < maxIndex) {
      setCurrentMonthIndex(prevIndex => Math.min(prevIndex + step, maxIndex));
    }
  }
};

const handlePrevMonthPeriod = () => {
  const step = isMobile() ? 6 : 15;
  if (resultData?.monthlyData) {
    if (currentMonthIndex > 0) {
      setCurrentMonthIndex(prevIndex => Math.max(prevIndex - step, 0));
    }
  }
};


const getNextYearAvailable = () => {
  if (isMobile()) {
      return false; // No year transition needed for mobile monthly view
  }
  return resultData?.monthlyData?.some(data => data.year === currentYear + 1) ?? false;
};

const getPrevYearAvailable = () => {
  if (isMobile()) {
      return false; // No year transition needed for mobile monthly view
  }
  return resultData?.monthlyData?.some(data => data.year === currentYear - 1) ?? false;
};

    

  
  return (
    <Container className="filter-form-container">
      <div className="section">
        <h3>{t('compareElectricityPrice')}</h3>
        <br />
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
        <p>
          {t('timeperiodinfo')} <br></br> 
          <b>
            {resultData.startDate ? formatStartDateEndDate(resultData.startDate) : 'N/A'} - 
            {resultData.endDate ? formatStartDateEndDate(resultData.endDate) : 'N/A'}
          </b>
        </p>
        <p>
          {t('cheaperOption')}<b> {resultData.cheaperOption === 'Spot Price' ? t('spotElectricity') : t('fixedElectricity')}</b>
        </p>
        {resultData.cheaperOption === 'Spot Price' && (
          <p><b>{t('equilevantFixedPriceBold')}</b>{t('equilevantFixedPrice')}<b> {resultData.equivalentFixedPrice?.toFixed(2)} {t('unit')} </b> </p>
        )}
        <p className="price-difference">
          {t('priceDifference')}: <b>{resultData.priceDifference?.toFixed(2) ?? 'N/A'} €</b>
        </p>
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
      <Button onClick={handleNextDayPeriod} disabled={currentDayIndex + (isMobile() ? 6 : 15) >= (resultData.dailyData?.length || 0)}>
        {t('next')}
      </Button>
    </div>
  )}
  {timePeriod === 'week' && (
    <div className="week-period-controls">
      <Button onClick={handlePrevWeekPeriod} disabled={currentWeekIndex === 0}>
        {t('previous')}
      </Button>
      <Button onClick={handleNextWeekPeriod} disabled={currentWeekIndex + (isMobile() ? 6 : 15) >= (resultData.weeklyData?.length || 0)}>
        {t('next')}
      </Button>
    </div>
  )}
  {timePeriod === 'month' && (
    <div className="month-period-controls">
      {isMobile() && (
        <>
          <Button
            onClick={handlePrevMonthPeriod}
            disabled={currentMonthIndex === 0}
        >
            {t('previous')}
        </Button>
        <Button
            onClick={handleNextMonthPeriod}
            disabled={currentMonthIndex + (isMobile() ? 6 : 15) >= (resultData?.monthlyData?.length || 0)}
        >
            {t('next')}
        </Button>
        </>
      )}
        
        {!isMobile() && (
                <>
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
                </>
            )}
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
                  tooltip: {
                    callbacks: {
                          label: function(context) {
                              let label = context.dataset.label || '';
                              if (label) {
                                  label += ': ';
                              }
                              if (context.dataset.label === 'Kulutus') {
                                  label += context.raw + ' kWh';
                              } else {
                                  label += context.raw + ' €';
                              }
                              return label;
                          }
                      }
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
                      font: {
                        size: 14,
                        weight: 'bold',
                    }
                      
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
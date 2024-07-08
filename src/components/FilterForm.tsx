import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { FetchDataService } from '../services/FetchDataService';
import DataParams from '../models/DataParams';  // Import the default export
import '../styles/filterform.css';  // Ensure to create and import this CSS file for additional styles

const FilterForm: React.FC = () => {
  const [fixedPrice, setFixedPrice] = useState<number | ''>('');
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [resultData, setResultData] = useState<null | {
    totalConsumptionPrice: number,
    totalFixedPrice: number,
    cheaperOption: string
  }>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (fixedPrice !== '' && csvFile) {
      const params: DataParams = {
        fixedPrice: Number(fixedPrice),
        csvFile
      };

      try {
        const data = await FetchDataService(params);
        setResultData(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again.');
        setResultData(null);
      }
    } else {
      alert('Please fill in the required fields.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCsvFile(e.target.files[0]);
    }
  };

  return (
    <Container className="filter-form-container">
      <div className="section">
        <h2>Compare your electricity consumption with fixed and spot electricity!</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="fixedPrice">
              <Form.Label>Fixed Price:</Form.Label>
              <Form.Control
                type="number"
                value={fixedPrice}
                onChange={(e) => setFixedPrice(Number(e.target.value))}
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="csvFile">
              <Form.Label>Your data:</Form.Label>
              <Form.Control
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                required
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" className="calculate-btn">
            Calculate
          </Button>
        </Form>

        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

        {resultData && (
          <div className="result-data mt-4">
            <h3>Calculation Results:</h3>
            <p>Pörssisähkön hinta: {resultData.totalConsumptionPrice.toFixed(2)}</p>
            <p>Kiinteän sähkön hinta:: {resultData.totalFixedPrice.toFixed(2)}</p>
            <p>Halvempi vaihtoehto: {resultData.cheaperOption}</p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default FilterForm;

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FetchDataService } from '../services/FetchDataService';
import { DataParams } from '../models/DataParams';

const FilterForm: React.FC = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [fixedPrice, setFixedPrice] = useState<number | ''>('');
  const [housingType, setHousingType] = useState('');
  const [electricCar, setElectricCar] = useState(false);
  const [workTime, setWorkTime] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (startDate && endDate && fixedPrice !== '') {
      const params: DataParams = {
        startDate,
        endDate,
        fixedPrice: Number(fixedPrice),
        housingType,
        electricCar,
        workTime
      };

      try {
        const data = await FetchDataService(params);
        console.log(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      alert('Please fill in the required fields.');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="startDate">
            <Form.Label>Start Date:</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="endDate">
            <Form.Label>End Date:</Form.Label>
            <Form.Control
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </Form.Group>
        </Row>

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
          <Form.Group as={Col} controlId="housingType">
            <Form.Label>Housing Type:</Form.Label>
            <Form.Control
              as="select"
              value={housingType}
              onChange={(e) => setHousingType(e.target.value)}
            >
              <option value="">Select...</option>
              <option value="DetachedHouse">Omakotitalo</option>
              <option value="ApartmentBuiding">Kerrostalo</option>
              <option value="TownHouse">Rivitalo</option>
            </Form.Control>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="electricCar">
            <Form.Check
              type="checkbox"
              label="Electric Car Availability"
              checked={electricCar}
              onChange={(e) => setElectricCar(e.target.checked)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="workTime">
            <Form.Label>Work Time:</Form.Label>
            <Form.Control
              as="select"
              value={workTime}
              onChange={(e) => setWorkTime(e.target.value)}
            >
              <option value="">Select...</option>
              <option value="dayWorker">Päivätyöläinen</option>
              <option value="eveningWorker">Ilta</option>
            </Form.Control>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default FilterForm;

import React from 'react';
import FilterForm from './components/FilterForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-center">
          <Col md="auto">
            <h1>Tempus Electrica</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6}>
            <FilterForm />

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;

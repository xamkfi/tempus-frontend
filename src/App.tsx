import React from 'react';
import FilterForm from './components/FilterForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Instructions from './components/Instructions'; // Correct the path if necessary

const App: React.FC = () => {
  return (
    <div className="App">
      <Container fluid>
        <Row className="justify-content-center">
          <Col md="auto">
            <h1>Tempus Electrica</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}> 
            
          </Col>
        </Row>
      </Container>

      <Router>
        <Routes>
          <Route path="/" element={<FilterForm />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

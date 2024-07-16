import React from 'react';
import FilterForm from './components/FilterForm';
import DirectiveCalculation from './components/DirectiveCalculation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Instructions from './components/Instructions'; // Correct the path if necessary

const App: React.FC = () => {
  //test commit
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
            
            <FilterForm />
            <DirectiveCalculation />

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

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const FormContainer = () => {
  const [searchTerm, setSerarchTerm] = useState(null);
  const navigate = useNavigate();

  const dropdownChangeHandler = (event) => {
    setSerarchTerm(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (searchTerm) {
      navigate(`/grid/${searchTerm}`);
    }
  };
  // value='https://www.ag-grid.com/example-assets/olympic-winners.json'/
  return (
    <Container fluid>
      <Row>
        <Col>
          <Form onSubmit={submitFormHandler}>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Label>Choose data set</Form.Label>
              <Form.Select
                size='sm'
                name='dropDown'
                onChange={dropdownChangeHandler}
              >
                <option>Default Option</option>
                <option value='olympic-winners'>Winner List</option>
                <option>Data set 2</option>
                <option>Data set 3</option>
              </Form.Select>
            </Form.Group>

            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;

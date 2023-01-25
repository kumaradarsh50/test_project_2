import React, { Fragment, useState } from 'react';

import { Navigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const FormComponent = () => {
  const [dataSelected, setDataSelected] = useState('');
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    dropDown: '',
  });

  const changeDataHandler = (event) => {
    console.log('event', event.currentTarget.value);
    setDataSelected(event.currentTarget.value);
    setUser({ user: true });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (formData.name && formData.country && formData.dropDown) {
      setUser({ user: true });
      setFormData({
        name: '',
        country: '',
        dropDown: '',
      });
    }
  };

  const formChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <Container className='d-flex align-items-center justify-content-center'>
      <div>
        {user && <Navigate to='/grid' replace={true} data={dataSelected} />}

        <Form onSubmit={formSubmitHandler}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label name='name'>Name </Form.Label>
            <Form.Control
              type='text'
              name='name'
              placeholder='Enter Name'
              onChange={formChangeHandler}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Country </Form.Label>
            <Form.Control
              type='text'
              name='country'
              placeholder='Enter Country Name'
              onChange={(event) => formChangeHandler(event)}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Select data from below table </Form.Label>
            <Form.Select
              size='sm'
              name='dropDown'
              // onChange={(event) => changeDataHandler(event)}
              onChange={formChangeHandler}
            >
              <option>Default Option</option>
              <option value='https://www.ag-grid.com/example-assets/olympic-winners.json'>
                Data set 1
              </option>
              <option>Data set 2</option>
              <option>Data set 3</option>
            </Form.Select>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default FormComponent;

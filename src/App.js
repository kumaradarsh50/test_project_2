import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { FormContainer, GridContainer } from './container';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<FormContainer />} />
      <Route path='/grid/:searchTerm' element={<GridContainer />} />
    </Routes>
  </BrowserRouter>
);

export default App;

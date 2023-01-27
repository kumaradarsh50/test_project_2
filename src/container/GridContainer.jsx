import React, { useState, useEffect, useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import { Container } from 'react-bootstrap';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { fetchApiHandler } from '../utils/fetchApiHandler';

const GridContainer = () => {
  const [rowData, setRowData] = useState([]);
  const { searchTerm } = useParams();
  const [header, setHeader] = useState([]);
  const [selectFormPage, setSelectFormPage] = useState(null);

  const getHeader = () => {
    if (rowData.length > 0) {
      rowData.map((item) => {
        const header = Object.keys(item);
        setHeader(header);
      });
    }
  };
  // gets called once, no dependencies, loads the grid data
  useEffect(() => {
    fetchApiHandler(`${searchTerm}`).then((data) => setRowData(data));
  }, [searchTerm]);

  useEffect(() => {
    getHeader();
  }, [rowData]);

  const columnDefs = useMemo(
    () => [
      { field: 'athlete' },
      { field: 'age' },
      { field: 'country' },
      { field: 'year' },
      { field: 'date' },
      { field: 'sport' },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' },
      { field: 'total' },
    ],
    []
  );

  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      sortable: true,
    }),
    []
  );
  const backToFormHandler = () => {
    setSelectFormPage({ form: true });
  };

  return (
    <Container>
      <div style={{ width: '90vw', margin: '0 auto' }}>
        {selectFormPage && <Navigate to='/' replace={true} />}
        <button style={{ marginBottom: '2rem' }} onClick={backToFormHandler}>
          Go to form
        </button>
        <div className='ag-theme-alpine' style={{ height: 400, width: '100%' }}>
          <AgGridReact
            className='ag-theme-alpine'
            animateRows='true'
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            enableRangeSelection='true'
            rowData={rowData}
            rowSelection='multiple'
            suppressRowClickSelection='true'
          ></AgGridReact>
        </div>
      </div>
    </Container>
  );
};

export default GridContainer;

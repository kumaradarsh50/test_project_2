import React, { useState, useEffect, useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import { Container } from 'react-bootstrap';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Aggrid = ({ dataUrl }) => {
  const [rowData, setRowData] = useState([]);
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
  console.log('datausr');
  // gets called once, no dependencies, loads the grid data
  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      // https://www.ag-grid.com/example-assets/olympic-winners.json
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

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

          {/* <table className='table' style={{ width: '90vw' }}>
          <thead>
            <tr>
              {header.length > 0 &&
                header.map((item, index) => {
                  return <th key={index}>{item.toUpperCase()}</th>;
                })}
            </tr>
          </thead>

          {rowData.length > 0 &&
            rowData.map((item, index) => {
              const {
                athlete,
                age,
                country,
                year,
                date,
                sport,
                gold,
                silver,
                bronze,
                total,
              } = item;
              return (
                <tbody key={index}>
                  <tr>
                    <td>{athlete}</td>
                    <td>{age}</td>
                    <td>{country}</td>
                    <td>{year}</td>
                    <td>{date}</td>
                    <td>{sport}</td>
                    <td>{gold}</td>
                    <td>{silver}</td>
                    <td>{bronze}</td>
                    <td>{total}</td>
                  </tr>
                </tbody>
              );
            })}
        </table> */}
        </div>
      </div>
    </Container>
  );
};

export default Aggrid;

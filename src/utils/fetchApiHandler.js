import axios from 'axios';

// 'https://www.ag-grid.com/example-assets/olympic-winners.json'
const BASE_URL = 'https://www.ag-grid.com/example-assets';

export const fetchApiHandler = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}.json`);
  return data;
};

import axios from 'axios';
import { DataParams } from '../models/DataParams'; 

const API_URL = 'https://localhost:7122/api/ElectricityPriceData';

export const FetchDataRepository = async (params: DataParams) => {
  const response = await axios.get(API_URL, { params });
  return response.data;
};
export default FetchDataRepository
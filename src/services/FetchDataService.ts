import { DataParams } from '../models/DataParams';
import axios from 'axios';

export const FetchDataService = async (params: DataParams): Promise<DataParams> => {
  const formData = new FormData();
  if (params.csvFile) {
    formData.append('file', params.csvFile);
  }

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_FINGRID_SERVICE_URL}?fixedPrice=${params.fixedPrice}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data as DataParams; 
  } catch (error) {
    throw error;
  }
};


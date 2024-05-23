
import { FetchDataRepository } from '../repositories/FetchDataRepository';
import { DataParams } from '../models/DataParams';

export const FetchDataService = async (params: DataParams) => {
    const data = await FetchDataRepository(params);
    
    return data;
  };
export default FetchDataService

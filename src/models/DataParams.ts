export interface DataParams {
  fixedPrice: number;
  csvFile?: File;
  totalSpotPrice?: number;
  totalFixedPrice?: number;
  cheaperOption?: string;
  totalConsumption?: number; 
  startDate?: string;  
  endDate?: string;    
  priceDifference?: number;
  dailyData?: Array<{
    day: string;
    spotPrice: number;
    fixedPrice: number;
    consumption: number;  
    
  }>;
  weeklyData?: Array<{
    year: number;
    week: number;
    spotPrice: number;
    fixedPrice: number;
    consumption: number;  
  }>;
  monthlyData?: Array<{
    year: number;
    month: number;
    spotPrice: number;
    fixedPrice: number;
    consumption: number;  
  }>;
}

export default DataParams;

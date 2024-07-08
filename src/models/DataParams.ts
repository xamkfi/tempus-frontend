export interface DataParams {
  // startDate: string;
  // endDate: string;
  fixedPrice: number;
  // housingType?: string;
  // electricCarCount?: number; // Changed to lowercase "number"
  // numberOfPeople: number;    // Changed to lowercase "number"
  // heatingType: string;
  // workTime?: string;
  csvFile?: File;   
  totalConsumptionPrice?: number;
  totalFixedPrice?: number;
  cheaperOption?: string;
}

export default DataParams; // Exporting the interface as default

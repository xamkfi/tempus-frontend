export interface FormDataParams {
  year: number;
  directiveFixedPrice: number;
  houseType: string;
  squareMeters: number;
  workShiftType: string;
  heatingType: string;
  hasElectricCar: boolean;
  electricCarCount?: number;
  hasSauna: boolean;
  saunaHeatingFrequency?: number;
  hasFirePlace: boolean;
  firePlaceHeatingFrequency?: number;
  numberOfResidents: number;
  electricCarKwhUsagePerYear?: number;
  solarPanelCount: number;
}

export interface CalculationResult {
  TotalFixedPriceCost: number;
  TotalSpotPriceCost: number;
  TotalDirectiveConsumption: number;
  CheaperOption: string;
  CostDifference: number;
  AverageHourlySpotPrice: number;
  MonthlyData: MonthlyData[];
}

export interface MonthlyData {
  Month: number;
  Consumption: number;
  SpotPriceAverageOfMonth: number;
  FixedPriceAverageOfMonth: number;
  FixedPriceTotal: number;
  SpotPriceTotal: number;
  AverageConsumptionPerHour: number;
}

export default FormDataParams;

// dailyData?: Array<{
//   day: string;
//   spotPrice: number;
//   fixedPrice: number;
//   consumption: number;  // Lisää tämä rivi
// }>;

// CalculationResult?: Array<{
//   TotalFixedPriceCost: number;
//   TotalSpotPriceCost: number;
//   TotalDirectiveConsumption: number;
//   CheaperOption: string;
//   CostDifference: number;
//   AverageHourlySpotPrice: number;
//   MonthlyData: MonthlyData[];
// }>

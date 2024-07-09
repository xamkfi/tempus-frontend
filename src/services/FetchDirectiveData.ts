import { FormDataParams, CalculationResult } from '../models/FormDataParams';

export const calculatePriceAndConsumption = async (formData: FormDataParams): Promise<CalculationResult> => {
    // Construct the query parameters
    const queryParams = new URLSearchParams({
        Year: formData.year.toString(),
        FixedPrice: formData.directiveFixedPrice.toString(),
        HouseType: formData.houseType,
        SquareMeters: formData.squareMeters.toString(),
        WorkShiftType: formData.workShiftType,
        HeatingType: formData.heatingType,
        HasElectricCar: formData.hasElectricCar.toString(),
        NumberOfCars: formData.electricCarCount?.toString() || '',
        HasSauna: formData.hasSauna.toString(),
        SaunaHeatingFrequency: formData.saunaHeatingFrequency?.toString() || '',
        HasFireplace: formData.hasFirePlace.toString(),
        FireplaceFrequency: formData.firePlaceHeatingFrequency?.toString() || '',
        NumberOfResidents: formData.numberOfResidents.toString(),
        ElectricCarkWhUsagePerYear: formData.electricCarKwhUsagePerYear?.toString() || '',
        SolarPanel: formData.solarPanelCount.toString()
    });

    // Make the GET request
    const response = await fetch(`https://localhost:7008/api/FrontEnd/CalculatePriceAndConsumption?${queryParams}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
        console.log(queryParams.toString());
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data: CalculationResult = await response.json();
    console.log('Received data:', data);
    return data;
};

export default calculatePriceAndConsumption;
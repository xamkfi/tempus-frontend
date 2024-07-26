import { FormDataParams } from '../models/FormDataParams';

export interface ValidationError {
    field: string;
    message: string;
}

export const validateFormData = (formData: FormDataParams, currentStep: number): ValidationError[] => {
    const errors: ValidationError[] = [];

    if (currentStep === 1) {
        if (formData.year <= 0) {
            errors.push({ field: 'year', message: 'Year must be greater than zero.' });
        } else if (formData.year > new Date().getFullYear()) {
            errors.push({ field: 'year', message: 'Year cannot be in the future.' });
        }
        else if(formData.year <= 2014){
            errors.push({ field: 'year', message: 'We dont have data before year 2015.' });
        }
        
        if (formData.directiveFixedPrice <= 0) {
            errors.push({ field: 'directiveFixedPrice', message: 'Fixed Price must be greater than zero.' });
        }
    }

    if (currentStep === 2) {
        if(!formData.houseType){
            console.log(formData.houseType.toString())
            errors.push({ field: 'houseType', message: 'You must select a house type.' });
        }
    }
    
    if (currentStep === 3) {
        if (formData.squareMeters <= 0) {
            errors.push({ field: 'squareMeters', message: 'Square Meters must be greater than zero.' });
        }
        if (formData.numberOfResidents <= 0) {
            errors.push({ field: 'numberOfResidents', message: 'You must select at least one resident.' });
        }
    }

    if (currentStep === 3) {
        if(!formData.workShiftType){
            console.log(formData.workShiftType.toString())
            errors.push({ field: 'workShiftType', message: 'You must select a workshift type.' });
        }
    }

    if (formData.hasSauna && !formData.saunaHeatingFrequency) {
        errors.push({ field: 'saunaHeatingFrequency', message: 'Sauna heating frequency is required when sauna is selected.' });
    }


    if (formData.hasSauna) {
        if (!formData.saunaHeatingFrequency || formData.saunaHeatingFrequency <= 0) {
            errors.push({ field: 'saunaHeatingFrequency', message: 'Sauna heating frequency is required and must be greater than zero when sauna is selected.' });
        }
    }

    if (formData.hasFirePlace && !formData.firePlaceHeatingFrequency) {
        errors.push({ field: 'firePlaceHeatingFrequency', message: 'Fireplace heating frequency is required when fireplace is selected.' });
    }

    if (formData.hasFirePlace) {
        if (!formData.firePlaceHeatingFrequency || formData.firePlaceHeatingFrequency <= 0) {
            errors.push({ field: 'firePlaceHeatingFrequency', message: 'Fireplace heating frequency is required and must be greater than zero when fireplace is selected.' });
        }
    }

    if (formData.hasElectricCar) {
        if (!formData.electricCarCount || formData.electricCarCount <= 0) {
            errors.push({ field: 'electricCarCount', message: 'Number of cars is required when electric car is selected and must be greater than zero.' });
        }

        if (!formData.electricCarKwhUsagePerYear || formData.electricCarKwhUsagePerYear <= 0) {
            errors.push({ field: 'electricCarKwhUsagePerYear', message: 'Electric car kWh usage per year is required and must be greater than zero when electric car is selected.' });
        }
    }

    if (currentStep === 4) {
        if(!formData.heatingType){
            console.log(formData.heatingType.toString())
            errors.push({ field: 'heatingType', message: 'You must select a heating type.' });
        }
    }

    if (currentStep === 5 && formData.hasFloorHeating) {
        if (formData.floorHeatingSquareMeters === undefined || formData.floorHeatingSquareMeters === null) {
            errors.push({ field: 'floorHeatingSquareMeters', message: 'Floor Heating Squaremeters is required.' });
        } else if (formData.floorHeatingSquareMeters <= 0) {
            errors.push({ field: 'floorHeatingSquareMeters', message: 'Floor Heating Squaremeters must be greater than zero.' });
        }
    }

    if ((formData.houseType === 'DetachedHouse' || formData.houseType === 'Cottage') && formData.hasSolarPanels) {
        if (!formData.solarPanelCount || formData.solarPanelCount <= 0) {
            errors.push({ field: 'solarPanelCount', message: 'Solar panel count is required and must be greater than zero when solar panel is selected in a detached house or cottage.' });
        }
    }

    return errors;
};

export default validateFormData;
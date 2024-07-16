import React, { useState } from "react";
import '../styles/DirectiveCalculation.css';
import { FormDataParams, CalculationResult } from '../models/FormDataParams';
import { calculatePriceAndConsumption } from '../services/FetchDirectiveData';

const ElectricityPriceForm: React.FC = () => {
    const initialFormData: FormDataParams = {
        year: new Date().getFullYear(),
        directiveFixedPrice: 0,
        houseType: '',
        squareMeters: 0,
        workShiftType: '',
        heatingType: '',
        hasElectricCar: false,
        electricCarCount: 0,
        electricCarKwhUsagePerYear: 0,
        hasSauna: false,
        saunaHeatingFrequency: 0,
        hasFirePlace: false,
        firePlaceHeatingFrequency: 0,
        numberOfResidents: 0,
        solarPanelCount: 0
    };

    const [formData, setFormData] = useState<FormDataParams>(initialFormData);
    const [result, setResult] = useState<CalculationResult | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
  
      if (type === 'checkbox') {
          const isChecked = (e.target as HTMLInputElement).checked;
          setFormData({
              ...formData,
              [name]: isChecked
          });
      } else {
          setFormData({
              ...formData,
              [name]: type === 'number' ? parseFloat(value) : value
          });
      }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await calculatePriceAndConsumption(formData);
            console.log('Result data:', data);
            setResult(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container">
            <h1>Electricity Price Directive Calculation</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Year:</label>
                    <input type="number" name="year" value={formData.year} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Fixed Price:</label>
                    <input type="number" name="directiveFixedPrice" value={formData.directiveFixedPrice} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>House Type:</label>
                    <select name="houseType" value={formData.houseType} onChange={handleChange} required>
                        <option value="">Select House Type</option>
                        <option value="Apartmenthouse">Apartmenthouse</option>
                        <option value="Terracedhouse">Terracedhouse</option>
                        <option value="Detachedhouse">Detachedhouse</option>
                        <option value="Cottage">Cottage</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Square Meters:</label>
                    <input type="number" name="squareMeters" value={formData.squareMeters} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Work Shift Type:</label>
                    <select name="workShiftType" value={formData.workShiftType} onChange={handleChange} required>
                        <option value="">Select Work Shift Type</option>
                        <option value="DayWorker">DayWorker</option>
                        <option value="ShiftWorker">ShiftWorker</option>
                        <option value="RemoteWorker">RemoteWorker</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Heating Type:</label>
                    <select name="heatingType" value={formData.heatingType} onChange={handleChange} required>
                        <option value="">Select Heating Type</option>
                        <option value="ElectricHeating">ElectricHeating</option>
                        <option value="DistrictHeating">DistrictHeating</option>
                        <option value="GeothermalHeating">GeothermalHeating</option>
                        <option value="OilHeating">OilHeating</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Has Electric Car:</label>
                    <input type="checkbox" name="hasElectricCar" checked={formData.hasElectricCar} onChange={handleChange} />
                </div>
                {formData.hasElectricCar && (
                    <>
                        <div className="form-group">
                            <label>Number of Electric Cars:</label>
                            <input type="number" name="electricCarCount" value={formData.electricCarCount} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Electric Car kWh Usage Per Year:</label>
                            <input type="number" name="electricCarKwhUsagePerYear" value={formData.electricCarKwhUsagePerYear} onChange={handleChange} />
                        </div>
                    </>
                )}
                <div className="form-group">
                    <label>Has Sauna:</label>
                    <input type="checkbox" name="hasSauna" checked={formData.hasSauna} onChange={handleChange} />
                </div>
                {formData.hasSauna && (
                    <div className="form-group">
                        <label>Sauna Heating Frequency:</label>
                        <input type="number" name="saunaHeatingFrequency" value={formData.saunaHeatingFrequency} onChange={handleChange} />
                    </div>
                )}
                <div className="form-group">
                    <label>Has Fireplace:</label>
                    <input type="checkbox" name="hasFirePlace" checked={formData.hasFirePlace} onChange={handleChange} />
                </div>
                {formData.hasFirePlace && (
                    <div className="form-group">
                        <label>Fireplace Heating Frequency:</label>
                        <input type="number" name="firePlaceHeatingFrequency" value={formData.firePlaceHeatingFrequency} onChange={handleChange} />
                    </div>
                )}
                <div className="form-group">
                    <label>Number of Residents:</label>
                    <input type="number" name="numberOfResidents" value={formData.numberOfResidents} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Solar Panel Count:</label>
                    <input type="number" name="solarPanelCount" value={formData.solarPanelCount} onChange={handleChange} required />
                </div>
                <button type="submit">Calculate</button>
            </form>

            {result && (
                <div className="results">
                    <h2>Calculation Results</h2>
                    <p>Total Fixed Price Cost: {result.TotalFixedPriceCost}</p>
                    <p>Total Spot Price Cost: {result.TotalSpotPriceCost}</p>
                    <p>Total Directive Consumption: {result.TotalDirectiveConsumption}</p>
                    <p>Cheaper Option: {result.CheaperOption}</p>
                    <p>Cost Difference: {result.CostDifference}</p>
                    <p>Average Hourly Spot Price: {result.AverageHourlySpotPrice}</p>
                    <h3>Monthly Data</h3>
                    {Array.isArray(result.MonthlyData) && result.MonthlyData.length > 0 ? (
                        result.MonthlyData.map((month, index) => (
                            <div key={index}>
                                <h5>Month: {month.Month}</h5>
                                <p>Consumption: {month.Consumption}</p>
                                <p>Spot Price Average Of Month: {month.SpotPriceAverageOfMonth}</p>
                                <p>Fixed Price Average Of Month: {month.FixedPriceAverageOfMonth}</p>
                                <p>Fixed Price Total: {month.FixedPriceTotal}</p>
                                <p>Spot Price Total: {month.SpotPriceTotal}</p>
                                <p>Average Consumption Per Hour: {month.AverageConsumptionPerHour}</p>
                            </div>
                        ))
                    ) : (
                        <p>No monthly data available.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default ElectricityPriceForm;
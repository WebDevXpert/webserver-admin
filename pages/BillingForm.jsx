import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

// const response = await fetch('/api/submitBillingForm', {
const BillingForm = () => {
    const [accountNumbers, setAccountNumbers] = useState([]);
    const [billingTypes, setBillingTypes] = useState([]);

    const engineeringUnits = {
        Electric: ["kWh", "MWh"],
        Natural_Gas: ["Therms", "SCF"],
        Propane: ["Gallons", "Pounds"],
    };

    const [formData, setFormData] = useState({
        accountNumber: '',
        billType: 'Electric',
        serviceStartDate: '',
        serviceEndDate: '',
        billAmount: '',
        usageAmount: '',
        engineeringUnit: engineeringUnits['Electric'][0],
    });

    useEffect(() => {
        const fetchAccountNumbers = async () => {
            try {
                const response = await fetch('/api/getAccount');
                if (!response.ok) {
                    throw new Error('Failed to fetch account numbers');
                }
                const data = await response.json();
                console.log("Fetched account numbers:", data);
                setAccountNumbers(data);
            } catch (error) {
                console.error('Error fetching account numbers:', error);
                toast.error('Failed to fetch account numbers');
            }
        };

        const fetchBillingTypes = async () => {
            try {
                const response = await fetch(`/api/getBillType`);
                if (!response.ok) {
                    throw new Error('Failed to fetch billing types');
                }
                const data = await response.json();
                console.log('Fetched billing types:', data);
                setBillingTypes(data);
            } catch (error) {
                console.error('Error fetching billing types:', error);
                toast.error('Failed to fetch billing types');
            }
        };

        fetchAccountNumbers();
        fetchBillingTypes();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'billType') {
            console.log("Selected bill type:", value);
            const selectedBillType = value.charAt(0).toUpperCase() + value.slice(1);
            console.log("Engineering units:", engineeringUnits[selectedBillType]);
            const defaultEngineeringUnit = engineeringUnits[selectedBillType]?.[0] || '';

            setFormData({
                ...formData,
                [name]: value,
                engineeringUnit: defaultEngineeringUnit,
            });
        } else {
            console.log("Updated form data:", { ...formData, [name]: value });
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedFormData = {
            ...formData,
            accountNumber: formData.accountNumber || accountNumbers[0]?.accountNumber,
            serviceStartDate: formData.serviceStartDate || new Date().toISOString(),
            serviceEndDate: formData.serviceEndDate || new Date().toISOString(),
            billAmount: parseFloat(formData.billAmount) || 0,
            usageAmount: parseFloat(formData.usageAmount) || 0,
        };

        try {
            const response = await fetch('https://wxj7a06cdl.execute-api.us-east-1.amazonaws.com/default/carbonopsPutRecord', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedFormData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            console.log('Form submitted successfully');
            toast.success("Billing form created");
        } catch (error) {
            console.error('Error:', error);
            toast.error(error.message || 'Failed to submit form');
        }

        // Reset the form after successful submission
        setFormData({
            accountNumber: '',
            billType: 'Electric',
            serviceStartDate: '',
            serviceEndDate: '',
            billAmount: '',
            usageAmount: '',
            engineeringUnit: engineeringUnits['Electric'][0],
        });
    };

    return (
        <div className="min-h-screen">
            <div className="max-w-md mx-auto mt-10 p-5 bg-sky-50 rounded-md shadow-md dark:bg-light-gray dark:text-white">
                <h2 className="text-2xl font-semibold mb-8 dark:bg-light-gray dark:text-white">Billing Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="accountNumber" className="block text-gray-600 font-semibold mb-2 dark:bg-light-gray dark:text-white">
                            Account Number
                        </label>
                        <select
                            id="accountNumber"
                            name="accountNumber"
                            className="w-full p-2 border rounded-md dark:bg-light-gray dark:text-white"
                            onChange={handleChange}
                            value={formData.accountNumber}
                        >
                            <option value="" disabled>Select Account Number</option>
                            {accountNumbers.map((account) => (
                                <option key={account._id} value={account.accountNumber}>{account.accountNumber}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="billType" className="block text-gray-600 font-semibold mb-2 dark:bg-light-gray dark:text-white">
                            Bill Type
                        </label>
                        <select
                            id="billType"
                            name="billType"
                            className="w-full p-2 border rounded-md dark:bg-light-gray dark:text-white"
                            onChange={handleChange}
                            value={formData.billType}
                        >
                            <option value="" disabled>Select Billing Types</option>
                            {billingTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="serviceStartDate" className="block text-gray-600 font-semibold mb-2 dark:bg-light-gray dark:text-white">
                            Service Start Date
                        </label>
                        <input
                            type="date"
                            id="serviceStartDate"
                            name="serviceStartDate"
                            className="w-full p-2 border rounded-md dark:bg-light-gray dark:text-white"
                            value={formData.serviceStartDate}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="serviceEndDate" className="block text-gray-600 font-semibold mb-2 dark:bg-light-gray dark:text-white">
                            Service End Date
                        </label>
                        <input
                            type="date"
                            id="serviceEndDate"
                            name="serviceEndDate"
                            className="w-full p-2 border rounded-md dark:bg-light-gray dark:text-white"
                            value={formData.serviceEndDate}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="billAmount" className="block text-gray-600 font-semibold mb-2 dark:bg-light-gray dark:text-white">
                            Bill Amount ($)
                        </label>
                        <input
                            type="number"
                            id="billAmount"
                            name="billAmount"
                            className="w-full p-2 border rounded-md dark:bg-light-gray dark:text-white"
                            placeholder="Enter bill amount"
                            value={formData.billAmount}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="usageAmount" className="block text-gray-600 font-semibold mb-2 dark:bg-light-gray dark:text-white">
                            Usage Amount
                        </label>
                        <input
                            type="number"
                            id="usageAmount"
                            name="usageAmount"
                            className="w-full p-2 border rounded-md dark:bg-light-gray dark:text-white"
                            placeholder="Enter usage amount"
                            value={formData.usageAmount}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="engineeringUnit" className="block text-gray-600 font-semibold mb-2 dark:bg-light-gray dark:text-white">
                            Engineering Unit
                        </label>
                        <select
                            id="engineeringUnit"
                            name="engineeringUnit"
                            className="w-full p-2 border rounded-md dark:bg-light-gray dark:text-white"
                            value={formData.engineeringUnit}
                            onChange={handleChange}
                        >
                            {(engineeringUnits[formData.billType] || []).map((unit) => (
                                <option key={unit} value={unit}>{unit}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BillingForm;
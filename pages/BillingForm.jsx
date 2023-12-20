import React from 'react';

const BillingForm = () => {
    // Mock data for dropdowns (replace with actual data from your backend)
    const accountNumbers = ["12345", "67890"];
    const engineeringUnits = {
        electric: ["kWh", "MWh"],
        gas: ["Therms", "SCF"],
    };

    return (
        <div className='min-h-screen'>
            <div className="max-w-md mx-auto mt-10 p-5 bg-white rounded-md shadow-md dark:bg-light-gray dark:text-white">
                <h2 className="text-2xl font-semibold mb-8 dark:bg-light-gray dark:text-white">Billing Form</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="accountNumber" className="block text-gray-600 font-semibold mb-2 dark:bg-light-gray dark:text-white">
                            Account Number
                        </label>
                        <select
                            id="accountNumber"
                            name="accountNumber"
                            className="w-full p-2 border rounded-md dark:bg-light-gray dark:text-white"
                            defaultValue="" // Set a default value or leave it empty
                        >
                            <option value="" disabled>Select Account Number</option>
                            {accountNumbers.map((number) => (
                                <option key={number} value={number}>{number}</option>
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
                        >
                            <option value="electric">Electric</option>
                            <option value="gas">Gas</option>
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
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="billAmount" className="block text-gray-600 font-semibold mb-2 dark:bg-light-gray dark:text-white">
                            Bill Amount ($)
                        </label>
                        <input
                            type="text"
                            id="billAmount"
                            name="billAmount"
                            className="w-full p-2 border rounded-md dark:bg-light-gray dark:text-white"
                            placeholder="Enter bill amount"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="usageAmount" className="block text-gray-600 font-semibold mb-2 dark:bg-light-gray dark:text-white">
                            Usage Amount
                        </label>
                        <input
                            type="text"
                            id="usageAmount"
                            name="usageAmount"
                            className="w-full p-2 border rounded-md dark:bg-light-gray dark:text-white"
                            placeholder="Enter usage amount"
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
                        >
                            {/* Replace 'electric' with the actual value from the billType dropdown */}
                            {engineeringUnits['electric'].map((unit) => (
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

import React, { useState } from 'react';

const OnboardForm = () => {
    const [formData, setFormData] = useState({
        buNumber: '',
        billType: 'Electric',
        accountNumber: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/submitForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Form submitted successfully');
            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error:', error);
        }

        setFormData({
            buNumber: '',
            billType: 'Electric',
            accountNumber: '',
        });
    };

    return (
        <div className='min-h-screen flex items-center'>
            <div className="max-w-md mx-auto p-8 bg-indigo-500 rounded-md shadow-md dark:bg-light-gray dark:text-white">
                <h2 className="text-2xl font-semibold mb-4 dark:bg-light-gray dark:text-white">Site Onboard Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 dark:bg-light-gray dark:text-white" htmlFor="buNumber">
                            BU Number
                        </label>
                        <input
                            type="number"
                            id="buNumber"
                            name="buNumber"
                            value={formData.buNumber}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 dark:bg-light-gray dark:text-white"
                            required
                            maxLength="2"
                        />
                    </div>

                    <div className="mb-4 dark:bg-light-gray dark:text-white">
                        <label className="block text-gray-700 text-sm font-bold mb-2 dark:bg-light-gray dark:text-white" htmlFor="billType">
                            Bill Type
                        </label>
                        <select
                            id="billType"
                            name="billType"
                            value={formData.billType}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 dark:bg-light-gray dark:text-white"
                            required
                        >
                            <option value="Electric">Electric</option>
                            <option value="Natural Gas">Natural Gas</option>
                            <option value="Propane">Propane</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 dark:bg-light-gray dark:text-white" htmlFor="accountNumber">
                            Account Number
                        </label>
                        <input
                            type="text"
                            id="accountNumber"
                            name="accountNumber"
                            value={formData.accountNumber}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 dark:bg-light-gray dark:text-white"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OnboardForm;

import React, { useState } from 'react';
import { toast } from 'react-toastify';

const OnboardForm = () => {
    const initialState = {
        buNumber: '',
        billType: 'Electric',
        accountNumber: '',
        grid: 'AKGD',
    };

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://wxj7a06cdl.execute-api.us-east-1.amazonaws.com/default/carbonopsPutRecord', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    eventType: 'onboarding',
                    message: formData,
                }),
            });

            if (response.ok) {
                console.log('Form submitted successfully to AWS Lambda');
                toast.success('Onboard form created');
                router.push('/bu');
            } else {
                console.error('Failed to submit form');
                toast.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred');
        }

        setFormData(initialState);
    };

    return (
        <div className="min-h-screen flex items-center">
            <div className="max-w-md mx-auto p-8 bg-indigo-500 rounded-md shadow-md dark:bg-light-gray dark:text-white">
                <h2 className="text-2xl font-semibold mb-4 dark:bg-light-gray dark:text-white">Site Onboard Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 dark:bg-light-gray dark:text-white" htmlFor="buNumber">
                            BU Number
                        </label>
                        <input
                            type="text"
                            id="buNumber"
                            name="buNumber"
                            value={formData.buNumber}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 dark:bg-light-gray dark:text-white"
                            required
                            pattern="^BU\d{2}[A-Z]$"
                            placeholder='BU65D or BU65DS'
                            title="Please enter a valid BU number in the format BU + 2 digits + 1 uppercase letter"
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
                            maxLength="11"
                        />
                    </div>

                    {formData.billType === 'Electric' && (
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 dark:bg-light-gray dark:text-white" htmlFor="grid">
                                Grid
                            </label>
                            <select
                                id="grid"
                                name="grid"
                                value={formData.grid}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 dark:bg-light-gray dark:text-white"
                                required
                            >
                                <option value="AKGD">AKGD</option>
                                <option value="AKMS">AKMS</option>
                                <option value="AKGD">AKGD</option>
                                <option value="AKGD">AKGD</option>
                                <option value="AKGD">AKGD</option>
                                <option value="AKGD">AKGD</option>
                                <option value="AKGD">AKGD</option>
                                <option value="AKGD">AKGD</option>
                                <option value="AKGD">AKGD</option>
                                <option value="AKGD">AKGD</option>
                                <option value="AKGD">AKGD</option>
                            </select>
                        </div>
                    )}

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


// import React, { useState } from 'react';
// import { toast } from 'react-toastify';

// const OnboardForm = () => {
//     const initialState = {
//         buNumber: '',
//         billType: 'Electric',
//         accountNumber: '',
//         grid: 'AKGD',
//     };

//     const [formData, setFormData] = useState(initialState);

//     const handleChange = (e) => {
//         setFormData((prevData) => ({
//             ...prevData,
//             [e.target.name]: e.target.value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('/api/submitForm', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             const responseData = await response.json();
//             console.log('Server Response:', responseData);

//             if (response.ok) {
//                 console.log('Form submitted successfully');
//                 toast.success('Onboard form created');
//             } else {
//                 console.error('Failed to submit form');
//                 toast.error(responseData.error || 'Failed to submit form');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             toast.error(error.message || 'An error occurred');
//         }

//         setFormData(initialState);
//     };
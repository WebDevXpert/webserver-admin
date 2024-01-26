import React, { useState, useEffect } from 'react';

const Bu = () => {
    const [onboardForms, setOnboardForms] = useState([]);

    useEffect(() => {
        const fetchOnboardForms = async () => {
            try {
                const response = await fetch('/api/getOnboardForms');
                const data = await response.json();
                setOnboardForms(data.onboardForms);
            } catch (error) {
                console.error('Error fetching onboard forms:', error);
            }
        };

        fetchOnboardForms();
    }, []);

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Onboard Forms</h2>
            <div className="relative">
                <table className="w-10/12 ml-20 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-sm text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                BU Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Bill Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Account Number
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {onboardForms.map((form) => (
                            <tr key={form._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-7 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {form.buNumber}
                                </td>
                                <td className="px-7 py-4">
                                    {form.billType}
                                </td>
                                <td className="px-10 py-4">
                                    {form.accountNumber}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bu;

import React, { useState, useEffect } from 'react';

const Bu = () => {
    const [onboardForms, setOnboardForms] = useState([]);
    const [sortOrder, setSortOrder] = useState('newest');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOnboardForms = async () => {
            try {
                const response = await fetch('/api/getOnboardForms');
                const data = await response.json();
                let forms = data.onboardForms;
                if (sortOrder === 'newest') {
                    forms.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                } else if (sortOrder === 'oldest') {
                    forms.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                }
                setOnboardForms(forms);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching onboard forms:', error);
                setLoading(false);
            }
        };

        fetchOnboardForms();
    }, [sortOrder]);

    const handleSort = (order) => {
        setSortOrder(order);
    };

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Onboard Forms</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="relative">
                    <div className="mb-4">
                        <label className="text-sm font-semibold">Sort By:</label>
                        <select
                            className="ml-2 px-2 py-1 border rounded-md bg-gray-300 dark:bg-gray-700 dark:text-gray-50"
                            value={sortOrder}
                            onChange={(e) => handleSort(e.target.value)}
                        >
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </div>
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
                                <th scope="col" className="px-6 py-3">
                                    Grid
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {onboardForms.map((form) => (
                                <tr key={form._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-7 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {form.buNumber}
                                    </td>
                                    <td className="px-10 py-4">
                                        {form.accountNumber}
                                    </td>
                                    <td className="px-7 py-4">
                                        {form.billType}
                                    </td>
                                    {form.billType === 'Electric' ? (
                                        <td className="px-7 py-4">{form.grid}</td>
                                    ) : (
                                        <td className="px-7 py-4">N/A</td>
                                    )}

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Bu;
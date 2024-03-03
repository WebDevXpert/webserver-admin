import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Loader from '@/components/Loader';

const OnboardForm = () => {
    const router = useRouter();
    const initialState = {
        buNumber: '',
        billType: 'Electric',
        accountNumber: '',
        grid: 'AKGD',
    };

    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/submitForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const responseData = await response.json();

            if (response.ok) {
                await new Promise((resolve) => setTimeout(resolve, 3000));
                toast.success('Onboard form created');
                router.push('/bu');
            } else {
                toast.error(responseData.error || 'Failed to submit form');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred while submitting the form');
        } finally {
            setLoading(false);
            setFormData(initialState);
        }
    };

    return (
        <div className="mt-8">
            {loading ? (
                <div className='flex items-center justify-center h-screen'>
                    <Loader />
                </div>
            ) : (
                <>
                    <div className="max-w-sm mx-auto p-8 bg-sky-50 rounded-md shadow-md dark:bg-light-gray dark:text-white">
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
                                    pattern="^BU\d{4}[A-Z]?$"
                                    placeholder='BU65D or BU65DS'
                                    title="Please enter a valid BU number in the format BU + 4 digits + 1 optional uppercase letter"
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
                                    <option value="Natural Gas">Natural_Gas</option>
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
                                    pattern="^[A-Za-z0-9\-]{11,30}$"
                                    placeholder='ABC-1234567890'
                                    title="Account Number should contain between 11 and 30 characters including alphabets, digits, and hyphens"
                                    maxLength={30}
                                />
                            </div>

                            {formData.billType === 'Electric' && (
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 dark:bg-light-gray dark:text-white" htmlFor="grid">
                                        Grid
                                    </label>
                                    <select
                                        id="text"
                                        name="grid"
                                        value={formData.grid}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 dark:bg-light-gray dark:text-white"
                                        required
                                    >
                                        <option value="AKGD">AKGD</option>
                                        <option value="AKMS">AKMS</option>
                                        <option value="AZNM">AZNM</option>
                                        <option value="CAMX">CAMX</option>
                                        <option value="ERCT">ERCT</option>
                                        <option value="FRCC">FRCC</option>
                                        <option value="HIMS">HIMS</option>
                                        <option value="HIOA">HIOA</option>
                                        <option value="MROE">MROE</option>
                                        <option value="MROW">MROW</option>
                                        <option value="NEWE">NEWE</option>
                                        <option value="NWPP">NWPP</option>
                                        <option value="NYCW">NYCW</option>
                                        <option value="NYLI">NYLI</option>
                                        <option value="NYUP">NYUP</option>
                                        <option value="PRMS">PRMS</option>
                                        <option value="RFCE">RFCE</option>
                                        <option value="RFCM">RFCM</option>
                                        <option value="RFCW">RFCW</option>
                                        <option value="RMPA">RMPA</option>
                                        <option value="SPNO">SPNO</option>
                                        <option value="SPSO">SPSO</option>
                                        <option value="SRMV">SRMV</option>
                                        <option value="SRMW">SRMW</option>
                                        <option value="SRSO">SRSO</option>
                                        <option value="SRTV">SRTV</option>
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
                </>
            )}
        </div>
    );
};

export default OnboardForm;

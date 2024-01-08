import React, { useState, useEffect } from 'react';

const TopCards = () => {
    const [buNumbers, setBuNumbers] = useState([]);
    const [buNumbersCount, setBuNumbersCount] = useState(0);
    const [selectedBuNumber, setSelectedBuNumber] = useState(null);

    useEffect(() => {
        fetch('/api/buNumbers')
            .then(response => response.json())
            .then(data => {
                setBuNumbersCount(data.buNumbersCount);
            })
            .catch(error => console.error('Error fetching BU numbers:', error));
    }, []);

    const handleBuNumberChange = (event) => {
        setSelectedBuNumber(event.target.value);
    };

    return (
        <div className='gap-5 p-5 dark:bg-dark dark:text-white flex'>
            {/* Card 1 */}
            <div className='lg:col-span-3 w-1/2 bg-white flex justify-between border p-4 rounded-lg dark:bg-light-gray dark:text-white'>
                <div className='flex flex-col pb-4 dark:bg-light-gray dark:text-white'>
                    <p className='font-bold dark:bg-light-gray dark:text-white'><span className='text-2xl'>38,486</span> <span className='text-md'>lbs</span></p>
                    <p className='text-gray-600 dark:bg-light-gray dark:text-white mt-1'>Monthly Carbon</p>
                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg dark:bg-light-gray dark:text-white'>
                    <span className='text-green-700 text-lg dark:bg-light-gray dark:text-white'>+18%</span>
                </p>
            </div>

            {/* Card 2 */}
            <div className='lg:col-span-3 w-1/2 bg-white flex justify-between border p-4 rounded-lg dark:bg-light-gray dark:text-white'>
                <div className='flex flex-col pb-4 dark:bg-light-gray dark:text-white'>
                    <p className='font-bold dark:bg-light-gray dark:text-white'><span className='text-2xl'>3,57,213.376</span> <span className='text-md'>lbs</span></p>
                    <p className='text-gray-600 dark:bg-light-gray dark:text-white mt-2'>YTD Carbon</p>
                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg dark:bg-light-gray dark:text-white'>
                    <span className='text-green-700 text-lg dark:bg-light-gray dark:text-white'>+11%</span>
                </p>
            </div>

            {/* Card 3 (Dropdown) */}
            <div className='relative lg:col-span-3 w-1/2 bg-white flex justify-between border p-4 rounded-lg dark:bg-light-gray dark:text-white'>
                <p className='font-bold dark:bg-light-gray dark:text-white'>
                    {/* Total BU Numbers: <span className='text-2xl'>{buNumbersCount}</span> */}
                    Total BU Numbers: <span className='text-2xl'>6</span>
                </p>
                <select
                    className='bg-green-200 flex justify-center items-center p-2 rounded-lg dark:bg-light-gray dark:text-white'
                    value={selectedBuNumber}
                    onChange={handleBuNumberChange}
                >
                    <option value="" selected disabled>Select BU Number</option>
                    {/* {buNumbers.map((buNumber) => ( */}
                    {/* <option key={buNumber._id} value={buNumber._id}>{buNumber.name}</option> */}
                    <>
                        <option>34</option>
                        <option>89</option>
                        <option>79</option>
                        <option>45</option>
                        <option>65</option>
                        <option>37</option>
                    </>
                    {/* ))} */}
                </select>
            </div>
        </div>
    );
};

export default TopCards;

import React from 'react'

const TopCards = () => {
    return (
        <div className='grid lg:grid-cols-5 gap-4 p-4 dark:bg-dark dark:text-white'>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg dark:bg-light-gray dark:text-white'>
                <div className='flex flex-col w-full pb-4 dark:bg-light-gray dark:text-white'>
                    <p className='text-2xl font-bold dark:bg-light-gray dark:text-white'>$7,846</p>
                    <p className='text-gray-600 dark:bg-light-gray dark:text-white'>Daily Revenue</p>
                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg dark:bg-light-gray dark:text-white'>
                    <span className='text-green-700 text-lg dark:bg-light-gray dark:text-white'>+18%</span>
                </p>
            </div>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg dark:bg-light-gray dark:text-white'>
                <div className='flex flex-col w-full pb-4 dark:bg-light-gray dark:text-white'>
                    <p className='text-2xl font-bold dark:bg-light-gray dark:text-white'>$1,437,876</p>
                    <p className='text-gray-600 dark:bg-light-gray dark:text-white'>YTD Revenue</p>
                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg dark:bg-light-gray dark:text-white'>
                    <span className='text-green-700 text-lg dark:bg-light-gray dark:text-white'>+11%</span>
                </p>
            </div>
            <div className='bg-white flex justify-between w-full border p-4 rounded-lg dark:bg-light-gray dark:text-white'>
                <div className='flex flex-col w-full pb-4 dark:bg-light-gray dark:text-white'>
                    <p className='text-2xl font-bold dark:bg-light-gray dark:text-white'>11,437</p>
                    <p className='text-gray-600 dark:bg-light-gray dark:text-white'>Customers</p>
                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg dark:bg-light-gray dark:text-white'>
                    <span className='text-green-700 text-lg dark:bg-light-gray dark:text-white'>+17%</span>
                </p>
            </div>
        </div>
    )
}

export default TopCards
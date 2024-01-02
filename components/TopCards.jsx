import React from 'react'

const TopCards = () => {
    return (
        <div className=' gap-5 p-5 dark:bg-dark dark:text-white flex'>
            <div className='lg:col-span-3 w-1/2 bg-white flex justify-between  border p-4 rounded-lg dark:bg-light-gray dark:text-white'>
                <div className='flex flex-col pb-4 dark:bg-light-gray dark:text-white'>
                    <p className='text-2xl font-bold dark:bg-light-gray dark:text-white'>£ 38,486</p>
                    <p className='text-gray-600 dark:bg-light-gray dark:text-white mt-1'>Monthly Carbon</p>
                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg dark:bg-light-gray dark:text-white'>
                    <span className='text-green-700 text-lg dark:bg-light-gray dark:text-white'>+18%</span>
                </p>
            </div>
            <div className='lg:col-span-3 w-1/2 bg-white flex justify-between border p-4 rounded-lg dark:bg-light-gray dark:text-white'>
                <div className='flex flex-col pb-4 dark:bg-light-gray dark:text-white'>
                    <p className='text-2xl font-bold dark:bg-light-gray dark:text-white'>£ 3,57,213.376</p>
                    <p className='text-gray-600 dark:bg-light-gray dark:text-white mt-2'>YTD Carbon</p>
                </div>
                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg dark:bg-light-gray dark:text-white'>
                    <span className='text-green-700 text-lg dark:bg-light-gray dark:text-white'>+11%</span>
                </p>
            </div>

        </div>
    )
}

export default TopCards
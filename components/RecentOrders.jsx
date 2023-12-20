import React from 'react';
import { data } from '../data/data.js';
import { FaShoppingBag } from 'react-icons/fa';

const RecentOrders = () => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll dark:bg-light-gray dark:text-white'>
      <h1>Recent Orders</h1>
      <ul>
        {data.map((order, id) => (
          <li
            key={id}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer dark:bg-light-gray dark:text-white'
          >
            <div className='bg-purple-100 rounded-lg p-3 dark:bg-light-gray dark:text-white'>
              <FaShoppingBag className='text-purple-800 dark:bg-light-gray dark:text-white' />
            </div>
            <div className='pl-4'>
              <p className='text-gray-800 font-bold dark:bg-light-gray dark:text-white'>${order.total}</p>
              <p className='text-gray-400 text-sm dark:bg-light-gray dark:text-white'>{order.name.first}</p>
            </div>
            <p className='lg:flex md:hidden absolute right-6 text-sm dark:bg-light-gray dark:text-white'>{order.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;

import React from 'react'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  return (
    <div className='flex justify-between px-4 pt-4 dark:bg-medium dark:text-white py-3'>
      <h2>Dashboard</h2>
      <div className='flex flex-1 justify-end'><ThemeToggle /></div>
    </div>
  )
}

export default Header
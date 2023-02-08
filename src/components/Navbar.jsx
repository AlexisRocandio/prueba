
import React from 'react'

export const Navbar = ({brand}) => {
  return (
    <nav className="bg-gray-900">
    <div className='relative flex h-16 items-center justify-between'>
        <a className='flex flex-1 items-center justify-center bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium' href='/'>{brand}</a>
    </div>
  </nav>
  )
}
export default Navbar
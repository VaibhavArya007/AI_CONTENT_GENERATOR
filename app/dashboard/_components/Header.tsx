import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 bg-white shadow-sm border-b-2 flex justify-between items-center'>
      <div className='gap-2 flex items-center p-2 border rounded-md max-w-lg bg-white'>
        <Search/>
        <input type='text' placeholder='Search...' 
        className='outline-none'
        />
      </div>
      <div  className='items-center flex gap-5'>
        <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2 '>Join Membership, Just for $9.99/Month</h2>
        <UserButton/>
      </div>
    </div>
  )
}

export default Header

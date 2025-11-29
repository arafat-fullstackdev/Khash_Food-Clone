import React from 'react'

export default function Search() {
  return (
    <div className='flex items-center justify-between max-w-7xl mx-auto px-4 py-2'>
        <section className='text-orange-500 px-1'>DropDownM</section>
        <section className='border-2 '>
            <input type='text' placeholder='Search here'></input>
        </section>
        <section>Account</section>
    </div>
  )
}



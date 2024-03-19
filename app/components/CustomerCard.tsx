'use client'
import React from 'react'
import Image from 'next/image'
import menImg from './men.jpeg'

const CustomerCard = () => {
  return (
    <div>
        <div className='w-60 h-80'>
         <Image src={menImg} alt='customer' width={20} height={20} className='' />
                <div>
                 <h1 className='text-xl font-bold'>John Doe</h1>
                 <p></p>
                </div>
        </div>
    </div>
  )
}

export default CustomerCard
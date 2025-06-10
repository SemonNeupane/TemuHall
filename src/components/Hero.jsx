import React from 'react'

const Hero = () => {
  return (
    
    <div className='text-center pt-6 h-screen text-gray-800 bg-gradient-to-b from-white to-gray-100'>
      <p className='font-bold text-4xl '>Welcome To TemuHall</p>
      <i>Style That Speaks For You</i>
      <p>[Shop Now] [Explore Collections]</p>
      <div  className='p-4'>
        <p className='font-bold'>Featured Collection Section</p>
        <i>This week new arrivals in fashion</i>
      </div>
      <div className='pt-4 text-balance'>
        <p className='font-bold'>Why Choose Us?</p>
        <li>Premium, breathable fabrics</li>
        <li>Designed in-house for unique fits</li>
        <li>100% cruelty-free & sustainable</li>
        <li>Free shipping on orders over $50</li>
      </div>
    </div>
  )
}

export default Hero
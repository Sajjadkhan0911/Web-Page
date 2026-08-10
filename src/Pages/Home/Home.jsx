import React from 'react'
import Category from '../../Components/Category/Category'
import Products from '../../Components/Products/Products'
import Information from '../../Components/Information/Information'

const Home = () => {
  return (
    <div>
        <Information />
        <Category />
        <Products />
    </div>
  )
}

export default Home
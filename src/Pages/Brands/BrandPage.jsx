import React from 'react'
import { Navbar } from '../../components/Navbar'
import { Brands } from './Brands'
import { useLoaderData } from 'react-router-dom'

const BrandPage = () => {
    const brands = useLoaderData();
  return (
    <div className='p-5 py-40'>
        <h2 className='oswald text-4xl font-bold  mt-14 text-center'>The Brand Hub – Where Savings Begin</h2>
        <Navbar></Navbar>
        <Brands brands={brands}></Brands>
    </div>
  )
}

export default BrandPage
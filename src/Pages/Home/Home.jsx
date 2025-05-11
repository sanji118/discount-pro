import React from 'react'
import Header from '../../components/Header'
import TopBrands from './TopBrands'
import { Outlet, useLoaderData } from 'react-router-dom'
import BrandsOnSale from './BrandsOnSale'
import Description from './Description'

export const Home = () => {
  const brands = useLoaderData();
  return (
    <>
    <Header></Header>
    <TopBrands brands= {brands}></TopBrands>
    <Description></Description>
    <BrandsOnSale brands={brands}></BrandsOnSale>
    </>
    
  )
}

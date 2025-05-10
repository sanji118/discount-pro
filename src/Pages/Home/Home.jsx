import React from 'react'
import Header from '../../components/Header'
import { Navbar } from '../../components/Navbar'

import Welcome from './Welcome'
import BannerSlider from './BannerSlider'
import TopBrands from './TopBrands'

export const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <Welcome></Welcome>
    <BannerSlider></BannerSlider>
    <TopBrands></TopBrands>
    <Header></Header>
    
    </>
    
  )
}

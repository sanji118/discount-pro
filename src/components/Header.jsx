import React from 'react'
import { Navbar } from './Navbar'
import Welcome from '../Pages/Home/Welcome'
import BannerSlider from '../Pages/Home/BannerSlider'
import AuthNavbar from './AuthNavbar'

const Header = () => {
  return (
    <>
    <Navbar></Navbar>
    <Welcome></Welcome>
    <BannerSlider></BannerSlider>
    </>
  )
}

export default Header
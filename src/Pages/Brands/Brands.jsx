import React from 'react'
import { useLoaderData } from 'react-router-dom'

export const Brands = () => {
  const brands = useLoaderData();
  console.log(brands)
  return (
    <div>Brands</div>
  )
}

import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

export default function Root() {
  return (
    <div className='container mx-auto px-8'>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

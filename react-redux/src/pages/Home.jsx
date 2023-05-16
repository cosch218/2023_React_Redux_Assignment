import React from 'react'
import NavBarComp from '../components/NavBarComp'
import { Outlet } from 'react-router-dom'
import AddMemoComp from '../components/AddMemoComp'

export default function Home() {
  return (
    <div className='main'>
      <h1 className='main_title'>MEMO</h1>
      <NavBarComp/>
      <Outlet/>
      <AddMemoComp/>
    </div>
  )
}

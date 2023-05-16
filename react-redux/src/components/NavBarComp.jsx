import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBarComp() {
  return (
    <div className='navbar'>
      <NavLink to='/memo' className={({isActive})=>( isActive? "active" : "")}>메모</NavLink>
      <NavLink to='/like'>즐겨찾기</NavLink>
    </div>
  )
}

import React from 'react'
import Logo from '@/assets/Logo'
import MenuIcon from '@/assets/MenuIcon'
import Button from '@/components/Button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setMenu } from '@/app/slices/uiSlice'

const NavBar = () => {
  const dispatch = useDispatch()

  return (
    <nav className='h-14 bg-slate-300'>
      <ul className='flex justify-between items-center h-full'>
        <li><Logo /></li>
        <li onClick={() => dispatch(setMenu(true))} className='flex gap-3 mr-4 cursor-pointer sm:hidden'><MenuIcon/></li>
        {/* Si esta logeado, boton para crear post */}
        <li className='gap-5 mr-4 hidden sm:flex'>
          <Button actionType='primary'>Iniciar Sesión</Button>
          <Button actionType='primary'>Registrarse</Button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar

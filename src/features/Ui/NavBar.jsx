import React from 'react'
import Logo from '@/assets/Logo'
import MenuIcon from '@/assets/MenuIcon'
import Button from '@/components/Button'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useLogOutMutation } from '../../services/authApiSlice'
import { setMenu } from '@/app/slices/uiSlice'
import { selectCurrentUser } from '@/app/slices/userSlice'

const NavBar = () => {
  const [logOut] = useLogOutMutation()
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser)
  const content = user && Object.keys(user).length
    ? (
    <>
      <Link to='/create' className='hidden sm:flex'><li><Button actionType='primary'>Crear Evento</Button></li></Link>
      <li className='hidden sm:flex'><Button onClick={async () => await logOut()} actionType='secondary'>Cerrar Sesión</Button></li>
    </>
      )
    : (
    <>
        <li className='gap-5 hidden sm:flex'>
          <Link to='/login'><Button actionType='primary'>Iniciar Sesión</Button></Link>
          <Link to='/register'><Button actionType='primary'>Registrarse</Button></Link>
        </li>
    </>
      )

  return (
    <nav className='h-14 bg-slate-300'>
      <ul className='flex justify-between items-center h-full mr-14'>
        <Link to='/'><li><Logo /></li></Link>
        <li onClick={() => dispatch(setMenu(true))} className='flex gap-3  cursor-pointer sm:hidden'><MenuIcon/></li>
        {content}
      </ul>
    </nav>
  )
}

export default NavBar
